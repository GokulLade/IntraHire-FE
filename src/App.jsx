import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./home.jsx";
import Login from "./login.jsx";
import Signup from "./signup.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<h1 style={{textAlign:"center"}}>Dashboard Page</h1>} />
    </Routes>
  );
}

export default App;
