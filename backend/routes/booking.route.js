const express = require("express");
const router = express.Router();
const bookingController = require("../controllers/booking.controller");

router.post("/", bookingController.createBooking);

router.get("/mentor/:mentorId", bookingController.getMentorBookings);

router.get("/student/:studentId", bookingController.getStudentBookings);

module.exports = router;
