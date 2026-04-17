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
        await enqueueWelcomeEmailAdmin(user._id, user.email, user.firstName);

        await recordAudit({
          userId: user._id,
          action: "EMAIL_ENQUEUED:WELCOME_ADMIN",
          details: `Admin welcome email enqueued for ${user.email}`,
          req: {},
          status: "success",
          resourceId: user._id,
          resourceType: "User",
          metadata: { provider: "google" },
        });

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
            role: "student", // restricted to student
            preRegistered: true,
            invitationCode,
            verificationToken: token,
            verificationTokenExpiry: Date.now() + 24 * 60 * 60 * 1000, // 24h expiry
          });

          await sendVerificationEmail(email, token, invitationCode);

          await recordAudit({
            userId: user._id,
            action: "USER_GOOGLE_PRE_REGISTER",
            details: `Student pre-registered via Google: ${user.email}`,
            req: {},
            status: "success",
            resourceId: user._id,
            resourceType: "User",
            metadata: {
              email: user.email,
              discipline: user.discipline,
              expertiseLevel: user.expertiseLevel,
              provider: "google",
            },
          });
        }

        if (!user.isInvited || !user.isVerified) {
          return done(null, false, {
            message: "Please verify your invitation code first",
          });
        }

        await enqueueWelcomeEmailStudent(user._id, user.email, user.firstName);

        await recordAudit({
          userId: user._id,
          action: "EMAIL_ENQUEUED:WELCOME_STUDENT",
          details: `Student welcome email enqueued for ${user.email}`,
          req: {},
          status: "success",
          resourceId: user._id,
          resourceType: "User",
          metadata: { provider: "google" },
        });

        const token = generateAccessToken({ id: user._id, role: user.role });

        // Enriched audit logging for Google login
        await recordAudit({
          userId: user._id,
          action: "USER_GOOGLE_LOGIN",
          details: `Student logged in via Google: ${user.email}`,
          req: {},
          status: "success",
          resourceId: user._id,
          resourceType: "User",
          metadata: {
            email: user.email,
            discipline: user.discipline,
            expertiseLevel: user.expertiseLevel,
            course: user.course,
            studentId: user.studentId,
            provider: "google",
          },
        });

        return done(null, { user, token });
      } catch (err) {
        return done(err, null);
      }
    },
  ),
);
