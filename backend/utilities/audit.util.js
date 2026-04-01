const AuditLog = require("../models/AuditLog.model");

const recordAudit = async ({ userId, action, details, req }) => {
  try {
    await AuditLog.create({
      userId,
      action,
      details,
      ipAddress: req.ip,
      userAgent: req.headers["user-agent"],
    });
  } catch (err) {
    console.error("Audit log failed:", err.message);
  }
};

module.exports = { recordAudit };
