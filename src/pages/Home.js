import React, { useEffect, useState } from "react";
import api from "../api";
import FeedbackForm from "../components/FeedbackForm";
import FeedbackList from "../components/FeedbackList";
import { useNavigate } from "react-router-dom";

import axios from "axios";

axios.defaults.withCredentials = true;

const Home = () => {
  const [user, setUser] = useState(null);
  const [feedbackData, setFeedbackData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetchUser();
    fetchFeedback();
  }, []);

  const fetchUser = async () => {
    try {
      const res = await api.get("/auth/login/success");
      setUser(res.data.user);
    } catch (err) {
      navigate("/login");
    }
  };

  const fetchFeedback = async () => {
    try {
      const res = await api.get("/api/feedback");
      setFeedbackData(res.data);
    } catch (err) {
      console.error("Failed to fetch feedback:", err);
    }
  };

  const handleLogout = () => {
    window.open(`${process.env.REACT_APP_BACKEND_URL}/auth/logout`, "_self");
  };

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ textAlign: "right" }}>
        <button onClick={handleLogout}>Logout</button>
      </div>

      <h2>Welcome, {user?.displayName}</h2>

      <FeedbackForm onSubmit={fetchFeedback} />
      <FeedbackList feedback={feedbackData} />
    </div>
  );
};

export default Home;
