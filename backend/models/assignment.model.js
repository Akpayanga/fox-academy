const mongoose = require("mongoose");

const assignmentSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, trim: true },
    type: { 
      type: String, 
      enum: ["Video", "Quiz", "Script", "Document", "Reflection"], 
      required: true 
    },
    phase: { type: Number, default: 1 },
    dueDate: { type: Date },
    isUrgent: { type: Boolean, default: false },
    linkedCourseId: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
    resources: [
      {
        name: { type: String },
        url: { type: String },
        type: { type: String },
        size: { type: String }
      }
    ],
    gradingCriteria: [
      {
        title: { type: String },
        description: { type: String }
      }
    ]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Assignment", assignmentSchema);
