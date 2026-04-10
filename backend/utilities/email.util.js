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

const sendVerificationEmail = async (email, token, code, role) => {
  try {
    if (!token) {
      throw new Error("Token is required");
    }
    const cleanToken = token.replace(/\s/g, "");

    const url = `${process.env.CLIENT_URL}/verify-invitation?token=${encodeURIComponent(cleanToken)}&code=${encodeURIComponent(code)}`;

    const expiryHours =
      role === "student"
        ? process.env.INVITE_EXPIRY_HOURS_STUDENT || 48
        : role === "instructor"
          ? process.env.INVITE_EXPIRY_HOURS_INSTRUCTOR || 72
          : process.env.INVITE_EXPIRY_HOURS_DEFAULT || 24;

    const info = await transporter.sendMail({
      from: `"FoxtrotTalent" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Verify Your Invitation",
      // "X-Priority": "1",

      html: `
<!DOCTYPE html>
<html>
  <body style="font-family: Arial, sans-serif; line-height: 1.6;">

    <h2>Welcome to Fox Academy 🎉</h2>

    <p>Your invitation code is:</p>
    <p><strong>${code}</strong></p>

    <p>Click the link below to verify your invitation:</p>

    <p>
     <a href="${url}" target="_blank">Verify Invitation</a>
    </p>

    <p>Or copy and paste this link into your browser:</p>
    <p style="word-break: break-all;">${url}</p>

    <p>This link expires in ${expiryHours} hours.</p>

  </body>
</html>
`,
    });

    console.log("Email sent:", info.response);
  } catch (error) {
    console.error("Email sending failed:", error);
    throw new Error("Email could not be sent");
  }
};

const sendWelcomeEmail = async (email) => {
  try {
    const info = await transporter.sendMail({
      from: `"FoxtrotTalent" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Welcome to Fox Academy 🎉",
      // "X-Priority": "1",
      html: `
        <h2>Welcome aboard!</h2>
        <p>Your invitation has been successfully verified.</p>
        <p>We’re excited to have you join Fox Academy. You can now continue your registration and start exploring your dashboard.</p>
        <p>Best regards,<br/>The Fox Academy Team</p>
      `,
    });

    console.log("Welcome email sent:", info.response);
  } catch (error) {
    console.error("Welcome email sending failed:", error);
    throw new Error("Welcome email could not be sent");
  }
};

module.exports = { sendVerificationEmail, sendWelcomeEmail };