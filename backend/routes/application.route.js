const express = require("express");
const router = express.Router();
const applicationController = require("../controllers/application.controller");

router.post("/submit", applicationController.submitApplication);
router.get("/status/:email", applicationController.getApplicationStatus);

module.exports = router;
