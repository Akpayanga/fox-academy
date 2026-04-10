const express = require("express");
const router = express.Router();
const passwordController = require("../controllers/password.controller");

// POST /auth/password-strength
router.post("/password-strength", passwordController.checkStrength);

module.exports = router;
