const Course = require("../models/course.model");

/**
 * Get all courses/modules for the current phase
 */
exports.getCourses = async (req, res) => {
  try {
    const { phase } = req.query; // Optional phase filter
    
    const query = phase ? { phase } : { phase: 1 }; // Default to Phase 1 as seen in Figma
    const courses = await Course.find(query).sort({ week: 1, moduleNumber: 1 });

    res.status(200).json({
      success: true,
      data: courses
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

/**
 * Get a single course/module by ID
 */
exports.getCourseById = async (req, res) => {
  try {
    const { id } = req.params;
    const course = await Course.findById(id);
    
    if (!course) {
      return res.status(404).json({ success: false, message: "Course not found" });
    }

    res.status(200).json({
      success: true,
      data: course
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
