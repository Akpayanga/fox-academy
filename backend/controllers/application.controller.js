const Application = require("../models/application.model");

/**
 * Submit a new internship application
 */
exports.submitApplication = async (req, res) => {
  try {
    const { 
      fullName, 
      email, 
      phoneNumber, 
      primaryDiscipline, 
      expertiseLevel, 
      personalStatement, 
      portfolioUrl, 
      githubLinkedin 
    } = req.body;

    // Check if application already exists for this email
    const existing = await Application.findOne({ email });
    if (existing) {
      return res.status(400).json({ 
        success: false, 
        message: "An application with this email has already been submitted." 
      });
    }

    const application = await Application.create({
      fullName,
      email,
      phoneNumber,
      primaryDiscipline,
      expertiseLevel,
      personalStatement,
      portfolioUrl,
      githubLinkedin
    });

    res.status(201).json({ 
      success: true, 
      message: "Application submitted successfully!",
      data: application 
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

/**
 * Get application status by email
 */
exports.getApplicationStatus = async (req, res) => {
  try {
    const { email } = req.params;
    const application = await Application.findOne({ email });

    if (!application) {
      return res.status(404).json({ success: false, message: "Application not found." });
    }

    res.status(200).json({ success: true, data: { status: application.status } });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
