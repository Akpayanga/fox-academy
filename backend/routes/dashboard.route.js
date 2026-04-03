const express = require("express");
const router = express.Router();
const dashboardController = require("../controllers/dashboard.controller");
const auth = require("../middleware/Auth.middle");

router.get("/", auth, dashboardController.getDashboardData);

module.exports = router;
