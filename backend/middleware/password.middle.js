const ApiError = require("../utilities/apiError.util");

// Utility to check password strength
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

// Middleware to validate password and provide feedback
const validatePassword = (req, res, next) => {
  const { password } = req.body;

  if (!password) {
    return next(new ApiError(400, "Password is required"));
  }

  const { score, suggestions } = getPasswordFeedback(password);

  if (score < 5) {
    return next(
      new ApiError(
        400,
        `Weak password. Suggestions: ${suggestions.join(", ")}`
      )
    );
  }

  next();
};

module.exports = validatePassword;
