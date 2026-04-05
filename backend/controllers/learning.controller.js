const Course = require("../models/course.model");
const Enrollment = require("../models/enrollment.model");
const { error, success } = require("../utilities/response");

exports.getAllCourses = async (req, res) => {
  const userId = req.user._id;
  if (!userId) error(res, 401, "Unauthorized!");

  try {
    const phase = { phase: 1 };
    const userEnrolled = await Enrollment.findOne(userId);
    if (!userEnrolled) error(res, 403, "Forbidden, not enrolled!");

    const courses = await Course.find({ phase });
    const data = {
      phase,
      progress: userEnrolled.progressPercentage,
      courses: courses
        ? courses.map((course) => ({
          module: course.moduleNumber,
          progress: 10, //manual input for now
          title: course.title,
        }))
        : "Your courses will be displayed here!",
    };

    success(res, data, "");
  } catch (error) {
    console.error(error);
    error(res, 500, "Server Error!");
  }
};

exports.getCourse = async (req, res) => {
  const userId = req.user._id;
  if (!userId) error(res, 401, "Unauthorized!");

  try {
    const { courseId } = req.params;
    const course = await Course.findById(courseId);
    if (!course) error(res, 404, "Course not found!");

    const data = {
      course: {
        category: course.category,
        title: course.title,
        module: course.moduleNumber,
        content: course.videoUrl,
        desc: course.description,
      },
    };
    success(res, data, "");
  } catch (error) {
    console.error(error);
    error(res, 500, "Server Error!");
  }
};
