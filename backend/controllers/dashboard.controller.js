const Enrollment = require("../models/enrollment.model");
const Assignment = require("../models/assignment.model");
const Submission = require("../models/submission.model");
const Course = require("../models/course.model");

/**
 * Aggregates all data required for the student dashboard
 */
exports.getDashboardData = async (req, res) => {
  try {
    const userId = req.user._id;

    // 1. User Info & Enrollment Progress
    // Assuming the user is enrolled in at least one course (the one they selected during onboarding)
    const enrollment = await Enrollment.findOne({ userId }).populate("courseId");
    
    // 2. Pending Assignments (Assignments without a submission or in-progress)
    const allAssignments = await Assignment.find().limit(5).sort({ dueDate: 1 });
    const userSubmissions = await Submission.find({ userId });
    
    const pendingAssignments = allAssignments.filter(a => {
      const submission = userSubmissions.find(s => s.assignmentId.toString() === a._id.toString());
      return !submission || submission.status === "in-progress" || submission.status === "pending";
    });

    // 3. Recent Feedback (Last 2 graded submissions)
    const recentFeedback = await Submission.find({ userId, status: "graded" })
      .sort({ gradedAt: -1 })
      .limit(2)
      .populate("mentorId", "firstName lastName role");

    // 4. Active Courses (Modules for the current phase)
    const activeCourses = await Course.find({ phase: 1 }).limit(3);

    // 5. Mentor Info (Taking Mentor from the first feedback or a default)
    const mentor = recentFeedback.length > 0 ? recentFeedback[0].mentorId : null;

    res.status(200).json({
      success: true,
      data: {
        user: {
          firstName: req.user.firstName,
          overallProgress: enrollment ? enrollment.progressPercentage : 18, // Figma default 18
          phase: 1
        },
        assignments: pendingAssignments.map(a => ({
          _id: a._id,
          title: a.title,
          type: a.type,
          isUrgent: a.isUrgent,
          dueDate: a.dueDate
        })),
        recentFeedback: recentFeedback.map(f => ({
          content: f.feedback,
          mentorName: f.mentorId ? `${f.mentorId.firstName} ${f.mentorId.lastName}` : "Mentor",
          gradedAt: f.gradedAt
        })),
        activeCourses: activeCourses.map(c => ({
          _id: c._id,
          title: c.title,
          category: c.category,
          progress: 10, // Mock progress for now
          week: c.week
        })),
        mentor: mentor ? {
          name: `${mentor.firstName} ${mentor.lastName}`,
          role: mentor.role || "Senior Mentor",
          isAvailable: true
        } : null
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
