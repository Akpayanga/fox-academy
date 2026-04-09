const ApiError = require("../utilities/apiError.util");

module.exports = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body, { abortEarly: false });

    if (error) {
      // Collect all error messages
      const messages = error.details.map((detail) => detail.message);

      // Join them into a single friendly string
      const formattedMessage = messages.join("; ");

      return next(new ApiError(400, formattedMessage));
    }

    next();
  };
};
