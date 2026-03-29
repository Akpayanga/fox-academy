const express = require("express");
const router = express.Router();
const authController = require("../controllers/Auth.contoller");
const passport = require("../config/passport.config");
const validate = require("../middleware/validate.middleware");
const { registerSchema, loginSchema, forgotPasswordSchema, resetPasswordSchema } = require("../validation/Auth.validation");
const auth = require("../middleware/Auth.middle");
const requireOnboarding = require("../middleware/Require.Onboarding middleware");

router.post("/register", validate(registerSchema), authController.register);
router.post("/login", validate(loginSchema), authController.login);
router.post("/refresh-token", authController.refreshToken);
router.post("/forgot-password", validate(forgotPasswordSchema), authController.forgotPassword);
router.post("/reset-password", validate(resetPasswordSchema), authController.resetPassword);
router.post("/complete-profile", auth, authController.completeProfile);
router.post("/logout", authController.logout);
router.get("/verify", authController.verifyEmail);
router.get("/profile", auth, requireOnboarding, authController.profile);


// GOOGLE AUTH
router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));
router.get("/google/callback", passport.authenticate("google", { session: false }), authController.googleLogin);


module.exports = router;
