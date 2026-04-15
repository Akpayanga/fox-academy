const User = require("../models/user.model");
const ApiError = require("../utilities/apiError.util");
const { success } = require("../utilities/response");
const {
  generateAccessToken,
  generateRefreshToken,
  verifyToken,
} = require("../utilities/jwt");
const crypto = require("crypto");
const { enqueueVerificationEmail, enqueueWelcomeEmail } = require("../service/email.service");
const { recordAudit } = require("../utilities/audit.util");

// ADMIN REGISTER
exports.adminRegister = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password, role } = req.body;

    // Require role explicitly
    if (role !== "admin") {
      throw new ApiError(400, "Role must be admin");
    }

    let user = await User.findOne({ email, provider: "local" });
    if (user) throw new ApiError(400, "User already exists");

    const token = crypto.randomBytes(32).toString("hex");

    user = await User.create({
      firstName,
      lastName,
      email,
      password,
      provider: "local",
      role,
      isVerified: false,
      verificationToken: token,
      verificationTokenExpiry: Date.now() + 3600000,
    });

    // Instead of only sending email, also return accessToken
    const accessToken = generateAccessToken({ id: user._id, role: user.role });

    await recordAudit({
      userId: user._id,
      action: "ADMIN_REGISTER",
      details: "Admin registered",
      req,
      status: "success",
      resourceId: user._id,
      resourceType: "User",
      metadata: { role: "admin" },
    });

    return success(
      res,
      { user, accessToken, verificationToken: token },
      "Admin registration successful. Use the token to verify email."
    );
  } catch (err) {
    next(err);
  }
};


// ADMIN VERIFY EMAIL
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

    await recordAudit({
      userId: user._id,
      action: "ADMIN_VERIFY_EMAIL",
      details: "Admin email verified",
      req,
      status: "success",
      resourceId: user._id,
      resourceType: "User",
      metadata: { role: "admin" },
    });

    await enqueueWelcomeEmail(user.email);

    return success(res, null, "Admin email verified successfully");
  } catch (err) {
    next(err);
  }
};
//google Admin Login
exports.googleAdminLogin = async (req, res, next) => {
  try {
    if (!req.user)
      throw new ApiError(403, "Please verify your email before logging in");

    const { user, token } = req.user;

    if (user.role !== "admin")
      throw new ApiError(403, "Google login restricted to admins here");

    await recordAudit({
      userId: user._id,
      action: "ADMIN_GOOGLE_LOGIN",
      details: "Admin logged in via Google",
      req,
      status: "success",
      resourceId: user._id,
      resourceType: "User",
      metadata: { role: "admin", provider: "google" },
    });

    return success(res, { user, token }, "Admin Google login successful");
  } catch (err) {
    next(err);
  }
};

// ADMIN LOGIN
exports.adminLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, provider: "local", role: "admin" }).notDeleted();
    if (!user) throw new ApiError(404, "Admin not found");
    if (!user.isVerified) throw new ApiError(403, "Admin account not verified");

    const isMatch = await user.comparePassword(password);
    if (!isMatch) throw new ApiError(401, "Invalid credentials");

    const accessToken = generateAccessToken({ id: user._id, role: user.role });
    const refreshToken = generateRefreshToken({ id: user._id });

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    await recordAudit({
      userId: user._id,
      action: "ADMIN_LOGIN",
      details: "Admin logged in via local credentials",
      req,
      status: "success",
      resourceId: user._id,
      resourceType: "User",
      metadata: { provider: "local", role: "admin" },
    });

    return success(res, { user, accessToken }, "Admin login successful");
  } catch (err) {
    next(err);
  }
};

// ADMIN REFRESH TOKEN
exports.adminRefreshToken = async (req, res, next) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) throw new ApiError(401, "Refresh token missing");

    const decoded = verifyToken(refreshToken, process.env.JWT_REFRESH_SECRET);
    const user = await User.findById(decoded.id).notDeleted();
    if (!user || user.role !== "admin") throw new ApiError(404, "Admin not found");

    const newAccessToken = generateAccessToken({ id: user._id, role: user.role });

    await recordAudit({
      userId: user._id,
      action: "ADMIN_REFRESH_TOKEN",
      details: "Admin access token refreshed",
      req,
      status: "success",
      resourceId: user._id,
      resourceType: "User",
      metadata: { role: "admin" },
    });

    return success(res, { accessToken: newAccessToken }, "Admin access token refreshed");
  } catch (err) {
    next(err);
  }
};

// ADMIN LOGOUT
exports.adminLogout = async (req, res, next) => {
  try {
    res.clearCookie("refreshToken");

    await recordAudit({
      userId: req.user?.id,
      action: "ADMIN_LOGOUT",
      details: "Admin logged out",
      req,
      status: "success",
      resourceId: req.user?.id,
      resourceType: "User",
      metadata: { role: "admin" },
    });

    return success(res, null, "Admin logout successful");
  } catch (err) {
    next(err);
  }
};
