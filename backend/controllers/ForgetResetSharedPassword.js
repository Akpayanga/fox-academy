const User = require("../models/user.model");
const ApiError = require("../utilities/apiError.util");
const { success } = require("../utilities/response");
const { generateAccessToken, verifyToken } = require("../utilities/jwt");
const { recordAudit } = require("../utilities/audit.util");

// FORGOT PASSWORD (shared)
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
      metadata: { role: user.role },
    });

    return success(res, { resetToken }, "Password reset token generated");
  } catch (err) {
    next(err);
  }
};

// RESET PASSWORD (shared)
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

    await recordAudit({
      userId: user._id,
      action: "RESET_PASSWORD",
      details: "Password reset",
      req,
      status: "success",
      resourceId: user._id,
      resourceType: "User",
      metadata: { role: user.role },
    });

    return success(res, null, "Password reset successful");
  } catch (err) {
    next(err);
  }
};