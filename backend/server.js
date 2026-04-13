require("dotenv").config();
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const Sentry = require("@sentry/node");
const mongoose = require("mongoose");
const connectDB = require("./config/database");
require("./config/passport.config");

// Import routes
const authRoutes = require("./routes/UserInstructor.Auth.route");
const passwordRoutes = require("./routes/password.route");
const adminAuthRoutes = require("./routes/admin.auth.route");
const auditRoutes = require("./routes/audit.route");
const dashboardRoutes = require("./routes/dashboard.route");
const assignmentRoutes = require("./routes/assignment.route");
const courseRoutes = require("./routes/course.route");
const applicationRoutes = require("./routes/application.route");
const notificationRoutes = require("./routes/Notification.route");
const courseProgressRoutes = require("./routes/courseProgress.routes");
const mediaRoutes = require("./routes/media.route");
const learningRoutes = require("./routes/learning.route");
const discussionRoutes = require("./routes/discussion.route");
const managementRoutes = require("./routes/management.route");
const bookingRoutes = require("./routes/booking.route");

// Utilities
const { success } = require("./utilities/response");

// Error handler
const errorHandler = require("./middleware/errorHandler.middleware");

const app = express();
app.disable("x-powered-by");

// Sentry setup
if (process.env.SENTRY_DSN) {
  Sentry.init({ dsn: process.env.SENTRY_DSN, tracesSampleRate: 1.0 });
}

// Middleware
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(passport.initialize());
app.use(cookieParser());

// Database
connectDB();

// Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/auth", passwordRoutes);
app.use("/api/v1/auth/admin", adminAuthRoutes);
app.use("/api/v1/audit", auditRoutes);
app.use("/api/v1/dashboard", dashboardRoutes);
app.use("/api/v1/assignments", assignmentRoutes);
app.use("/api/v1/courses", courseRoutes);
app.use("/api/v1/applications", applicationRoutes);
app.use("/api/v1/learning", learningRoutes);
app.use("/api/v1/community", discussionRoutes);
app.use("/api/v1/management", managementRoutes);
app.use("/api/v1/notifications", notificationRoutes);
app.use("/api/v1/course-progress", courseProgressRoutes);
app.use("/api/v1/media", mediaRoutes);
app.use("/api/v1/bookings", bookingRoutes);

// Liveness check (is the API process alive?)
app.get("/api/v1/live", (req, res) => {
  return success(res, {
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  }, "API is live");
});

// Readiness check (is the API ready, including DB?)
app.get("/api/v1/health", (req, res) => {
  const dbState = mongoose.connection.readyState;
  const dbStatus =
    dbState === 1 ? "connected" :
    dbState === 2 ? "connecting" :
    dbState === 0 ? "disconnected" : "disconnecting";

  return success(res, {
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    database: dbStatus
  }, "API is healthy");
});

// Root endpoint
app.get("/", (req, res) => {
  return success(res, null, "API running...");
});

// Error handler 
app.use(errorHandler);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
