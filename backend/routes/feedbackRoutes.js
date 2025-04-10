const express = require("express");
const router = express.Router();
const {
  submitFeedback,
  getFeedbackSummary,
} = require("../controllers/feedbackController");

router.post("/", submitFeedback);


module.exports = router;


