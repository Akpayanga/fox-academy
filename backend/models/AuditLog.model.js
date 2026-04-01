const mongoose = require("mongoose");

const auditLogSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: false },
  action: { type: String, required: true }, // e.g. "PRE_REGISTER", "VERIFY_INVITATION", "LOGIN"
  details: { type: String, default: null }, // optional extra info
  ipAddress: { type: String, default: null },
  userAgent: { type: String, default: null },
}, { timestamps: true });

module.exports = mongoose.model("AuditLog", auditLogSchema);
