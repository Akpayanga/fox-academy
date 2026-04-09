const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const notificationSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  isRead: [{ type: Schema.Types.ObjectId, ref: "User" }],

  notiType: { type: String,  default: "alert", enum:["alert", "message"] },

  message: String,

});

module.exports = mongoose.model( "Notification",  notificationSchema);