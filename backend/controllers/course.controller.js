const Course = require("../models/course.model");
const { recordAudit } = require("../utilities/audit.util");
const { success } = require("../utilities/response");
const ApiError = require("../utilities/apiError.util");

/**
 * Get all courses/modules for the current phase
 */
exports.getCourses = async (req, res, next) => {
  try {
    const { phase } = req.query;
    const query = phase ? { phase } : { phase: 1 };
    const courses = await Course.find(query).sort({ week: 1, moduleNumber: 1 });

    if (!courses || courses.length === 0) {
      return next(new ApiError(404, "No courses found for this phase"));
    }

    // Audit log
    await recordAudit({
      userId: req.user?._id || null,
      action: "COURSES_FETCH",
      details: `Fetched courses for phase ${phase || 1}`,
      req,
      status: "success",
      resourceType: "Course",
    });

    return success(res, courses, "Courses fetched");
  } catch (err) {
    next(err);
  }
};

/**
 * Get a single course/module by ID
 */
exports.getCourseById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const course = await Course.findById(id);

    if (!course) {
      return next(new ApiError(404, "Course not found"));
    }

    // Audit log
    await recordAudit({
      userId: req.user?._id || null,
      action: "COURSE_VIEW",
      details: `Viewed course ${id}`,
      req,
      status: "success",
      resourceId: id,
      resourceType: "Course",
    });

    return success(res, course, "Course retrieved");
  } catch (err) {
    next(err);
  }
};
