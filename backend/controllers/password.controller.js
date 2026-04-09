const { success } = require("../utilities/response");
const ApiError = require("../utilities/apiError.util");
const { recordAudit } = require("../utilities/audit.util");

// Utility: password strength feedback
const getPasswordFeedback = (password) => {
  const suggestions = [];
  let score = 0;

  if (password.length >= 8) score++;
  else suggestions.push("Use at least 8 characters");

  if (/[A-Z]/.test(password)) score++;
  else suggestions.push("Add an uppercase letter");

  if (/[a-z]/.test(password)) score++;
  else suggestions.push("Add a lowercase letter");

  if (/\d/.test(password)) score++;
  else suggestions.push("Include a number");

  if (/[@$!%*?&#]/.test(password)) score++;
  else suggestions.push("Include a special character (@$!%*?&#)");

  return { score, suggestions };
};

// Endpoint: check password strength
exports.checkStrength = async (req, res, next) => {
  try {
    const { password } = req.body;
    if (!password) throw new ApiError(400, "Password is required");

    const { score, suggestions } = getPasswordFeedback(password);

    //audit log
    await recordAudit({
      userId: req.user?._id || null,
      action: "PASSWORD_STRENGTH_CHECK",
      details: "Password strength checked",
      req,
      status: "success",
      resourceType: "Password",
    });

    return success(res, { score, suggestions }, "Password strength checked");
  } catch (err) {
    next(err);
  }
};
