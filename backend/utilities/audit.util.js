const AuditLog = require("../models/AuditLog.model");

/**
 * Record an audit log entry
 * @param {Object} params
 * @param {String} params.userId - User performing the action
 * @param {String} params.action - Action keyword (e.g. LOGIN, COURSE_VIEW)
 * @param {String} params.details - Human-readable description
 * @param {Object} params.req - Express request object
 * @param {String} [params.status="success"] - success or error
 * @param {String} [params.resourceId=null] - Related resource ID
 * @param {String} [params.resourceType=null] - Resource type (Course, Assignment, Discussion, etc.)
 * @param {Object} [params.metadata={}] - Extra context
 */
const recordAudit = async ({
  userId,
  action,
  details,
  req,
  status = "success",
  resourceId = null,
  resourceType = null,
  metadata = {}
}) => {
  try {
    await AuditLog.create({
      userId,
      action,
      details,
      ipAddress: req.ip,
      userAgent: req.headers["user-agent"],
      status,
      resourceId,
      resourceType,
      metadata
    });
  } catch (err) {
    console.error("Audit log failed:", err.message);
  }
};

module.exports = { recordAudit };
