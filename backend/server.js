require("dotenv").config();
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/database");
require("./config/passport.config");

// Import your routes
const authRoutes = require("./routes/Auth.route");
const passwordRoutes = require("./routes/password.route");

const app = express(); 

// Middleware
app.use(cors({ origin: "http://localhost:3000", credentials: true })); 
app.use(express.json());
app.use(passport.initialize());
app.use(cookieParser());

connectDB();


app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/auth", passwordRoutes);

app.get("/", (req, res) => {
  res.send("API running...");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));