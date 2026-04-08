const Enrollment = require("../models/enrollment.model");
const Assignment = require("../models/assignment.model");
const Submission = require("../models/submission.model");
const Course = require("../models/course.model");
const { recordAudit } = require("../utilities/audit.util");
const { success } = require("../utilities/response");
const ApiError = require("../utilities/apiError.util");

/**
 * Aggregates all data required for the student dashboard
 */

exports.getDashboardData = async (req, res, next) => {
  try {
    const userId = req.user._id;

    const enrollment = await Enrollment.findOne({ userId }).populate(
      "courseId",
    );
    if (!enrollment) {
      return next(new ApiError(404, "Enrollment not found for this user"));
    }

    const allAssignments = await Assignment.find()
      .limit(5)
      .sort({ dueDate: 1 });
    const userSubmissions = await Submission.find({ userId });

    const pendingAssignments = allAssignments.filter((a) => {
      const submission = userSubmissions.find(
        (s) => s.assignmentId.toString() === a._id.toString(),
      );
      return (
        !submission ||
        submission.status === "in-progress" ||
        submission.status === "pending"
      );
    });

    const recentFeedback = await Submission.find({ userId, status: "graded" })
      .sort({ gradedAt: -1 })
      .limit(2)
      .populate("mentorId", "firstName lastName role");

    const activeCourses = await Course.find({ phase: 1 }).limit(3);
    if (!activeCourses || activeCourses.length === 0) {
      return next(new ApiError(404, "No active courses found"));
    }

    const mentor =
      recentFeedback.length > 0 ? recentFeedback[0].mentorId : null;

    // Audit log
    await recordAudit({
      userId,
      action: "DASHBOARD_FETCH",
      details: "User fetched dashboard data",
      req,
      status: "success",
      resourceType: "Dashboard",
    });

    return success(
      res,
      {
        user: {
          firstName: req.user.firstName,
          overallProgress: enrollment.progressPercentage,
          phase: 1,
        },
        assignments: pendingAssignments.map((a) => ({
          _id: a._id,
          title: a.title,
          type: a.type,
          isUrgent: a.isUrgent,
          dueDate: a.dueDate,
        })),
        recentFeedback: recentFeedback.map((f) => ({
          content: f.feedback,
          mentorName: f.mentorId
            ? `${f.mentorId.firstName} ${f.mentorId.lastName}`
            : "Mentor",
          gradedAt: f.gradedAt,
        })),
        activeCourses: activeCourses.map((c) => ({
          _id: c._id,
          title: c.title,
          category: c.category,
          progress: 10,
          week: c.week,
        })),
        mentor: mentor
          ? {
              name: `${mentor.firstName} ${mentor.lastName}`,
              role: mentor.role || "Senior Mentor",
              isAvailable: true,
            }
          : null,
      },
      "Dashboard data fetched",
    );
  } catch (err) {
    next(err);
  }
};
