const CourseProgress = require("../models/courseProgress.model");
const Course = require("../models/course.model");
const { success } = require("../utilities/response");
const ApiError = require("../utilities/apiError.util");
const { recordAudit } = require("../utilities/audit.util");

// Get current course progress
const getCurrentCourseProgress = async (req, res, next) => {
  try {
    const { userId, courseId } = req.params;

    // const studentPurchasedCourses = await StudentCourses.findOne({ userId });

    // const isCurrentCoursePurchasedByCurrentUserOrNot =
    //   studentPurchasedCourses?.courses?.findIndex(
    //     (item) => item.courseId === courseId
    //   ) > -1;

    // if (!isCurrentCoursePurchasedByCurrentUserOrNot) {
    //   return res.status(200).json({
    //     success: true,
    //     data: {
    //       isPurchased: false,
    //     },
    //     message: "You need to purchase this course to access it.",
    //   });
    // }
    const currentUserCourseProgress = await CourseProgress.findOne({
      userId,
      courseId,
    });

    if (
      !currentUserCourseProgress ||
      currentUserCourseProgress?.lecturesProgress?.length === 0
    ) {
      const course = await Course.findById(courseId);
      if (!course) throw new ApiError(404, "Course not found");

      return success(
        res,
        {
          courseDetails: course,
          progress: [],
          isPurchased: true,
        },
        "No progress found, you can start watching the course",
      );
    }

    const courseDetails = await Course.findById(courseId);
    //audit log
    await recordAudit({
      userId,
      action: "COURSE_PROGRESS_FETCH",
      details: `Fetched progress for course ${courseId}`,
      req,
      status: "success",
      resourceId: courseId,
      resourceType: "CourseProgress",
    });
    return success(
      res,
      {
        courseDetails,
        progress: currentUserCourseProgress.lecturesProgress,
        completed: currentUserCourseProgress.completed,
        completionDate: currentUserCourseProgress.completionDate,
      },
      "Course progress fetched",
    );
  } catch (err) {
    next(err);
  }
};

// Reset course progress
const resetCurrentCourseProgress = async (req, res, next) => {
  try {
    const { userId, courseId } = req.body;

    const progress = await CourseProgress.findOne({
      userId,
      courseId,
    }).populate("courseId", "title");

    if (!progress) throw new ApiError(404, "Progress not found!");

    progress.lecturesProgress = [];
    progress.completed = false;
    progress.completionDate = null;

    await progress.save();
    //audit log

    await recordAudit({
      userId,
      action: "COURSE_PROGRESS_RESET",
      details: `Progress reset for course ${courseId}`,
      req,
      status: "success",
      resourceId: courseId,
      resourceType: "CourseProgress",
    });

    return success(res, progress, "Course progress has been reset");
  } catch (err) {
    next(err);
  }
};

// Mark current lecture as viewed
const markCurrentLectureAsViewed = async (req, res, next) => {
  try {
    const { userId, courseId, lectureId } = req.body;

    let progress = await CourseProgress.findOne({ userId, courseId });
    if (!progress) {
      //if progress not found then create new progress document for current user and course
      // and mark the current lecture as viewed
      progress = new CourseProgress({
        userId,
        courseId,
        lecturesProgress: [{ lectureId, viewed: true, dateViewed: new Date() }],
      });
      await progress.save();
    } else {
      const lectureProgress = progress.lecturesProgress.find(
        (item) => item.lectureId === lectureId,
      );
      if (lectureProgress) {
        lectureProgress.viewed = true;
        lectureProgress.dateViewed = new Date();
      } else {
        progress.lecturesProgress.push({
          lectureId,
          viewed: true,
          dateViewed: new Date(),
        });
      }
      await progress.save();
    }

    const course = await Course.findById(courseId);
    if (!course) throw new ApiError(404, "Course not found");

    //check all the lectures are viewed or not
    const allLecturesViewed =
      progress.lecturesProgress.length === course.curriculum.length &&
      progress.lecturesProgress.every((item) => item.viewed);

    if (allLecturesViewed) {
      progress.completed = true;
      progress.completionDate = new Date();
      await progress.save();
    }
    //audit log
    await recordAudit({
      userId,
      action: "LECTURE_VIEWED",
      details: `Lecture ${lectureId} marked as viewed`,
      req,
      status: "success",
      resourceId: lectureId,
      resourceType: "Lecture",
      metadata: { courseId },
    });

    return success(res, progress, "Lecture marked as viewed");
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getCurrentCourseProgress,
  resetCurrentCourseProgress,
  markCurrentLectureAsViewed,
};
