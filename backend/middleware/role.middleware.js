const ApiError = require("../utilities/apiError.util");

// to require authentication and specific role(s)
const requireRole = (...roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return next(new ApiError(401, "Unauthorized"));
    }

    if (!roles.includes(req.user.role)) {
      return next(new ApiError(403, "Forbidden: insufficient permissions"));
    }

    next();
  };
};

module.exports = requireRole;
