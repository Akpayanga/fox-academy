const Notification = require("../models/Notification.model");
const { success } = require("../utilities/response");
const ApiError = require("../utilities/apiError.util");
const { recordAudit } = require("../utilities/audit.util");

// Get notifications for a user
const getNotifyList = async (req, res, next) => {
  try {
    const { userId, message } = req.body;

    const NotifyUser = await Notification.find({
      user: userId,
      message,
      isRead: { $nin: [userId] },
    })
      .populate("message")
      .select("message notiType");

    //audit log
    await recordAudit({
      userId,
      action: "NOTIFICATIONS_FETCH",
      details: "Fetched notifications",
      req,
      status: "success",
      resourceType: "Notification",
    });

    return success(res, NotifyUser, "Notifications fetched successfully");
  } catch (err) {
    next(err);
  }
};

// Mark notifications as read
const markNotifyAsRead = async (req, res, next) => {
  try {
    const { userId } = req.user;
    const { id, isReadType } = req.query;

    if (isReadType === "all") {
      await Notification.updateMany(
        { message: userId, isRead: { $nin: [userId] } },
        { $push: { isRead: userId } },
        { new: true },
      );
      return success(res, null, "All notifications marked as read");
    } else {
      const notify = await Notification.findByIdAndUpdate(
        { _id: id, isRead: { $nin: [userId] } },
        { $push: { isRead: userId } },
        { new: true },
      );

      if (!notify) throw new ApiError(404, "Notification not found");

      //audit log
      await recordAudit({
        userId,
        action: "NOTIFICATION_READ",
        details: `Notification ${id} marked as read`,
        req,
        status: "success",
        resourceId: id,
        resourceType: "Notification",
      });

      return success(res, notify, "Notification marked as read");
    }
  } catch (err) {
    next(err);
  }
};

module.exports = { getNotifyList, markNotifyAsRead };
