const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    mentorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    purpose: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      enum: ["pending", "confirmed", "completed", "cancelled"],
      default: "confirmed",
    },
  },
  { timestamps: true },
);

// Virtual for getting the full date/time representation or easier joins
bookingSchema.virtual("mentor", {
  ref: "User",
  localField: "mentorId",
  foreignField: "_id",
  justOne: true,
});

bookingSchema.virtual("student", {
  ref: "User",
  localField: "studentId",
  foreignField: "_id",
  justOne: true,
});

// Settings for JSON to include virtuals
bookingSchema.set("toJSON", { virtuals: true });
bookingSchema.set("toObject", { virtuals: true });

module.exports = mongoose.model("Booking", bookingSchema);
