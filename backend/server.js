require("dotenv").config();
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/database");
require("./config/passport.config");

// Import your routes
const authRoutes = require("./routes/UserInstructor.Auth.route");
const passwordRoutes = require("./routes/password.route");
const adminAuthRoutes = require("./routes/admin.auth.route");
const auditRoutes = require("./routes/audit.route");
const dashboardRoutes = require("./routes/dashboard.route");
const assignmentRoutes = require("./routes/assignment.route");
const courseRoutes = require("./routes/course.route");
const applicationRoutes = require("./routes/application.route");

const app = express(); 

// Middleware
app.use(cors({ origin: "http://localhost:3000", credentials: true })); 
app.use(express.json());
app.use(passport.initialize());
app.use(cookieParser());

connectDB();


app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/auth", passwordRoutes);
app.use("/api/v1/auth/admin", adminAuthRoutes);
app.use("/api/v1/audit", auditRoutes);
app.use("/api/v1/dashboard", dashboardRoutes);
app.use("/api/v1/assignments", assignmentRoutes);
app.use("/api/v1/courses", courseRoutes);
app.use("/api/v1/applications", applicationRoutes);

app.get("/", (req, res) => {
  res.send("API running...");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));