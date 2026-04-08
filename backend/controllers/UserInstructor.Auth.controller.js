const User = require("../models/user.model");
const ApiError = require("../utilities/apiError.util");
const { success } = require("../utilities/response");
const { generateAccessToken, generateRefreshToken, verifyToken } = require("../utilities/jwt");
const crypto = require("crypto");
const { enqueueVerificationEmail } = require("../service/email.service");
const { recordAudit } = require("../utilities/audit.util");

// Pre-register (students/instructors)
exports.preRegister = async (req, res, next) => {
  try {
    const { firstName, lastName, email, role } = req.body;
    if (!["student", "instructor"].includes(role)) throw new ApiError(400, "Invalid role");

    let user = await User.findOne({ email, provider: "local" });
    if (user) throw new ApiError(400, "User already exists");

    const invitationCode = crypto.randomBytes(6).toString("hex").toUpperCase();
    const token = generateRefreshToken({ email });

    user = await User.create({
      firstName,
      lastName,
      email,
      role,
      preRegistered: true,
      invitationCode,
      verificationToken: token,
      verificationTokenExpiry: Date.now() + 10 * 60 * 1000,
    });

    await enqueueVerificationEmail(email, token, invitationCode);
    await recordAudit({ userId: user._id, action: "PRE_REGISTER", details: `${role} pre-registered`, req });

    return success(res, null, "Pre-registration successful. Check your email in 10 minutes.");
  } catch (err) { next(err); }
};

// Verify invitation
exports.verifyInvitation = async (req, res, next) => {
  try {
    const { token, code } = req.body;
    const decoded = verifyToken(token, process.env.JWT_REFRESH_SECRET);
    const user = await User.findOne({ email: decoded.email, preRegistered: true });

    if (!user || user.verificationToken !== token || user.verificationTokenExpiry < Date.now()) {
      throw new ApiError(400, "Invalid or expired token");
    }
    if (user.invitationCode !== code) throw new ApiError(400, "Invalid invitation code");

    user.isInvited = true;
    user.isVerified = true;
    user.verificationToken = null;
    user.invitationCode = null;
    await user.save();

    await recordAudit({ userId: user._id, action: "VERIFY_INVITATION", details: "Invitation verified", req });
    return success(res, null, "Invitation verified. Continue registration.");
  } catch (err) { next(err); }
};

// Complete registration
exports.completeRegistration = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, isInvited: true, preRegistered: true });
    if (!user) throw new ApiError(404, "User not found or not invited");

    user.password = password;
    user.preRegistered = false;
    await user.save();

    await recordAudit({ userId: user._id, action: "COMPLETE_REGISTRATION", details: "User set password", req });
    return success(res, user, "Registration completed successfully");
  } catch (err) { next(err); }
};

// LOGIN
exports.login = async (req, res, next) => {
  try {
    const { email, password, provider } = req.body;

    const user = await User.findOne({ email, provider }).notDeleted();
    if (!user) throw new ApiError(404, "User not found");
    if (!user.isVerified) throw new ApiError(403, "Account not verified");

    if (provider === "local") {
      const isMatch = await user.comparePassword(password);
      if (!isMatch) throw new ApiError(401, "Invalid credentials");
    }

    const accessToken = generateAccessToken({ id: user._id, role: user.role });
    const refreshToken = generateRefreshToken({ id: user._id });

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    await recordAudit({ userId: user._id, action: "LOGIN", details: "User logged in", req });

    return success(res, { user, accessToken }, "Login successful");
  } catch (err) {
    next(err);
  }
};

exports.googleUserInstructorLogin = async (req, res, next) => {
  try {
    if (!req.user) throw new ApiError(403, "Please verify your invitation before logging in");

    const { user, token } = req.user;

    if (!["student", "instructor"].includes(user.role)) {
      throw new ApiError(403, "Google login restricted to students/instructors here");
    }

    await recordAudit({ userId: user._id, action: "USER_GOOGLE_LOGIN", details: `${user.role} logged in via Google`, req });

    return success(res, { user, token }, "Google login successful");
  } catch (err) {
    next(err);
  }
};

// REFRESH TOKEN
exports.refreshToken = async (req, res, next) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) throw new ApiError(401, "Refresh token missing");

    const decoded = verifyToken(refreshToken, process.env.JWT_REFRESH_SECRET);
    const user = await User.findById(decoded.id).notDeleted();
    if (!user) throw new ApiError(404, "User not found");

    const newAccessToken = generateAccessToken({ id: user._id, role: user.role });
    await recordAudit({ userId: user._id, action: "REFRESH_TOKEN", details: "Access token refreshed", req });

    return success(res, { accessToken: newAccessToken }, "Access token refreshed");
  } catch (err) {
    next(err);
  }
};

// FORGOT PASSWORD
exports.forgotPassword = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email, provider: "local" }).notDeleted();
    if (!user) throw new ApiError(404, "User not found");

    const resetToken = generateAccessToken({ id: user._id });
    user.resetToken = resetToken;
    user.resetTokenExpiry = new Date(Date.now() + 3600000);
    await user.save();

    await recordAudit({ userId: user._id, action: "FORGOT_PASSWORD", details: "Reset token generated", req });

    return success(res, { resetToken }, "Password reset token generated");
  } catch (err) {
    next(err);
  }
};

// RESET PASSWORD
exports.resetPassword = async (req, res, next) => {
  try {
    const { token, newPassword } = req.body;
    const decoded = verifyToken(token);

    const user = await User.findById(decoded.id);
    if (!user || user.resetToken !== token || user.resetTokenExpiry < Date.now()) {
      throw new ApiError(400, "Invalid or expired token");
    }

    user.password = newPassword;
    user.resetToken = null;
    user.resetTokenExpiry = null;
    await user.save();

    await recordAudit({ userId: user._id, action: "RESET_PASSWORD", details: "Password reset", req });

    return success(res, null, "Password reset successful");
  } catch (err) {
    next(err);
  }
};

// PROFILE
exports.profile = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id).notDeleted();
    if (!user) throw new ApiError(404, "User not found");

    await recordAudit({ userId: user._id, action: "PROFILE_VIEW", details: "Profile fetched", req });

    return success(res, user, "Profile fetched successfully");
  } catch (err) {
    next(err);
  }
};
// PROFILE (example protected route)
exports.profile = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id).notDeleted();
    if (!user) throw new ApiError(404, "User not found");

    return success(res, user, "Profile fetched successfully");
  } catch (err) {
    next(err);
  }
};
const generateStudentId = async (course) => {
  const year = new Date().getFullYear();

  const courseMap = {
    backend: "BE",
    cybersecurity: "CS",
    frontend: "FE",
    productdesign: "PD",
  };

  const prefix = courseMap[course];

  const count = await User.countDocuments({ course });

  const number = String(count + 1).padStart(3, "0");

  return `TA/${year}/${number}/${prefix}COHORT01`;
};
exports.completeProfile = async (req, res, next) => {
  try {
    const { course } = req.body;
    const user = await User.findById(req.user.id);

    if (!user.isVerified) {
      throw new ApiError(403, "Verify your email first");
    }

    if (!course) {
      throw new ApiError(400, "Course selection is required");
    }

    user.course = course;
    user.studentId = await generateStudentId(course);

    await user.save();

    return success(res, user, "Profile completed successfully");
  } catch (err) {
    next(err);
  }
};
// LOGOUT
exports.logout = async (req, res, next) => {
  try {
    res.clearCookie("refreshToken");
    await recordAudit({ userId: req.user?.id, action: "LOGOUT", details: "User logged out", req });
    return success(res, null, "Logout successful. Redirecting to login...");
  } catch (err) {
    next(err);
  }
};