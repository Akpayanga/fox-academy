const success = (res, data = null, message = "Success") => {
  return res.status(200).json({
    status: "success",
    message,
    data,
  });
};

const error = (res, statusCode, message, data = null) => {
  return res.status(statusCode).json({
    status: "error",
    message,
    data,
  });
};

module.exports = { success, error };