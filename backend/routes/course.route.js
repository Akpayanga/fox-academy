const express = require("express");
const router = express.Router();
const courseController = require("../controllers/course.controller");
const auth = require("../middleware/Auth.middle");

router.get("/", auth, courseController.getCourses);
router.get("/:id", auth, courseController.getCourseById);

module.exports = router;
