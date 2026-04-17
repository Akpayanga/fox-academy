const emailQueue = require("../queue/emailqueue");

// -------------------- VERIFICATION EMAIL --------------------
exports.enqueueVerificationEmail = async (userId, email, token, code, role) => {
  await emailQueue.add(
    "sendVerificationEmail",
    { userId, email, token, code, role },
    {
      delay: 0,
      attempts: 5,
      backoff: {
        type: "exponential",
        delay: 5000,
      },
    },
  );
};

// -------------------- WELCOME EMAILS --------------------
exports.enqueueWelcomeEmailStudent = async (userId, email, firstName) => {
  await emailQueue.add("sendWelcomeEmailStudent", { userId, email, firstName });
};

exports.enqueueWelcomeEmailMentor = async (userId, email, firstName, discipline) => {
  await emailQueue.add("sendWelcomeEmailMentor", { userId, email, firstName, discipline });
};

exports.enqueueWelcomeEmailAdmin = async (userId, email, firstName) => {
  await emailQueue.add("sendWelcomeEmailAdmin", { userId, email, firstName });
};

// -------------------- PROFILE COMPLETION EMAILS --------------------
exports.enqueueProfileCompletionEmailStudent = async (userId, email, firstName, course, studentId) => {
  await emailQueue.add("sendProfileCompletionEmailStudent", { userId, email, firstName, course, studentId });
};

exports.enqueueProfileCompletionEmailMentor = async (userId, email, firstName, discipline) => {
  await emailQueue.add("sendProfileCompletionEmailMentor", { userId, email, firstName, discipline });
};
