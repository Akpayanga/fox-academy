const express = require("express");
const router = express.Router();
const assignmentController = require("../controllers/assignment.controller");
const auth = require("../middleware/Auth.middle"); 

router.get("/", auth, assignmentController.getAssignments);
router.get("/:id", auth, assignmentController.getAssignmentById);
router.post("/:id/submit", auth, assignmentController.submitAssignment);

module.exports = router;
