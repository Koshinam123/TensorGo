
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import LoginSuccess from "./pages/LoginSuccess"; 
import axios from "axios";
import Feedback from "./components/Feedback"; 
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";




axios.defaults.withCredentials = true; 

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/login/success" element={<LoginSuccess />} /> 
      <Route path="/feedback" element={<Feedback />} />
      <Route path="/login/success" element={<LoginSuccess />} />

    
      
<Route path="/feedback-form" element={<FeedbackForm />} />
<Route path="/feedback-list" element={<FeedbackList />} />
    </Routes>
  );
};

export default App;



