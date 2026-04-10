const express = require("express");
const auth = require("../middleware/Auth.middle");
const discussionController = require("../controllers/discussion.controller");
const router = express.Router();

router.post("/discussions", auth, discussionController.createDiscussion);
router.get("/discussions", auth, discussionController.getDiscussions);
router.get("/discussions/:id", auth, discussionController.getDiscussionById);
router.post("/discussions/:id/replies", auth, discussionController.createReply);
router.get("/resources/pinned", auth, discussionController.getPinnedResources);

module.exports = router;
