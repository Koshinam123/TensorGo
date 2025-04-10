import React, { useEffect, useState } from "react";
import axios from "axios";

const LoginSuccess = () => {
  const [user, setUser] = useState(null);
  const [feedback, setFeedback] = useState(() => localStorage.getItem("feedback") || "");

  useEffect(() => {
    axios
      .get("http://localhost:5000/auth/login/success", { withCredentials: true })
      .then((res) => {
        setUser(res.data.user);
      })
      .catch((err) => {
        console.error(err);
        setUser(null);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("feedback", feedback);
    alert("Feedback saved locally ✅");
  };

  if (!user) return <h3>Loading or Not Logged In...</h3>;

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Welcome, {user.displayName}</h2>
      <img src={user.photo} alt="Profile" style={{ borderRadius: "50%", width: 80 }} />
      <p>Email: {user.email}</p>

      <div style={{ marginTop: "2rem" }}>
        <button
          onClick={() => window.open("https://rguktb191085.frill.co/b/q0qly6pv/feature-ideas", "_blank")}
          style={{ padding: "0.5rem 1rem", marginBottom: "1rem" }}
        >
          Go to Frill Feedback Board
        </button>

        <form onSubmit={handleSubmit}>
          <textarea
            rows="5"
            cols="40"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Write your feedback here..."
            required
          />
          <br />
          <button type="submit">Save Feedback</button>
        </form>
      </div>
    </div>
  );
};

export default LoginSuccess;
