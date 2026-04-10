const express = require("express");
const auth = require("../middleware/Auth.middle");
const { getAllCourses, getCourse } = require("../controllers/learning.controller");
const router = express.Router();

router.get("/", auth, getAllCourses);
router.get("/:courseId", auth, getCourse)

module.exports = router;
