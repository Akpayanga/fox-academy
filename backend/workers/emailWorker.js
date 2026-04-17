require("dotenv").config();
const { Worker } = require("bullmq");
const connection = require("../utilities/redis.util");
const { recordAudit } = require("../utilities/audit.util");

const {
  sendVerificationEmail,
  sendWelcomeEmailStudent,
  sendWelcomeEmailMentor,
  sendProfileCompletionEmailStudent,
  sendProfileCompletionEmailMentor,
  sendWelcomeEmailAdmin,
} = require("../utilities/email.util");

console.log(" Email worker started...");

const handlers = {
  // Verification
  sendVerificationEmail: async (data) => {
    console.log("Processing job:", data);
    if (!data.email || !data.code) {
      throw new Error("Missing email or code");
    }
    await sendVerificationEmail(data.email, data.token, data.code, data.role);
    await recordAudit({
      action: "EMAIL_SENT:VERIFICATION",
      details: `Verification email sent to ${data.email}`,
      resourceId: data.email,
      resourceType: "Email",
      metadata: { role: data.role, sentAt: new Date() },
    });
  },

  // Welcome emails
  sendWelcomeEmailStudent: async (data) => {
    if (!data.email || !data.firstName) {
      throw new Error("Missing student email or firstName");
    }
    await sendWelcomeEmailStudent(data.email, data.firstName);
    await recordAudit({
      action: "EMAIL_SENT:WELCOME_STUDENT",
      details: `Student welcome email sent to ${data.email}`,
      resourceId: data.email,
      resourceType: "Email",
      metadata: { sentAt: new Date() },
    });
  },

  sendWelcomeEmailMentor: async (data) => {
    if (!data.email || !data.firstName || !data.discipline) {
      throw new Error("Missing mentor email, firstName, or discipline");
    }
    await sendWelcomeEmailMentor(data.email, data.firstName, data.discipline);
    await recordAudit({
      action: "EMAIL_SENT:WELCOME_MENTOR",
      details: `Mentor welcome email sent to ${data.email}`,
      resourceId: data.email,
      resourceType: "Email",
      metadata: { discipline: data.discipline, sentAt: new Date() },
    });
  },

  // Profile completion emails
  sendProfileCompletionEmailStudent: async (data) => {
    if (!data.email || !data.firstName || !data.course || !data.studentId) {
      throw new Error("Missing student profile completion data");
    }
    await sendProfileCompletionEmailStudent(
      data.email,
      data.firstName,
      data.course,
      data.studentId
    );
    await recordAudit({
      action: "EMAIL_SENT:PROFILE_COMPLETION_STUDENT",
      details: `Student profile completion email sent to ${data.email}`,
      resourceId: data.email,
      resourceType: "Email",
      metadata: {
        course: data.course,
        studentId: data.studentId,
        sentAt: new Date(),
      },
    });
  },

  sendProfileCompletionEmailMentor: async (data) => {
    if (!data.email || !data.firstName || !data.discipline) {
      throw new Error("Missing mentor profile completion data");
    }
    await sendProfileCompletionEmailMentor(
      data.email,
      data.firstName,
      data.discipline
    );
    await recordAudit({
      action: "EMAIL_SENT:PROFILE_COMPLETION_MENTOR",
      details: `Mentor profile completion email sent to ${data.email}`,
      resourceId: data.email,
      resourceType: "Email",
      metadata: { discipline: data.discipline, sentAt: new Date() },
    });
  },

  sendWelcomeEmailAdmin: async (data) => {
    if (!data.email || !data.firstName) {
      throw new Error("Missing admin email or firstName");
    }
    await sendWelcomeEmailAdmin(data.email, data.firstName);
    await recordAudit({
      userId: data.userId || null,
      action: "EMAIL_SENT:WELCOME_ADMIN",
      details: `Admin welcome email sent to ${data.email}`,
      req: {},
      status: "success",
      resourceId: data.email,
      resourceType: "Email",
      metadata: { sentAt: new Date() },
    });
  },
};

const emailWorker = new Worker(
  "emailQueue",
  async (job) => {
    const handler = handlers[job.name];
    if (!handler) {
      throw new Error(`No handler for job: ${job.name}`);
    }
    await handler(job.data);
  },
  { connection },
);

emailWorker.on("completed", (job) => {
  console.log(` ${job.name} completed for ${job.data.email}`);
});

emailWorker.on("failed", (job, err) => {
  console.error(` ${job.name} failed: ${err.message}`);
});
