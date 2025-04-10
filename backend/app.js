
const express = require("express");
const dotenv = require("dotenv");
const session = require("express-session"); 
const passport = require("passport");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const feedbackRoutes = require("./routes/feedbackRoutes");

dotenv.config();
require("./config/passport"); 

const app = express();
const PORT = process.env.PORT || 5000;






app.use(
  session({
    secret: process.env.SESSION_SECRET || "your_secret_key", 
    resave: false,
    saveUninitialized: false,
  })
);


app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);


app.use(express.json());


app.use(passport.initialize());
app.use(passport.session());


app.use("/auth", authRoutes);
app.use("/api/feedback", feedbackRoutes);


app.get("/auth/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "success",
      user: req.user,
    });
  } else {
    res.status(401).json({
      success: false,
      message: "Not authenticated",
    });
  }
});


app.get("/", (req, res) => {
  res.send("Customer Feedback Backend is Running 🚀");
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
