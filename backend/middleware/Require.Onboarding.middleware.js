const ApiError = require("../utilities/apiError.util");

const requireOnboarding = (req, res, next) => {
  if (!req.user) {
    return next(new ApiError(401, "Unauthorized. Please log in."));
  }

  if (!req.user.isVerified) {
    return next(new ApiError(403, "Email not verified. Please check your inbox."));
  }

  if (!req.user.course) {
    return next(new ApiError(403, "Onboarding incomplete. Please select your course."));
  }

  next();
};

module.exports = requireOnboarding;
