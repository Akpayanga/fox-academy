const Notification = require('../models/Notification.model')

const getNotifyList = async (req, res) => {
  try {
    const { userId, message } = req.body;

    const NotifyUser = await Notification.find({
      message: userId,
      message: message,
      isRead: { $nin: [userId] },
    }).populate( "message")
    .select("message notiType");

    res.status(200).json({ NotifyUser });

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// MARK READ NOTIFICATION
const markNotifyAsRead = async (req, res) => {
  try {
    const { userId } = req.user;

    const { id, isReadType } = req.query;

    // CHECK TO MARK ALL NOTIFICATION AS READ
    if (isReadType === "all") {
      await Notify.updateMany(
        { message: userId, isRead: { $nin: [userId] } },
        { $push: { isRead: userId } },
        { new: true }
      );
      // return res.status(200).json({ notify });
    } else {
      await Notify.findByIdAndUpdate(
        { _id: id, isRead: { $nin: [userId] } },
        { $push: { isRead: userId } },
        { new: true }
      );

      res.status(200).json({ status: true, message: "Done" });

    }
    
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { getNotifyList, markNotifyAsRead };