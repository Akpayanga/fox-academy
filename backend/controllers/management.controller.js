const User = require("../models/user.model");
const Enrollment = require("../models/enrollment.model");
const Submission = require("../models/submission.model");
const { success } = require("../utilities/response");
const ApiError = require("../utilities/apiError.util");

/**
 * Lists all mentors (instructors) with performance metrics for Admin
 */
exports.listMentors = async (req, res, next) => {
  try {
    const mentors = await User.find({ role: "instructor", deletedAt: null });
    
    const mentorsWithStats = await Promise.all(mentors.map(async (m) => {
      // Find assigned interns via submissions
      const submissions = await Submission.find({ mentorId: m._id }).select("userId");
      const uniqueStudentIds = [...new Set(submissions.map(s => s.userId.toString()))];
      
      // Calculate avg progress of assigned interns
      const enrollments = await Enrollment.find({ userId: { $in: uniqueStudentIds } });
      const avgProgress = enrollments.length > 0
        ? Math.round(enrollments.reduce((acc, curr) => acc + curr.progressPercentage, 0) / enrollments.length)
        : 0;

      return {
        _id: m._id,
        name: `${m.firstName} ${m.lastName}`,
        discipline: m.course || "General",
        title: m.role === "instructor" ? "Mentor" : m.role,
        assignedInterns: uniqueStudentIds.length,
        avgProgress: `${avgProgress}%`,
        lastActive: "Just now", // Placeholder
        status: m.isActive ? "ACTIVE" : "INACTIVE",
        avatar: "" // Placeholder
      };
    }));

    return success(res, mentorsWithStats, "Mentors list fetched successfully");
  } catch (err) {
    next(err);
  }
};

/**
 * Lists all interns (students) with progress and status for Admin/Mentor
 */
exports.listInterns = async (req, res, next) => {
  try {
    const { mentorId, discipline, status } = req.query;
    
    let query = { role: "student", deletedAt: null };
    if (discipline) query.course = discipline.toLowerCase();

    // If filtered by mentor, first find students assigned to that mentor
    if (mentorId) {
      const submissions = await Submission.find({ mentorId }).select("userId");
      const assignedIds = [...new Set(submissions.map(s => s.userId.toString()))];
      query._id = { $in: assignedIds };
    }

    const students = await User.find(query);
    
    const internsWithStats = await Promise.all(students.map(async (s) => {
      const enrollment = await Enrollment.findOne({ userId: s._id });
      
      // Determine status label based on progress and activity
      let statusLabel = "ON TRACK";
      if (enrollment) {
        const daysSinceLastAccess = (Date.now() - new Date(enrollment.lastAccessed)) / (1000 * 60 * 60 * 24);
        if (enrollment.progressPercentage < 45) statusLabel = "AT RISK";
        if (daysSinceLastAccess > 7) statusLabel = "WARNING";
      }

      return {
        _id: s._id,
        name: `${s.firstName} ${s.lastName}`,
        studentId: s.studentId || "N/A",
        discipline: s.course || "General",
        mentor: "Assigned Mentor", // Placeholder
        progress: enrollment ? enrollment.progressPercentage : 0,
        lastActive: enrollment ? "Recent" : "Never",
        status: statusLabel,
        avatar: ""
      };
    }));

    return success(res, internsWithStats, "Interns list fetched successfully");
  } catch (err) {
    next(err);
  }
};
