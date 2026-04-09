const User = require("../models/user.model");
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

/**
 * Aggregates platform-wide data for the Admin Dashboard
 */
exports.getAdminDashboardStats = async (req, res, next) => {
  try {
    const totalInterns = await User.countDocuments({ role: "student", deletedAt: null });
    const totalMentors = await User.countDocuments({ role: "instructor", deletedAt: null });
    
    // Progress Snapshot logic
    const enrollments = await Enrollment.find().select("progressPercentage lastAccessed");
    
    let onTrack = 0;
    let atRisk = 0;
    let inactive = 0;
    
    enrollments.forEach(e => {
      const daysSinceLastAccess = (Date.now() - new Date(e.lastAccessed)) / (1000 * 60 * 60 * 24);
      if (e.progressPercentage > 65 && daysSinceLastAccess < 3) {
        onTrack++;
      } else if (e.progressPercentage < 30 || daysSinceLastAccess > 7) {
        atRisk++;
      } else if (daysSinceLastAccess > 14) {
        inactive++;
      }
    });

    // Avg completion rate
    const avgCompletion = enrollments.length > 0 
      ? Math.round(enrollments.reduce((acc, curr) => acc + curr.progressPercentage, 0) / enrollments.length)
      : 0;

    // Mentor overview (top 4)
    const mentors = await User.find({ role: "instructor" }).limit(4).select("firstName lastName course isActive");
    // For now, mock assigned count and last active since link is missing
    const mentorOverview = mentors.map(m => ({
      name: `${m.firstName} ${m.lastName}`,
      discipline: m.course || "General",
      assignedInterns: Math.floor(Math.random() * 100), // Placeholder logic as per Figma
      lastActive: "2h ago",
      status: m.isActive ? "ACTIVE" : "INACTIVE"
    }));

    // Activity feed (last 4 audit logs)
    const activityFeed = await AuditLog.find()
      .sort({ createdAt: -1 })
      .limit(4)
      .populate("userId", "firstName lastName");

    const formattedFeed = activityFeed.map(log => ({
      text: log.details || `${log.userId?.firstName} performed ${log.action}`,
      time: log.createdAt
    }));

    return success(res, {
      stats: {
        totalInterns,
        totalMentors,
        cohortStatus: "Cohort 3", // Mocked
        completionRate: avgCompletion
      },
      snapshot: { onTrack, atRisk, inactive },
      mentorOverview,
      activityFeed: formattedFeed
    }, "Admin dashboard stats fetched");
  } catch (err) {
    next(err);
  }
};

/**
 * Aggregates data for the specific Mentor Dashboard
 */
exports.getMentorDashboardStats = async (req, res, next) => {
  try {
    const mentorId = req.user._id;

    // Find students assigned via submissions
    const submissions = await Submission.find({ mentorId }).select("userId");
    const uniqueStudentIds = [...new Set(submissions.map(s => s.userId.toString()))];
    
    const assignedInternCount = uniqueStudentIds.length;
    
    // Average progress of these students
    const enrollments = await Enrollment.find({ userId: { $in: uniqueStudentIds } });
    const avgProgress = enrollments.length > 0
      ? Math.round(enrollments.reduce((acc, curr) => acc + curr.progressPercentage, 0) / enrollments.length)
      : 0;

    return success(res, {
      stats: {
        assignedInterns: assignedInternCount,
        avgProgress,
        totalCapacity: 60, // Mocked
        mentorshipSummary: {
          design: 14,
          engineering: 22,
          dataAnalysis: 8
        }
      }
    }, "Mentor dashboard stats fetched");
  } catch (err) {
    next(err);
  }
};
