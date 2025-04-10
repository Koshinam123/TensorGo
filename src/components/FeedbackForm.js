// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const FeedbackForm = () => {
//   const [feedback, setFeedback] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const existing = JSON.parse(localStorage.getItem("feedbacks")) || [];
//     const newEntry = { id: Date.now(), text: feedback };
//     localStorage.setItem("feedbacks", JSON.stringify([...existing, newEntry]));
//     navigate("/feedback-list");
//   };

//   return (
//     <form onSubmit={handleSubmit} style={{ padding: 20 }}>
//       <h3>Submit your feedback:</h3>
//       <textarea
//         rows="4"
//         cols="50"
//         value={feedback}
//         onChange={(e) => setFeedback(e.target.value)}
//         required
//       />
//       <br />
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default FeedbackForm;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState("");
  const [category, setCategory] = useState("Product Features");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const existing = JSON.parse(localStorage.getItem("feedbacks")) || [];

    const newEntry = {
      id: Date.now(),
      text: feedback,
      category: category,
    };

    localStorage.setItem("feedbacks", JSON.stringify([...existing, newEntry]));
    navigate("/feedback-list");
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: 20 }}>
      <h3>Submit your feedback:</h3>

      <label>
        Category:{" "}
        <select value={category} onChange={(e) => setCategory(e.target.value)} required>
          <option value="Product Features">Product Features</option>
          <option value="Product Pricing">Product Pricing</option>
          <option value="Product Usability">Product Usability</option>
        </select>
      </label>

      <br /><br />

      <textarea
        rows="4"
        cols="50"
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        required
        placeholder="Write your feedback here..."
      />

      <br />

      <button type="submit">Submit</button>
    </form>
  );
};

export default FeedbackForm;
