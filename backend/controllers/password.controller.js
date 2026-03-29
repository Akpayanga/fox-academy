const { success } = require("../utilities/response");

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

    if (!password) {
      return res.status(400).json({ status: "error", message: "Password is required" });
    }

    const { score, suggestions } = getPasswordFeedback(password);

    return success(res, { score, suggestions }, "Password strength checked");
  } catch (err) {
    next(err);
  }
};
