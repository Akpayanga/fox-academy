const User = require("../models/user.model");
const ApiError = require("../utilities/apiError.util");
const { success } = require("../utilities/response");
const { generateAccessToken, generateRefreshToken, verifyToken } = require("../utilities/jwt");
const crypto = require("crypto");
const { sendVerificationEmail } = require("../utilities/email.util");

//register
exports.register = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password, provider, role } = req.body;

    let user = await User.findOne({ email, provider });
    if (user) throw new ApiError(400, "User already exists");

    const token = crypto.randomBytes(32).toString("hex");

    user = await User.create({
      firstName,
      lastName,
      email,
      password,
      provider,
      role,
      isVerified: false,
      verificationToken: token,
      verificationTokenExpiry: Date.now() + 3600000, // 1 hour
    });

    await sendVerificationEmail(user.email, token);

    return success(res, null, "Registration successful. Please verify your email.");
  } catch (err) {
    next(err);
  }
};
// VERIFY EMAIL
exports.verifyEmail = async (req, res, next) => {
  try {
    const { token } = req.query;

    const user = await User.findOne({
      verificationToken: token,
      verificationTokenExpiry: { $gt: Date.now() },
    });

    if (!user) throw new ApiError(400, "Invalid or expired token");

    user.isVerified = true;
    user.verificationToken = null;
    user.verificationTokenExpiry = null;

    await user.save();

    return success(res, null, "Email verified successfully");
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

    if (!user.isVerified) {
      throw new ApiError(403, "Account not verified. Please check your email.");
    }

    if (provider === "local") {
      const isMatch = await user.comparePassword(password);
      if (!isMatch) throw new ApiError(401, "Invalid credentials");
    }

    // Generate tokens
    const accessToken = generateAccessToken({ id: user._id, role: user.role });
    const refreshToken = generateRefreshToken({ id: user._id });

    // Send refresh token in secure HTTP-only cookie
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // only https in production
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    return success(res, { user, accessToken }, "Login successful");
  } catch (err) {
    next(err);
  }
};


// GOOGLE LOGIN HANDLER
exports.googleLogin = async (req, res, next) => {
  try {
    if (!req.user) {
      throw new ApiError(403, "Please verify your email before logging in");
    }

    const { user, token } = req.user;

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

    const resetToken = generateToken({ id: user._id }, "1h");
    user.resetToken = resetToken;
    user.resetTokenExpiry = new Date(Date.now() + 3600000); // 1 hour
    await user.save();

    // TODO: send resetToken via email
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

    user.password = newPassword; // will be hashed by pre-save hook
    user.resetToken = null;
    user.resetTokenExpiry = null;
    await user.save();

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
    return success(res, null, "Logout successful. Redirecting to login...");
  } catch (err) {
    next(err);
  }
};
