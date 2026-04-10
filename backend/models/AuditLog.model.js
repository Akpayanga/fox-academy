const mongoose = require("mongoose");

const auditLogSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: false },
  action: { type: String, required: true }, // e.g. "LOGIN", "COURSE_VIEW"
  details: { type: String, default: null }, // optional extra info
  ipAddress: { type: String, default: null },
  userAgent: { type: String, default: null },
  status: { type: String, enum: ["success", "error"], default: "success" },
  resourceId: { type: mongoose.Schema.Types.ObjectId, default: null }, // e.g. courseId, discussionId
  resourceType: { type: String, default: null }, // e.g. "Course", "Discussion"
  metadata: { type: Object, default: {} }, // flexible JSON for extra context
}, { timestamps: true });

module.exports = mongoose.model("AuditLog", auditLogSchema);
