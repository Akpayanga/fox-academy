const { error } = require("../utilities/response");
const ApiError = require("../utilities/apiError.util");

// Global error handler
const errorHandler = (err, req, res, next) => {
  console.error(err); // optional: log for debugging

  if (err instanceof ApiError) {
    return error(res, err.statusCode, err.message);
  }

  // Handle unexpected errors
  return error(res, 500, "Internal Server Error");
};

module.exports = errorHandler;
