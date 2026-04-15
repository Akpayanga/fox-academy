const express = require("express");
const router = express.Router();
const passport = require("passport");

const adminAuthController = require("../controllers/Admin.Auth.controller");
const authController = require("../controllers/ForgetResetSharedPassword");
const requireAuthAndRole = require("../middleware/AuthRole.middleware")
const validate = require("../middleware/validate.middleware");
const { adminRegisterSchema, adminLoginSchema, forgotPasswordSchema, resetPasswordSchema, adminRefreshTokenSchema } = require("../validation/Auth.validation");

// Admin flows
router.post("/register", requireAuthAndRole("admin"),
            validate(adminRegisterSchema), adminAuthController.adminRegister);

router.get("/verify", adminAuthController.adminVerifyEmail);

// Local login / refresh / logout
router.post("/login", validate(adminLoginSchema), adminAuthController.adminLogin);
router.post("/refresh-token", validate(adminRefreshTokenSchema), adminAuthController.adminRefreshToken);
router.post("/logout", adminAuthController.adminLogout);
router.post("/forgot-password", validate(forgotPasswordSchema), authController.forgotPassword);
router.post("/reset-password", validate(resetPasswordSchema), authController.resetPassword);

router.get("/google", passport.authenticate("google-admin", 
    { scope: ["profile", "email"] }));

router.get("/google/callback", passport.authenticate("google-admin",
     { session: false }), adminAuthController.googleAdminLogin);

module.exports = router;

