const Booking = require("../models/booking.model");
const ApiError = require("../utilities/apiError.util");
const { success } = require("../utilities/response");

exports.createBooking = async (req, res, next) => {
  try {
    const { mentorId, studentId, date, time, purpose } = req.body;

    if (!mentorId || !studentId || !date || !time || !purpose) {
      return next(
        new ApiError(
          400,
          "All fields (mentorId, studentId, date, time, purpose) are required",
        ),
      );
    }

    const booking = await Booking.create({
      mentorId,
      studentId,
      date,
      time,
      purpose,
      status: "confirmed",
    });

    // Populate data for the response
    await booking.populate("mentor", "firstName lastName email role");
    await booking.populate("student", "firstName lastName email role");

    return success(res, booking, "Session Booked!", 201);
  } catch (err) {
    next(err);
  }
};

exports.getMentorBookings = async (req, res, next) => {
  try {
    const { mentorId } = req.params;
    const bookings = await Booking.find({ mentorId })
      .populate("student", "firstName lastName email course")
      .sort({ date: 1, createdAt: -1 });

    return success(res, bookings, "Mentor bookings fetched successfully");
  } catch (err) {
    next(err);
  }
};

exports.getStudentBookings = async (req, res, next) => {
  try {
    const { studentId } = req.params;
    const bookings = await Booking.find({ studentId })
      .populate("mentor", "firstName lastName email")
      .sort({ date: 1, createdAt: -1 });

    return success(res, bookings, "Student bookings fetched successfully");
  } catch (err) {
    next(err);
  }
};
