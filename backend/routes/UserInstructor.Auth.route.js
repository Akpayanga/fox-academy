const express = require("express");
const router = express.Router();
const passport = require("passport");

const userInstructorAuth = require("../controllers/UserInstructor.Auth.controller");
const authController = require("../controllers/ForgetResetSharedPassword");
const validate = require("../middleware/validate.middleware");
const requireRole = require("../middleware/role.middleware");
const auth = require("../middleware/Auth.middle"); 
const requireOnboarding = require("../middleware/Require.Onboarding.middleware");

const {preRegisterSchema,loginSchema,forgotPasswordSchema,resetPasswordSchema,completeStudentProfileSchema,completeMentorProfileSchema} = require("../validation/Auth.validation");

// Invitation flows
router.post("/pre-register", validate(preRegisterSchema), userInstructorAuth.preRegister);
router.post("/verify-invitation", userInstructorAuth.verifyInvitation);
router.post("/complete-registration", userInstructorAuth.completeRegistration);

// Shared auth flows
router.post("/login", validate(loginSchema), userInstructorAuth.login);
router.post("/refresh-token", userInstructorAuth.refreshToken);
router.post("/forgot-password", validate(forgotPasswordSchema), authController.forgotPassword);
router.post("/reset-password", validate(resetPasswordSchema), authController.resetPassword);

// Profile & onboarding
router.get("/profile", auth, requireOnboarding, userInstructorAuth.profile);

// Student profile completion
router.post("/complete-student-profile",auth,requireRole("student"), validate(completeStudentProfileSchema), userInstructorAuth.completeStudentProfile);

// Mentor profile completion
router.post("/complete-mentor-profile",auth,requireRole("instructor"),validate(completeMentorProfileSchema), userInstructorAuth.completeMentorProfile);

// Logout
router.post("/logout", auth, userInstructorAuth.logout);

// delete user
router.delete("/delete-user",userInstructorAuth.deleteUser);

// GOOGLE AUTH
router.get("/google", passport.authenticate("google-user-instructor", { scope: ["profile", "email"] }));
router.get("/google/callback", passport.authenticate("google-user-instructor", { session: false }), userInstructorAuth.googleUserInstructorLogin);

module.exports = router;