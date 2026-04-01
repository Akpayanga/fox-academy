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
