const AuditLog = require("../models/AuditLog.model");
const { success } = require("../utilities/response");

exports.listAuditLogs = async (req, res, next) => {
  try {
    const { userId, action, startDate, endDate } = req.query;

    const filter = {};

    if (userId) filter.userId = userId;
    if (action) filter.action = action;
    if (startDate || endDate) {
      filter.createdAt = {};
      if (startDate) filter.createdAt.$gte = new Date(startDate);
      if (endDate) filter.createdAt.$lte = new Date(endDate);
    }

    const logs = await AuditLog.find(filter).sort({ createdAt: -1 }).limit(200);

    return success(res, logs, "Audit logs fetched");
  } catch (err) {
    next(err);
  }
};
