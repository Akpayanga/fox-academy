const nodemailer = require("nodemailer");

const port = Number(process.env.SMTP_PORT);

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  debug: true,
  logger: true,
});

// Debug only in development
if (process.env.NODE_ENV === "development") {
  transporter.verify((error) => {
    if (error) {
      console.log("SMTP ERROR:", error);
    } else {
      console.log("SMTP READY");
    }
  });
}

const sendVerificationEmail = async (email, token, code) => {
  try {
    const url = `${process.env.CLIENT_URL}/verify-invitation?token=${token}`;
    const expiryHours =
      role === "student"
        ? process.env.INVITE_EXPIRY_HOURS_STUDENT || 48
        : role === "instructor"
          ? process.env.INVITE_EXPIRY_HOURS_INSTRUCTOR || 72
          : process.env.INVITE_EXPIRY_HOURS_DEFAULT || 24;
    const info = await transporter.sendMail({
      from: `"FoxtrotTalent" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Your Fox Academy Invitation",
      html: `
        <h2>Welcome to Fox Academy 🎉</h2>
        <p>Your invitation code is: <strong>${code}</strong></p>
        <p>Click the link below to verify your invitation:</p>
        <a href="${url}">Verify Invitation</a>
        <p>This link expires in ${expiryHours} hours.</p>
        `,
    });

    console.log("Email sent:", info.response);
  } catch (error) {
    console.error("Email sending failed:", error);
    throw new Error("Email could not be sent");
  }
};

module.exports = { sendVerificationEmail };
