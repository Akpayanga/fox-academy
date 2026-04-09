const { error } = require("../utilities/response");
const ApiError = require("../utilities/apiError.util");
const Sentry = require("@sentry/node");

// Global error handler
const errorHandler = (err, req, res, next) => {
  console.error(err); // optional: log locally for debugging

  // Capture error in Sentry with request context
  if (process.env.SENTRY_DSN) {
    Sentry.withScope((scope) => {
      scope.setTag("method", req.method);
      scope.setTag("url", req.originalUrl);
      scope.setTag("ip", req.ip);

      if (req.user && req.user.id) {
        scope.setUser({ id: req.user.id, email: req.user.email });
      }

      scope.setExtra("headers", req.headers);
      scope.setExtra("body", req.body);
      scope.setExtra("query", req.query);

      Sentry.captureException(err);
    });
  }

  // Handle custom ApiError
  if (err instanceof ApiError) {
    return error(res, err.statusCode, err.message);
  }

  // Handle Joi validation errors (from validate.middleware)
  if (err.isJoi) {
    const messages = err.details.map((d) => d.message).join("; ");
    return error(res, 400, messages);
  }

  // Handle unexpected errors
  return error(res, 500, "Internal Server Error");
};

module.exports = errorHandler;
