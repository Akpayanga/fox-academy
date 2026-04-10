const auth = require("./Auth.middle");
const ApiError = require("../utilities/apiError.util");

// Combined middleware: requires authentication AND specific role(s)
const requireAuthAndRole = (...roles) => {
  return (req, res, next) => {
    // First run authentication
    auth(req, res, (err) => {
      if (err) return next(err);

      // Then check role
      if (!req.user) {
        return next(new ApiError(401, "Unauthorized"));
      }

      if (!roles.includes(req.user.role)) {
        return next(new ApiError(403, "Forbidden: insufficient permissions"));
      }

      next();
    });
  };
};

module.exports = requireAuthAndRole;
