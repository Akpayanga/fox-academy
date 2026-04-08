const Assignment = require("../models/assignment.model");
const Submission = require("../models/submission.model");
const { recordAudit } = require("../utilities/audit.util");
const { success } = require("../utilities/response");
const ApiError = require("../utilities/apiError.util");

/**
 * Get all assignments for the logged-in user, grouped by status
 */

exports.getAssignments = async (req, res, next) => {
  try {
    const userId = req.user._id;

    // Get all assignments
    const assignments = await Assignment.find().populate("linkedCourseId");

    // Get all submissions for this user to determine status
    const submissions = await Submission.find({ userId });

    // Combine assignment data with submission status
    const result = assignments.map((assignment) => {
      const submission = submissions.find(
        (s) => s.assignmentId.toString() === assignment._id.toString(),
      );
      return {
        ...assignment.toObject(),
        status: submission ? submission.status : "pending",
        userSubmission: submission || null,
      };
    });

    // Grouping
    const pending = result.filter(
      (a) => a.status === "pending" || a.status === "in-progress",
    );
    const submitted = result.filter((a) => a.status === "submitted");
    const graded = result.filter((a) => a.status === "graded");

    // Audit log
    await recordAudit({
      userId,
      action: "ASSIGNMENTS_FETCH",
      details: "User fetched assignments list",
      req,
      status: "success",
      resourceType: "Assignment",
    });

    return success(
      res,
      { all: result, pending, submitted, graded },
      "Assignments fetched",
    );
  } catch (err) {
    next(err);
  }
};

/**
 * Get a single assignment by ID with submission details
 */

exports.getAssignmentById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userId = req.user._id;

    const assignment = await Assignment.findById(id).populate("linkedCourseId");
    if (!assignment) {
      return next(new ApiError(404, "Assignment not found"));
    }

    const submission = await Submission.findOne({ userId, assignmentId: id });

    // Audit log
    await recordAudit({
      userId,
      action: "ASSIGNMENT_VIEW",
      details: `Viewed assignment ${id}`,
      req,
      status: "success",
      resourceId: id,
      resourceType: "Assignment",
    });

    return success(
      res,
      { ...assignment.toObject(), userSubmission: submission || null },
      "Assignment retrieved",
    );
  } catch (err) {
    next(err);
  }
};

/**
 * Submit an assignment
 */

exports.submitAssignment = async (req, res, next) => {
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

    // Audit log
    await recordAudit({
      userId,
      action: "ASSIGNMENT_SUBMIT",
      details: `Submitted assignment ${id}`,
      req,
      status: "success",
      resourceId: id,
      resourceType: "Assignment",
    });

    return success(res, submission, "Assignment submitted successfully");
  } catch (err) {
    next(err);
  }
};
