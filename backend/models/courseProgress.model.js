const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LectureProgressSchema = new Schema({
  lectureId: String,

  viewed: Boolean,

  dateViewed: Date,
  
});

const CourseProgressSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
  },

  completed: Boolean,

  completionDate: Date,

  lecturesProgress: [LectureProgressSchema],

});

module.exports = mongoose.model("Progress", CourseProgressSchema);