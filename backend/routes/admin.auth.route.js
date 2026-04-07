const express = require("express");
const router = express.Router();
const adminAuthController = require("../controllers/Admin.Auth.controller");

const requireAuthAndRole = require("../middleware/AuthRole.middleware");
const { adminRegisterSchema, loginSchema, 
    forgotPasswordSchema, 
    resetPasswordSchema } = require("../validation/Auth.validation");
const passport = require("passport");

const validate = require("../middleware/validate.middleware");

// Only admin-specific flows
router.post("/register", requireAuthAndRole("admin"), 
            validate(adminRegisterSchema), adminAuthController.adminRegister);
router.get("/verify", adminAuthController.adminVerifyEmail);

router.get("/google", passport.authenticate("google-admin", 
    { scope: ["profile", "email"] }));

router.get("/google/callback", passport.authenticate("google-admin",
     { session: false }), adminAuthController.googleAdminLogin);

module.exports = router;

