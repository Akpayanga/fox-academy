const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/user.model");
const {
  generateAccessToken,
  generateRefreshToken,
} = require("../utilities/jwt");
const crypto = require("crypto");
const {
  enqueueVerificationEmail,
  enqueueWelcomeEmail,
} = require("../service/email.service");
const { sendVerificationEmail } = require("../utilities/email.util");
const { recordAudit } = require("../utilities/audit.util");

// ADMIN GOOGLE STRATEGY
passport.use(
  "google-admin",
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:8000/api/v1/auth/admin/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const email = profile.emails?.[0]?.value;
        if (!email) return done(new Error("No email found from Google"), null);

        let user = await User.findOne({
          email,
          provider: "google",
          role: "admin",
        });

        if (!user) {
          // Normal registration flow for admin
          const token = crypto.randomBytes(32).toString("hex");

          user = await User.create({
            firstName: profile.name?.givenName || "Google",
            lastName: profile.name?.familyName || "Admin",
            email,
            provider: "google",
            role: "admin",
            isVerified: false,
            verificationToken: token,
            verificationTokenExpiry: Date.now() + 3600000, // 1 hour
          });

          await enqueueVerificationEmail(email, token, "ADMIN_FLOW");
        }

        //Audit log for Google Admin registration
        await recordAudit({
          userId: user._id,
          action: "ADMIN_GOOGLE_REGISTER",
          details: "Admin registered via Google OAuth",
          req: {},
          status: "success",
          resourceId: user._id,
          resourceType: "User",
          metadata: { role: "admin", provider: "google" },
        });

        if (!user.isVerified) {
          return done(null, false, {
            message: "Please verify your admin email first",
          });
        }

        //Send welcome email once verified
        await enqueueWelcomeEmail(user.email);

        const token = generateAccessToken({ id: user._id, role: user.role });

        //Audit log for Google Admin login
        await recordAudit({
          userId: user._id,
          action: "ADMIN_GOOGLE_LOGIN",
          details: "Admin logged in via Google OAuth",
          req: {},
          status: "success",
          resourceId: user._id,
          resourceType: "User",
          metadata: { role: "admin", provider: "google" },
        });
        return done(null, { user, token });
      } catch (err) {
        return done(err, null);
      }
    },
  ),
);

// USER/INSTRUCTOR GOOGLE STRATEGY
passport.use(
  "google-user-instructor",
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL:
        "http://localhost:8000/api/v1/auth/user-instructor/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const email = profile.emails?.[0]?.value;
        if (!email) return done(new Error("No email found from Google"), null);

        let user = await User.findOne({ email, provider: "google" });

        if (!user) {
          const invitationCode = crypto
            .randomBytes(6)
            .toString("hex")
            .toUpperCase();
          const token = generateRefreshToken({ email });

          user = await User.create({
            firstName: profile.name?.givenName || "Google",
            lastName: profile.name?.familyName || "User",
            email,
            provider: "google",
            role: "student", // or instructor depending on context
            preRegistered: true,
            invitationCode,
            verificationToken: token,
            verificationTokenExpiry: Date.now() + 10 * 60 * 1000,
          });

          await sendVerificationEmail(email, token, invitationCode);

          //Audit log for Google User/Instructor registration
          await recordAudit({
            userId: user._id,
            action: "USER_GOOGLE_PRE_REGISTER",
            details: "User pre-registered via Google OAuth",
            req: {},
            status: "success",
            resourceId: user._id,
            resourceType: "User",
            metadata: { role: user.role, provider: "google" },
          });
        }

        if (!user.isInvited || !user.isVerified) {
          return done(null, false, {
            message: "Please verify your invitation code first",
          });
        }

        //Send welcome email once verified
        await enqueueWelcomeEmail(user.email);

        const token = generateAccessToken({ id: user._id, role: user.role });

        await recordAudit({
          userId: user._id,
          action: "USER_GOOGLE_LOGIN",
          details: `${user.role} logged in via Google OAuth`,
          req: {},
          status: "success",
          resourceId: user._id,
          resourceType: "User",
          metadata: { role: user.role, provider: "google" },
        });

        return done(null, { user, token });
      } catch (err) {
        return done(err, null);
      }
    },
  ),
);

module.exports = passport;
