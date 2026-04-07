const User = require("../models/user.model");
const ApiError = require("../utilities/apiError.util");
const { success } = require("../utilities/response");
const crypto = require("crypto");
const { sendVerificationEmail } = require("../utilities/email.util");
const { recordAudit } = require("../utilities/audit.util");

exports.adminRegister = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    let user = await User.findOne({ email, provider: "local" });
    if (user) throw new ApiError(400, "User already exists");

    const token = crypto.randomBytes(32).toString("hex");

    user = await User.create({
      firstName,
      lastName,
      email,
      password,
      provider: "local",
      role: "admin",
      isVerified: false,
      verificationToken: token,
      verificationTokenExpiry: Date.now() + 3600000,
    });

    await sendVerificationEmail(user.email, token, null);
    await recordAudit({ userId: user._id, action: "ADMIN_REGISTER", details: "Admin registered", req });

    return success(res, null, "Admin registration successful. Please verify your email.");
  } catch (err) { next(err); }
};

exports.adminVerifyEmail = async (req, res, next) => {
  try {
    const { token } = req.query;

    const user = await User.findOne({
      verificationToken: token,
      verificationTokenExpiry: { $gt: Date.now() },
      role: "admin",
    });
    if (!user) throw new ApiError(400, "Invalid or expired token");

    user.isVerified = true;
    user.verificationToken = null;
    user.verificationTokenExpiry = null;
    await user.save();

    await recordAudit({ userId: user._id, action: "ADMIN_VERIFY_EMAIL", 
      details: "Admin email verified", req });

    return success(res, null, "Admin email verified successfully");
    
  } catch (err) { next(err); }
};

exports.googleAdminLogin = async (req, res, next) => {
  try {
    if (!req.user) throw new ApiError(403, "Please verify your email before logging in");

    const { user, token } = req.user;

    if (user.role !== "admin") throw new ApiError(403, "Google login restricted to admins here");

    await recordAudit({ userId: user._id, action: "ADMIN_GOOGLE_LOGIN", details: "Admin logged in via Google", req });

    return success(res, { user, token }, "Admin Google login successful");
  } catch (err) {
    next(err);
  }
};
