const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    assignmentId: { type: mongoose.Schema.Types.ObjectId, ref: "Assignment", required: true },
    fileUrl: { type: String }, // For file uploads
    linkUrl: { type: String }, // For external links (e.g. Figma, Drive)
    mentorNote: { type: String, trim: true }, // Student's note to mentor
    status: { 
      type: String, 
      enum: ["pending", "submitted", "in-progress", "graded"], 
      default: "in-progress" 
    },
    grade: { type: Number, min: 0, max: 100 },
    feedback: { type: String, trim: true }, // Mentor's feedback
    mentorId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Instructor who graded
    submittedAt: { type: Date },
    gradedAt: { type: Date }
  },
  { timestamps: true }
);

// Ensure a user can only have one submission per assignment
submissionSchema.index({ userId: 1, assignmentId: 1 }, { unique: true });

module.exports = mongoose.model("Submission", submissionSchema);
