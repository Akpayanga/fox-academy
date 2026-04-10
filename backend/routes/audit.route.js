const express = require("express");
const router = express.Router();
const auditController = require("../controllers/Audit.controller");
const requireAuthAndRole = require("../middleware/AuthRole.middleware");

router.get("/", requireAuthAndRole("admin"), auditController.listAuditLogs);


module.exports = router;
