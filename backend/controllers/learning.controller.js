const Course = require("../models/course.model");
const Enrollment = require("../models/enrollment.model");
const { success } = require("../utilities/response");
const ApiError = require("../utilities/apiError.util");
const { recordAudit } = require("../utilities/audit.util");

// Get all courses for the current phase
exports.getAllCourses = async (req, res, next) => {
  try {
    const userId = req.user._id;
    if (!userId) throw new ApiError(401, "Unauthorized!");

    const phase = 1; // default phase
    const userEnrolled = await Enrollment.findOne({ userId });
    if (!userEnrolled) throw new ApiError(403, "Forbidden, not enrolled!");

    const courses = await Course.find({ phase });
    if (!courses || courses.length === 0) {
      throw new ApiError(404, "No courses found for this phase");
    }

    const data = {
      phase,
      progress: userEnrolled.progressPercentage,
      courses: courses.map((course) => ({
        module: course.moduleNumber,
        progress: 10, // placeholder until actual progress tracking
        title: course.title,
      })),
    };
    //audit log
    await recordAudit({
      userId,
      action: "LEARNING_COURSES_FETCH",
      details: "Fetched courses for phase 1",
      req,
      status: "success",
      resourceType: "Course",
    });

    return success(res, data, "Courses fetched successfully");
  } catch (err) {
    next(err);
  }
};

// Get a single course by ID
exports.getCourse = async (req, res, next) => {
  try {
    const userId = req.user._id;
    if (!userId) throw new ApiError(401, "Unauthorized!");

    const { courseId } = req.params;
    const course = await Course.findById(courseId);
    if (!course) throw new ApiError(404, "Course not found!");

    const data = {
      course: {
        category: course.category,
        title: course.title,
        module: course.moduleNumber,
        content: course.videoUrl,
        desc: course.description,
      },
    };
    //audit log
    await recordAudit({
      userId,
      action: "LEARNING_COURSE_VIEW",
      details: `Viewed course ${courseId}`,
      req,
      status: "success",
      resourceId: courseId,
      resourceType: "Course",
    });

    return success(res, data, "Course retrieved successfully");
  } catch (err) {
    next(err);
  }
};
