const Joi = require("joi");

// Pre-register schema (students/instructors)
exports.preRegisterSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  role: Joi.string().valid("student", "instructor").required(),
});

// Admin register schema (normal flow)
exports.adminRegisterSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
});

// Login schema (local or Google)
exports.loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8),
  provider: Joi.string().valid("local", "google").default("local"),
});

// Forgot password schema
exports.forgotPasswordSchema = Joi.object({
  email: Joi.string().email().required(),
});

// Reset password schema
exports.resetPasswordSchema = Joi.object({
  token: Joi.string().required(),
  newPassword: Joi.string().min(8).required(),
});

// Student profile completion
exports.completeStudentProfileSchema = Joi.object({
  course: Joi.string()
    .valid("backend", "cybersecurity", "frontend", "product design")
    .required()
});

// Mentor profile completion
exports.completeMentorProfileSchema = Joi.object({
  bio: Joi.string().min(10).required(),
  roleTitle: Joi.string().required(),
  linkedIn: Joi.string().uri().optional(),
  phoneNumber: Joi.string().optional()
});