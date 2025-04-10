
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FeedbackForm = () => {
  const [category, setCategory] = useState("Product Features");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(3);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFeedback = {
      id: Date.now(),
      category,
      comment,
      rating,
      timestamp: new Date().toLocaleString(),
    };

    const stored = JSON.parse(localStorage.getItem("feedbacks")) || [];
    stored.push(newFeedback);
    localStorage.setItem("feedbacks", JSON.stringify(stored));

    navigate("/feedback-list");
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2>Submit Feedback</h2>

      <label>Category:</label>
      <select value={category} onChange={(e) => setCategory(e.target.value)} style={styles.input}>
        <option>Product Features</option>
        <option>Product Pricing</option>
        <option>Product Usability</option>
      </select>

      <label>Comment:</label>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        style={styles.textarea}
        required
      />

      <label>Rating: {rating}</label>
      <input
        type="range"
        min="1"
        max="5"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />

      <button type="submit" style={styles.button}>Submit</button>
    </form>
  );
};

const styles = {
  form: {
    padding: "20px",
    maxWidth: "500px",
    margin: "auto",
    background: "#f4f4f4",
    borderRadius: "10px",
    marginTop: "40px"
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px"
  },
  textarea: {
    width: "100%",
    height: "80px",
    padding: "10px",
    marginBottom: "10px"
  },
  button: {
    background: "#007BFF",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px"
  }
};

export default FeedbackForm;

  
