const nodemailer = require("nodemailer");

const port = Number(process.env.SMTP_PORT);

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: port,
  secure: port === 465, 
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  connectionTimeout: 10000,
});
// Debug only in development
if (process.env.NODE_ENV === "development") {
  transporter.verify((error) => {
    if (error) {
      console.log("SMTP ERROR:", error);
    } else {
      console.log("MTP READY");
    }
  });
}

const sendVerificationEmail = async (email, token) => {
  try {
    const url = `${process.env.CLIENT_URL}/verify-email?token=${token}`;

    const info = await transporter.sendMail({
      from: `"FoxtrotTalent" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Verify your email",
      html: `
        <h2>Welcome to Fox Academy 🎉</h2>
        <p>Click the button below to verify your account:</p>
        <a href="${url}" style="
          display:inline-block;
          padding:12px 24px;
          background:#000;
          color:#fff;
          text-decoration:none;
          border-radius:5px;
        ">
          Verify Email
        </a>
        <p>This link expires in 1 hour.</p>
      `,
    });

    console.log("Email sent:", info.response);
  } catch (error) {
    console.error("Email sending failed:", error.message);
    throw new Error("Email could not be sent");
  }
};

module.exports = { sendVerificationEmail };