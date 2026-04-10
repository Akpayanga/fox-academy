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

// Pre-register (students/instructors)
exports.preRegister = async (req, res, next) => {
  try {
    const { firstName, lastName, email, role } = req.body;
    if (!["student", "instructor"].includes(role))
      throw new ApiError(400, "Invalid role");

    let user = await User.findOne({ email, provider: "local" });
    if (user) throw new ApiError(400, "User already exists");

    const invitationCode = crypto.randomBytes(6).toString("hex").toUpperCase();
    const token = generateRefreshToken({ email });
    // Role-based expiry with fallback
    let expiryHours;
    if (role === "student") {
      expiryHours = Number(process.env.INVITE_EXPIRY_HOURS_STUDENT) || 48;
    } else if (role === "instructor") {
      expiryHours = Number(process.env.INVITE_EXPIRY_HOURS_INSTRUCTOR) || 72;
    } else {
      expiryHours = Number(process.env.INVITE_EXPIRY_HOURS_DEFAULT) || 24;
    }

    user = await User.create({
      firstName,
      lastName,
      email,
      role,
      preRegistered: true,
      invitationCode,
      verificationToken: token,
      verificationTokenExpiry: Date.now() + expiryHours * 60 * 60 * 1000,
    });

    await enqueueVerificationEmail(email, token, invitationCode, role);
    await recordAudit({
      userId: user._id,
      action: "PRE_REGISTER",
      details: `${role} pre-registered`,
      req,
      status: "success",
      resourceId: user._id,
      resourceType: "User",
    });

    return success(
      res,
      { token, invitationCode },
      `Pre-registration successful. You will get an email notification if selected. Pls, watch out for the email including your Junk/Spam mail in the next 10 minutes. Link expires in ${expiryHours} hours.`,
    );
  } catch (err) {
    next(err);
  }
};

// Verify invitation
exports.verifyInvitation = async (req, res, next) => {
  try {
    const { token, code } = req.body;
    const decoded = verifyToken(token, process.env.JWT_REFRESH_SECRET);
    const user = await User.findOne({
      email: decoded.email,
      preRegistered: true,
    });

    if (
      !user ||
      user.verificationToken !== token ||
      user.verificationTokenExpiry < Date.now()
    ) {
      throw new ApiError(400, "Invalid or expired token");
    }
    if (user.invitationCode !== code)
      throw new ApiError(400, "Invalid invitation code");

    user.isInvited = true;
    user.isVerified = true;
    user.verificationToken = null;
    user.invitationCode = null;
    // Skip validation here, course will be set later
    await user.save({ validateBeforeSave: false });
    await recordAudit({
      userId: user._id,
      action: "VERIFY_INVITATION",
      details: "Invitation verified",
      req,
      status: "success",
      resourceId: user._id,
      resourceType: "User",
    });

    await enqueueWelcomeEmail(user.email);

    return success(res, null, "Invitation verified. Continue registration.");
  } catch (err) {
    next(err);
  }
};

// Complete registration
exports.completeRegistration = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({
      email,
      isInvited: true,
      preRegistered: true,
    });
    if (!user) throw new ApiError(404, "User not found or not invited");

    user.password = password;
    user.preRegistered = false;
    await user.save({ validateBeforeSave: false });

    await recordAudit({
      userId: user._id,
      action: "COMPLETE_REGISTRATION",
      details: "User set password",
      req,
      status: "success",
      resourceId: user._id,
      resourceType: "User",
    });
    return success(res, user, "Registration completed successfully");
  } catch (err) {
    next(err);
  }
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

    await recordAudit({
      userId: user._id,
      action: "LOGIN",
      details: "User logged in",
      req,
      status: "success",
      resourceId: user._id,
      resourceType: "User",
      metadata: { provider },
    });

    return success(res, { user, accessToken }, "Login successful");
  } catch (err) {
    next(err);
  }
};

exports.googleUserInstructorLogin = async (req, res, next) => {
  try {
    if (!req.user)
      throw new ApiError(
        403,
        "Please verify your invitation before logging in",
      );

    const { user, token } = req.user;

    if (!["student", "instructor"].includes(user.role)) {
      throw new ApiError(
        403,
        "Google login restricted to students/instructors here",
      );
    }

    await recordAudit({
      userId: user._id,
      action: "USER_GOOGLE_LOGIN",
      details: `${user.role} logged in via Google`,
      req,
      status: "success",
      resourceId: user._id,
      resourceType: "User",
      metadata: { provider: "google", role: user.role },
    });

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

    const newAccessToken = generateAccessToken({
      id: user._id,
      role: user.role,
    });
    await recordAudit({
      userId: user._id,
      action: "REFRESH_TOKEN",
      details: "Access token refreshed",
      req,
      status: "success",
      resourceId: user._id,
      resourceType: "User",
    });

    return success(
      res,
      { accessToken: newAccessToken },
      "Access token refreshed",
    );
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

    await recordAudit({
      userId: user._id,
      action: "FORGOT_PASSWORD",
      details: "Reset token generated",
      req,
      status: "success",
      resourceId: user._id,
      resourceType: "User",
    });

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
    if (
      !user ||
      user.resetToken !== token ||
      user.resetTokenExpiry < Date.now()
    ) {
      throw new ApiError(400, "Invalid or expired token");
    }

    user.password = newPassword;
    user.resetToken = null;
    user.resetTokenExpiry = null;
    await user.save();

    await recordAudit({
      userId: user._id,
      action: "RESET_PASSWORD",
      details: "Password reset",
      req,
      status: "success",
      resourceId: user._id,
      resourceType: "User",
    });

    return success(res, null, "Password reset successful");
  } catch (err) {
    next(err);
  }
};
// PROFILE (example protected route)
exports.profile = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id).notDeleted();
    if (!user) throw new ApiError(404, "User not found");

    await recordAudit({
      userId: user._id,
      action: "PROFILE_VIEW",
      details: "Profile fetched",
      req,
      status: "success",
      resourceId: user._id,
      resourceType: "User",
    });
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
  return `FA/${year}/${number}/${prefix}COHORT01`;
};

// STUDENT PROFILE COMPLETION
exports.completeStudentProfile = async (req, res, next) => {
  try {
    const { course } = req.body;
    const user = await User.findById(req.user.id);

    if (!user.isVerified) throw new ApiError(403, "Verify your email first");
    if (user.role !== "student")
      throw new ApiError(403, "Only students can complete this profile");
    if (!course) throw new ApiError(400, "Course selection is required");

    user.course = course;
    user.studentId = await generateStudentId(course);

    await user.save();

    await recordAudit({
      userId: user._id,
      action: "COMPLETE_STUDENT_PROFILE",
      details: `Student profile completed with course ${course}`,
      req,
      status: "success",
      resourceId: user._id,
      resourceType: "User",
      metadata: { course },
    });

    return success(res, user, "Student profile completed successfully");
  } catch (err) {
    next(err);
  }
};

// MENTOR PROFILE COMPLETION
exports.completeMentorProfile = async (req, res, next) => {
  try {
    const { bio, linkedIn, phoneNumber, roleTitle } = req.body;
    const user = await User.findById(req.user.id);

    if (!user.isVerified) throw new ApiError(403, "Verify your email first");
    if (user.role !== "instructor")
      throw new ApiError(
        403,
        "Only mentors/instructors can complete this profile",
      );

    if (!bio) throw new ApiError(400, "Short bio is required");
    if (!roleTitle) throw new ApiError(400, "Role title is required");

    user.bio = bio;
    user.linkedIn = linkedIn;
    user.phoneNumber = phoneNumber;
    user.roleTitle = roleTitle;

    await user.save();

    await recordAudit({
      userId: user._id,
      action: "COMPLETE_MENTOR_PROFILE",
      details: "Mentor profile completed",
      req,
      status: "success",
      resourceId: user._id,
      resourceType: "User",
      metadata: { roleTitle },
    });

    return success(res, user, "Instructor profile completed successfully");
  } catch (err) {
    next(err);
  }
};

// LOGOUT
exports.logout = async (req, res, next) => {
  try {
    res.clearCookie("refreshToken");
    await recordAudit({
      userId: req.user?.id,
      action: "LOGOUT",
      details: "User logged out",
      req,
      status: "success",
      resourceId: req.user?.id,
      resourceType: "User",
    });

    return success(res, null, "Logout successful. Redirecting to login...");
  } catch (err) {
    next(err);
  }
};

// delete user
exports.deleteUser = async (req, res, next) => {
  try {
    const { email } = req.body;

    if (!email) {
      throw new ApiError(400, "Email is required");
    }

    const user = await User.findOne({ email });

    if (!user) {
      throw new ApiError(404, "User not found");
    }

    await User.deleteOne({ email });

    return success(res, null, "User deleted successfully");
  } catch (err) {
    next(err);
  }
};
