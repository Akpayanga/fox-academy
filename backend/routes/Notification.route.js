const express = require("express");
const router = express.Router();

const requireAuth = require("../middleware/AuthRole.middleware");
const { getNotifyList, markNotifyAsRead } = require("../controllers/Notification.controller");

router.get("/", requireAuth, getNotifyList);
router.put("/read-notify", requireAuth, markNotifyAsRead);


module.exports = router;    