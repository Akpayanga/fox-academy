const Discussion = require("../models/discussion.model");
const Reply = require("../models/reply.model");
const { recordAudit } = require("../utilities/audit.util");
const { success } = require("../utilities/response");
const ApiError = require("../utilities/apiError.util");

exports.createDiscussion = async (req, res, next) => {
  try {
    const userId = req.user._id;
    if (!userId) throw new ApiError(401, "Unauthorized!");

    const { title, content, channel, tags, attachments } = req.body;

    const newDiscussion = new Discussion({
      title,
      content,
      author: userId,
      channel,
      tags: tags || [],
      attachments: attachments || [],
    });

    await newDiscussion.save();
    //audit log
    await recordAudit({
      userId,
      action: "DISCUSSION_CREATE",
      details: `Created discussion ${newDiscussion._id}`,
      req,
      status: "success",
      resourceId: newDiscussion._id,
      resourceType: "Discussion",
    });

    return success(res, newDiscussion, "Discussion created successfully!");
  } catch (err) {
    next(err);
  }
};

exports.getDiscussions = async (req, res, next) => {
  try {
    const { channel, sort } = req.query;
    let query = channel ? { channel } : {};
    let sortOptions =
      sort === "popular" ? { views: -1, createdAt: -1 } : { createdAt: -1 };

    const discussions = await Discussion.find(query)
      .sort(sortOptions)
      .populate("author", "firstName lastName _id role")
      .lean();

    const enrichedDiscussions = await Promise.all(
      discussions.map(async (doc) => {
        const replyCount = await Reply.countDocuments({ discussion: doc._id });
        return { ...doc, replyCount };
      }),
    );
    //audit log
    await recordAudit({
      userId: req.user?._id || null,
      action: "DISCUSSION_LIST",
      details: `Fetched discussions${channel ? ` for channel ${channel}` : ""}`,
      req,
      status: "success",
      resourceType: "Discussion",
    });

    return success(
      res,
      enrichedDiscussions,
      "Discussions fetched successfully!",
    );
  } catch (err) {
    next(err);
  }
};

exports.getDiscussionById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const discussion = await Discussion.findByIdAndUpdate(
      id,
      { $inc: { views: 1 } },
      { new: true },
    ).populate("author", "firstName lastName _id role");

    if (!discussion) throw new ApiError(404, "Discussion not found!");

    const replies = await Reply.find({ discussion: id })
      .sort({ createdAt: 1 })
      .populate("author", "firstName lastName _id role");
    //audit log
    await recordAudit({
      userId: req.user?._id || null,
      action: "DISCUSSION_VIEW",
      details: `Viewed discussion ${id}`,
      req,
      status: "success",
      resourceId: id,
      resourceType: "Discussion",
    });

    return success(
      res,
      { discussion, replies },
      "Discussion details fetched successfully!",
    );
  } catch (err) {
    next(err);
  }
};

exports.createReply = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const { id } = req.params;
    const { content } = req.body;

    if (!userId) throw new ApiError(401, "Unauthorized!");

    const discussion = await Discussion.findById(id);
    if (!discussion) throw new ApiError(404, "Discussion not found!");

    const reply = new Reply({ content, author: userId, discussion: id });
    await reply.save();
    //audit log
    await recordAudit({
      userId,
      action: "REPLY_CREATE",
      details: `Added reply ${reply._id} to discussion ${id}`,
      req,
      status: "success",
      resourceId: reply._id,
      resourceType: "Reply",
      metadata: { discussionId: id },
    });

    return success(res, reply, "Reply added successfully!");
  } catch (err) {
    next(err);
  }
};

exports.getPinnedResources = async (req, res, next) => {
  try {
    const { channel } = req.query;
    let query = { isPinned: true };
    if (channel) query.channel = channel;

    const discussions = await Discussion.find(query)
      .select("attachments")
      .lean();
    const resources = discussions.reduce(
      (acc, curr) => acc.concat(curr.attachments || []),
      [],
    );
    //audit log
    await recordAudit({
      userId: req.user?._id || null,
      action: "PINNED_RESOURCES_FETCH",
      details: `Fetched pinned resources${channel ? ` for channel ${channel}` : ""}`,
      req,
      status: "success",
      resourceType: "Discussion",
    });

    return success(res, resources, "Pinned resources fetched successfully!");
  } catch (err) {
    next(err);
  }
};
