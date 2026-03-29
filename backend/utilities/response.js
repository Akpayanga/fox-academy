const success = (res, data, message = "Success") => {
  return res.status(200).json({ status: "success", message, data });
};

const error = (res, statusCode, message) => {
  return res.status(statusCode).json({ status: "error", message });
};

module.exports = { success, error };
