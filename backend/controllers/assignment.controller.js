const Assignment = require("../models/assignment.model");
const Submission = require("../models/submission.model");

/**
 * Get all assignments for the logged-in user, grouped by status
 */
exports.getAssignments = async (req, res) => {
  try {
    const userId = req.user._id;

    // Get all assignments
    const assignments = await Assignment.find().populate("linkedCourseId");

    // Get all submissions for this user to determine status
    const submissions = await Submission.find({ userId });

    // Combine assignment data with submission status
    const result = assignments.map((assignment) => {
      const submission = submissions.find(
        (s) => s.assignmentId.toString() === assignment._id.toString()
      );

      return {
        ...assignment.toObject(),
        status: submission ? submission.status : "pending",
        userSubmission: submission || null,
      };
    });

    // Grouping
    const pending = result.filter((a) => a.status === "pending" || a.status === "in-progress");
    const submitted = result.filter((a) => a.status === "submitted");
    const graded = result.filter((a) => a.status === "graded");

    res.status(200).json({
      success: true,
      data: {
        all: result,
        pending,
        submitted,
        graded,
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

/**
 * Get a single assignment by ID with submission details
 */
exports.getAssignmentById = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user._id;

    const assignment = await Assignment.findById(id).populate("linkedCourseId");
    if (!assignment) {
      return res.status(404).json({ success: false, message: "Assignment not found" });
    }

    const submission = await Submission.findOne({ userId, assignmentId: id });

    res.status(200).json({
      success: true,
      data: {
        ...assignment.toObject(),
        userSubmission: submission || null,
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

/**
 * Submit an assignment
 */
exports.submitAssignment = async (req, res) => {
  try {
    const { id } = req.params;
    const { fileUrl, linkUrl, mentorNote } = req.body;
    const userId = req.user._id;

    let submission = await Submission.findOne({ userId, assignmentId: id });

    if (submission) {
      // Update existing draft/submission
      submission.fileUrl = fileUrl || submission.fileUrl;
      submission.linkUrl = linkUrl || submission.linkUrl;
      submission.mentorNote = mentorNote || submission.mentorNote;
      submission.status = "submitted";
      submission.submittedAt = Date.now();
      await submission.save();
    } else {
      // Create new submission
      submission = await Submission.create({
        userId,
        assignmentId: id,
        fileUrl,
        linkUrl,
        mentorNote,
        status: "submitted",
        submittedAt: Date.now(),
      });
    }

    res.status(200).json({ success: true, data: submission });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
