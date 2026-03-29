const { verifyToken } = require("../utilities/jwt");
const ApiError = require("../utilities/apiError.util");

const auth = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return next(new ApiError(401, "Unauthorized"));

  try {
    req.user = verifyToken(token);
    next();
  } catch (err) {
    next(new ApiError(401, "Invalid token"));
  }
};

module.exports = auth;
