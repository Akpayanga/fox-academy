const express = require("express");
const router = express.Router();
const passport = require("passport");

const userInstructorAuth = require("../controllers/UserInstructor.Auth.controller");
const authController = require("../controllers/ForgetResetSharedPassword");
const validate = require("../middleware/validate.middleware");
const requireRole = require("../middleware/role.middleware");
const auth = require("../middleware/Auth.middle");
const requireOnboarding = require("../middleware/Require.Onboarding.middleware");

const { preRegisterSchema, loginSchema, forgotPasswordSchema, resetPasswordSchema, completeStudentProfileSchema, completeMentorProfileSchema, updateProfileSchema } = require("../validation/Auth.validation");

// Student invitation flows
router.post("/pre-register", validate(preRegisterSchema), userInstructorAuth.preRegister);
router.post("/verify-invitation", userInstructorAuth.verifyInvitation);
router.post("/complete-registration", userInstructorAuth.StudentcompleteRegistration);
router.post("/login", validate(loginSchema), userInstructorAuth.Studentlogin);
router.post("/refresh-token", userInstructorAuth.StudentrefreshToken);
router.post("/logout", auth, userInstructorAuth.studentLogout);

// Mentor invitation flows
router.post("/mentor/verify-invitation", userInstructorAuth.mentorVerifyInvitation);
router.post("/mentor/complete-registration", userInstructorAuth.completeMentorRegistration);
router.post("/login", validate(loginSchema), userInstructorAuth.instructorLogin);
router.post("/refresh-token", userInstructorAuth.instructorRefreshToken);

//shared flow
router.post("/forgot-password", validate(forgotPasswordSchema), authController.forgotPassword);
router.post("/reset-password", validate(resetPasswordSchema), authController.resetPassword);

// Profile & onboarding
router.get("/profile", auth, requireOnboarding, userInstructorAuth.profile);

// Student profile completion
router.post(
  "/complete-student-profile",
  auth,
  requireRole("student"),
  validate(completeStudentProfileSchema),
  userInstructorAuth.completeStudentProfile,
);

// Mentor profile completion
router.post("/complete-mentor-profile",auth,requireRole("instructor"),validate(completeMentorProfileSchema), userInstructorAuth.completeMentorProfile);
router.post("/logout", auth, userInstructorAuth.instructorLogout);

// Update profile
router.put("/update-profile", auth, validate(updateProfileSchema), userInstructorAuth.updateProfile);

// Delete profile
router.delete("/delete-profile", auth, userInstructorAuth.deleteProfile);


// delete user
router.delete("/delete-user", userInstructorAuth.deleteUser);

// GOOGLE AUTH
router.get(
  "/google",
  passport.authenticate("google-user-instructor", {
    scope: ["profile", "email"],
  }),
);
router.get(
  "/google/callback",
  passport.authenticate("google-user-instructor", { session: false }),
  userInstructorAuth.googleUserInstructorLogin,
);

module.exports = router;
