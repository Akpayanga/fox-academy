const User = require("../models/user.model");
const ApiError = require("../utilities/apiError.util");
const { success } = require("../utilities/response");
const {
  generateAccessToken,
  generateRefreshToken,
  verifyToken,
} = require("../utilities/jwt");
const crypto = require("crypto");
const {
  enqueueVerificationEmail,
  enqueueWelcomeEmail,
} = require("../service/email.service");
const { recordAudit } = require("../utilities/audit.util");

// ADMIN REGISTER
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
      "Admin registration successful. Use the token to verify email.",
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
    await enqueueWelcomeEmailAdmin(user._id, user.email, user.firstName);

    await recordAudit({
      userId: user._id,
      action: "EMAIL_ENQUEUED:WELCOME_ADMIN",
      details: `Admin welcome email enqueued for ${user.email}`,
      req,
      status: "success",
      resourceId: user._id,
      resourceType: "User",
      metadata: { email: user.email },
    });

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

exports.adminLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Always enforce admin role internally
    const user = await User.findOne({
      email,
      provider: "local",
      role: "admin",
    }).notDeleted();

    if (!user) throw new ApiError(404, "Admin not found");
    if (!user.isVerified) throw new ApiError(403, "Admin account not verified");

    const isMatch = await user.comparePassword(password);
    if (!isMatch) throw new ApiError(401, "Invalid credentials");

    const accessToken = generateAccessToken({ id: user._id, role: "admin" });
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
    if (!user || user.role !== "admin")
      throw new ApiError(404, "Admin not found");

    const newAccessToken = generateAccessToken({
      id: user._id,
      role: user.role,
    });

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

    return success(
      res,
      { accessToken: newAccessToken },
      "Admin access token refreshed",
    );
  } catch (err) {
    next(err);
  }
};

// ADMIN LOGOUT
exports.adminLogout = async (req, res, next) => {
  try {
    res.clearCookie("refreshToken");

    if (!req.user || req.user.role !== "admin") {
      throw new ApiError(403, "Only admins can log out here");
    }

    await recordAudit({
      userId: req.user.id,
      action: "ADMIN_LOGOUT",
      details: "Admin logged out",
      req,
      status: "success",
      resourceId: req.user.id,
      resourceType: "User",
      metadata: { role: "admin", email: req.user.email },
    });

    return success(res, null, "Admin logout successful");
  } catch (err) {
    next(err);
  }
};

// ADMIN INVITE MENTOR
exports.adminInviteMentor = async (req, res, next) => {
  try {
    const { fullName, email, discipline, roleTitle } = req.body;

    if (!email || !discipline || !roleTitle) {
      throw new ApiError(400, "Email, discipline, and role title are required");
    }

    let user = await User.findOne({ email, provider: "local" });
    if (user) throw new ApiError(400, "Mentor already exists");

    const invitationCode = crypto.randomBytes(6).toString("hex").toUpperCase();
    const token = generateRefreshToken({ email });

    const expiryHours =
      Number(process.env.INVITE_EXPIRY_HOURS_INSTRUCTOR) || 48;

    user = await User.create({
      firstName: fullName.split(" ")[0],
      lastName: fullName.split(" ").slice(1).join(" "),
      email,
      role: "instructor", // force role internally
      discipline,
      roleTitle,
      preRegistered: true,
      invitationCode,
      verificationToken: token,
      verificationTokenExpiry: Date.now() + expiryHours * 60 * 60 * 1000,
    });

    await enqueueVerificationEmail(email, token, invitationCode, "instructor");

    await recordAudit({
      userId: user._id,
      action: "ADMIN_INVITE_MENTOR",
      details: `Admin invited mentor ${email} for ${discipline}`,
      req,
      status: "success",
      resourceId: user._id,
      resourceType: "User",
      metadata: { discipline, roleTitle, email },
    });

    return success(
      res,
      { invitationCode, token },
      `Mentor invitation sent to ${email}. Link expires in ${expiryHours} hours.`,
    );
  } catch (err) {
    next(err);
  }
};
// ADMIN ADD STUDENT
exports.adminAddStudent = async (req, res, next) => {
  try {
    const { firstName, lastName, email, course, profilePhoto } = req.body;

    let user = await User.findOne({ email, provider: "local" });
    if (user) throw new ApiError(400, "Student already exists");

    user = await User.create({
      firstName,
      lastName,
      email,
      role: "student", // force role internally
      course,
      profilePhoto: profilePhoto || undefined,
      isVerified: true,
    });
    await enqueueWelcomeEmailStudent(user._id, user.email, user.firstName);

    await recordAudit({
      userId: user._id,
      action: "EMAIL_ENQUEUED:WELCOME_STUDENT",
      details: `Student welcome email enqueued for ${user.email}`,
      req,
      status: "success",
      resourceId: user._id,
      resourceType: "User",
      metadata: { email: user.email },
    });

    await recordAudit({
      userId: user._id,
      action: "ADMIN_ADD_STUDENT",
      details: `Admin added student ${email}`,
      req,
      status: "success",
      resourceId: user._id,
      resourceType: "User",
      metadata: { role: "student", course },
    });

    return success(res, user, "Student added successfully");
  } catch (err) {
    next(err);
  }
};

exports.adminUpdateUser = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const updates = req.body;

    const user = await User.findById(userId).notDeleted();
    if (!user) throw new ApiError(404, "User not found");

    Object.assign(user, updates);
    await user.save();

    await recordAudit({
      userId: user._id,
      action: "ADMIN_UPDATE_USER",
      details: `Admin updated ${user.role} ${user.email}`,
      req,
      status: "success",
      resourceId: user._id,
      resourceType: "User",
      metadata: { role: user.role },
    });

    return success(res, user, `${user.role} updated successfully`);
  } catch (err) {
    next(err);
  }
};

// Get single user by ID
exports.adminGetUser = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId).notDeleted();
    if (!user) throw new ApiError(404, "User not found");

    return success(res, user, `${user.role} retrieved successfully`);
  } catch (err) {
    next(err);
  }
};

// Get users by filter (name or email)
exports.adminGetUsers = async (req, res, next) => {
  try {
    const { role, name, email } = req.query;
    const filter = { deletedAt: null };

    if (role) filter.role = role;
    if (name)
      filter.$or = [
        { firstName: new RegExp(name, "i") },
        { lastName: new RegExp(name, "i") },
      ];
    if (email) filter.email = new RegExp(email, "i");

    const users = await User.find(filter);
    return success(res, users, "Users retrieved successfully");
  } catch (err) {
    next(err);
  }
};
exports.adminDeleteUser = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId);
    if (!user) throw new ApiError(404, "User not found");

    await User.softDelete(userId);

    await recordAudit({
      userId: user._id,
      action: "ADMIN_DELETE_USER",
      details: `Admin deleted ${user.role} ${user.email}`,
      req,
      status: "success",
      resourceId: user._id,
      resourceType: "User",
      metadata: { role: user.role },
    });

    return success(res, null, `${user.role} deleted successfully`);
  } catch (err) {
    next(err);
  }
};

exports.adminRestoreUser = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const user = await User.restore(userId);
    if (!user) throw new ApiError(404, "User not found or not deleted");

    await recordAudit({
      userId: user._id,
      action: "ADMIN_RESTORE_USER",
      details: `Admin restored ${user.role} ${user.email}`,
      req,
      status: "success",
      resourceId: user._id,
      resourceType: "User",
      metadata: { role: user.role },
    });

    return success(res, user, `${user.role} restored successfully`);
  } catch (err) {
    next(err);
  }
};
