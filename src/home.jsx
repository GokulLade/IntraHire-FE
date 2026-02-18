import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-wrapper">
      <nav className="navbar">
        <div className="logo">
          <img src="./src/assets/logo.png" width={500} height={500} />
        </div>

        <div className="nav-right">
          <span>About</span>
          <span>Contact</span>
          <button className="nav-btn" onClick={() => navigate("/login")}>
            Login
          </button>
        </div>
      </nav>

      <section className="hero-section">
        <h1>Welcome to IntraHire</h1>
        <p>Smart Internal Hiring Platform</p>

        <button className="primary-btn" onClick={() => navigate("/signup")}>
          Get Started
        </button>
      </section>

      <footer className="footer">© 2026 IntraHire. All rights reserved.</footer>
    </div>
  );
};

export default Home;
