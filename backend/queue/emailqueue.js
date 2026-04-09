const { Queue } = require("bullmq");
const connection = require("../utilities/redis.util");

const emailQueue = new Queue("emailQueue", { connection });

module.exports = emailQueue;