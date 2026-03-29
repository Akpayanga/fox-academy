const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/user.model");
const { generateToken } = require("../utilities/jwt");
const crypto = require("crypto");
const { sendVerificationEmail } = require("../utilities/email.util");

// GOOGLE STRATEGY
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:8000/api/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const email = profile.emails?.[0]?.value;

        if (!email) {
          return done(new Error("No email found from Google"), null);
        }

        let user = await User.findOne({ email, provider: "google" });

        if (!user) {
          const token = crypto.randomBytes(32).toString("hex");

          user = await User.create({
            firstName: profile.name?.givenName || "Google",
            lastName: profile.name?.familyName || "User",
            email,
            provider: "google",
            isVerified: false,
            role: "student",
            verificationToken: token,
            verificationTokenExpiry: Date.now() + 3600000,
          });

          await sendVerificationEmail(email, token);
        }

        // BLOCK LOGIN IF NOT VERIFIED
        if (!user.isVerified) {
          return done(null, false, {
            message: "Please verify your email first",
          });
        }

        const token = generateToken({ id: user._id, role: user.role });

        return done(null, { user, token });
      } catch (err) {
        return done(err, null);
      }
    }
  )
);
module.exports = passport;