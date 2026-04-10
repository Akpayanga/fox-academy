const emailQueue = require("../queue/emailqueue");

exports.enqueueVerificationEmail = async (email, token, code) => {
  await emailQueue.add(
    "sendVerificationEmail",
    { email, token, code },
    {
      delay: 10 * 60 * 1000,
      attempts: 5,
      backoff: {
        type: "exponential",
        delay: 5000,
      },
    }
  );
};

exports.enqueueWelcomeEmail = async (email) => {
  await emailQueue.add("sendWelcomeEmail", { email });
};