import React from "react";
import { useNavigate } from "react-router-dom";

const LoginSuccess = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: 20 }}>
      <h2>Welcome! Choose an option:</h2>
      <button onClick={() => window.open("https://rguktb191085.frill.co/b/q0qly6pv/feature-ideas", "_blank")}>
        Go to Frill Board
      </button>
      <button onClick={() => navigate("/feedback-form")} style={{ marginLeft: 10 }}>
        Submit Feedback
      </button>
    </div>
  );
};

export default LoginSuccess;
