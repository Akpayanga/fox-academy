const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, trim: true },
    week: { type: Number, required: true },
    moduleNumber: { type: Number, required: true },
    videoUrl: { type: String },
    isLockedByDefault: { type: Boolean, default: true },
    phase: { type: Number, default: 1 },
    category: { 
      type: String, 
      enum: ["USER RESEARCH", "FUNDAMENTALS", "DESIGN THEORY", "CAPSTONE PROJECT", "OTHER"],
      default: "OTHER"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Course", courseSchema);
