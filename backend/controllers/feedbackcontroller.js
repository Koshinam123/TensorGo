
exports.submitFeedback = async (req, res) => {
  const { category, comment } = req.body;

  if (!category || !comment) {
    return res.status(400).json({ message: "Category and comment are required." });
  }

  try {
    
    console.log(`Received feedback: [${category}] ${comment}`);

    
    res.status(200).json({
      message: "Feedback received successfully (mocked, not sent to Frill).",
    });
  } catch (err) {
    console.error("Error processing feedback:", err.message);
    res.status(500).json({ message: "Failed to process feedback" });
  }
};

