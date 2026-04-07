const express = require("express");
const router = express.Router();
const userInstructorAuth = require("../controllers/UserInstructor.Auth.contoller");
const validate = require("../middleware/validate.middleware");
const requireRole = require("../middleware/role.middleware");
const {preRegisterSchema,loginSchema,
    forgotPasswordSchema,
    resetPasswordSchema,} = require("../validation/Auth.validation");
const auth = require("../middleware/Auth.middle");
const requireOnboarding = require("../middleware/Require.Onboarding middleware");
const passport = require("passport");

// Invitation flows
router.post("/pre-register", validate(preRegisterSchema), userInstructorAuth.preRegister);
router.post("/verify-invitation", userInstructorAuth.verifyInvitation);
router.post("/complete-registration", userInstructorAuth.completeRegistration);

// Shared auth flows (admins can also use these)
router.post("/login", validate(loginSchema), userInstructorAuth.login);
router.post("/refresh-token", userInstructorAuth.refreshToken);
router.post("/forgot-password", validate(forgotPasswordSchema), userInstructorAuth.forgotPassword);
router.post("/reset-password", validate(resetPasswordSchema), userInstructorAuth.resetPassword);

// Profile & onboarding
router.get("/profile", auth, requireOnboarding, userInstructorAuth.profile);
router.post("/complete-profile", auth, requireRole("student"), userInstructorAuth.completeProfile);

// Logout
router.post("/logout", auth, userInstructorAuth.logout);

// GOOGLE AUTH for students/instructors
router.get("/google", passport.authenticate("google-user-instructor", 
            { scope: ["profile", "email"] }));

router.get("/google/callback", passport.authenticate("google-user-instructor", 
            { session: false }), userInstructorAuth.googleUserInstructorLogin);

module.exports = router;