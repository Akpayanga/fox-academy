const Discussion = require("../models/discussion.model");
const Reply = require("../models/reply.model");
const { error, success } = require("../utilities/response");

exports.createDiscussion = async (req, res) => {
  try {
    const userId = req.user._id;
    if (!userId) return error(res, 401, "Unauthorized!");

    const { title, content, channel, tags, attachments } = req.body;

    const newDiscussion = new Discussion({
      title,
      content,
      author: userId,
      channel,
      tags: tags || [],
      attachments: attachments || []
    });

    await newDiscussion.save();
    return success(res, newDiscussion, "Discussion created successfully!");
  } catch (error) {
    console.error("Error creating discussion:", error);
    return error(res, 500, "Server Error!");
  }
};

exports.getDiscussions = async (req, res) => {
  try {
    const { channel, sort } = req.query;

    let query = {};
    if (channel) {
      query.channel = channel;
    }

    let sortOptions = { createdAt: -1 }; // default to recent
    if (sort === "popular") {
      sortOptions = { views: -1, createdAt: -1 };
    }

    const discussions = await Discussion.find(query)
      .sort(sortOptions)
      .populate("author", "firstName lastName _id role")
      .lean();

    // Add replies count for each discussion
    const enrichedDiscussions = await Promise.all(
      discussions.map(async (doc) => {
        const replyCount = await Reply.countDocuments({ discussion: doc._id });
        return { ...doc, replyCount };
      })
    );

    return success(res, enrichedDiscussions, "Discussions fetched successfully!");
  } catch (err) {
    console.error("Error fetching discussions:", err);
    return error(res, 500, "Server Error!");
  }
};

exports.getDiscussionById = async (req, res) => {
  try {
    const { id } = req.params;

    const discussion = await Discussion.findByIdAndUpdate(
      id,
      { $inc: { views: 1 } },
      { new: true }
    ).populate("author", "firstName lastName _id role");

    if (!discussion) {
      return error(res, 404, "Discussion not found!");
    }

    const replies = await Reply.find({ discussion: id })
      .sort({ createdAt: 1 })
      .populate("author", "firstName lastName _id role");

    return success(res, { discussion, replies }, "Discussion details fetched successfully!");
  } catch (err) {
    console.error("Error fetching discussion:", err);
    return error(res, 500, "Server Error!");
  }
};

exports.createReply = async (req, res) => {
  try {
    const userId = req.user._id;
    const { id } = req.params; // discussion id
    const { content } = req.body;

    if (!userId) return error(res, 401, "Unauthorized!");

    const discussion = await Discussion.findById(id);
    if (!discussion) return error(res, 404, "Discussion not found!");

    const reply = new Reply({
      content,
      author: userId,
      discussion: id
    });

    await reply.save();
    return success(res, reply, "Reply added successfully!");
  } catch (err) {
    console.error("Error creating reply:", err);
    return error(res, 500, "Server Error!");
  }
};

exports.getPinnedResources = async (req, res) => {
  try {
    const { channel } = req.query;
    let query = { isPinned: true };
    if (channel) {
      query.channel = channel;
    }

    const discussions = await Discussion.find(query)
      .select("attachments")
      .lean();

    // Flatten attachments across matched discussions
    const resources = discussions.reduce((acc, curr) => {
      if (curr.attachments && curr.attachments.length > 0) {
        return acc.concat(curr.attachments);
      }
      return acc;
    }, []);

    return success(res, resources, "Pinned resources fetched successfully!");
  } catch (err) {
    console.error("Error fetching pinned resources:", err);
    return error(res, 500, "Server Error!");
  }
};
