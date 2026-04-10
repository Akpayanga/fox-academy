const mongoose = require("mongoose");

const enrollmentSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    courseId: { type: mongoose.Schema.Types.ObjectId, ref: "Course", required: true },
    status: { 
      type: String, 
      enum: ["locked", "not-started", "in-progress", "completed"], 
      default: "locked" 
    },
    progressPercentage: { type: Number, default: 0, min: 0, max: 100 },
    lastAccessed: { type: Date, default: Date.now }
  },
  { timestamps: true }
);

// Ensure a user can only have one enrollment per course
enrollmentSchema.index({ userId: 1, courseId: 1 }, { unique: true });

module.exports = mongoose.model("Enrollment", enrollmentSchema);
