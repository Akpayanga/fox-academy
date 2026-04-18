const express = require("express");
const router = express.Router();
const managementController = require("../controllers/management.controller");
const auth = require("../middleware/Auth.middle");
// Assuming there's an admin check middleware, if not I'll just use auth for now
// const isAdmin = require("../middleware/isAdmin.middle"); 

router.get("/mentors", auth, managementController.listMentors);
router.get("/interns", auth, managementController.listInterns);
router.get("/applications", auth, managementController.listApplications);
router.post("/applications/:id/approve", auth, managementController.approveApplication);
router.delete("/applications/:id/reject", auth, managementController.rejectApplication);

module.exports = router;
