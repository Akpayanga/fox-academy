const mongoose = require("mongoose");

const attachmentSchema = new mongoose.Schema({
  fileName: { type: String, required: true },
  fileUrl: { type: String, required: true },
  fileType: { type: String }
});

const discussionSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    content: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    channel: { type: String, required: true }, // e.g., 'ux-design-general'
    tags: [{ type: String }],
    attachments: [attachmentSchema],
    views: { type: Number, default: 0 },
    isPinned: { type: Boolean, default: false }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Discussion", discussionSchema);
