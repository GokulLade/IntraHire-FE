import "./login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard"); // frontend-only login
  };

  return (
    <div className="login-container">
      <span className="back-home" onClick={() => navigate("/")}>
        ← Back to Home
      </span>

      <div className="login-card">
        <h1>IntraHire</h1>
        <p>Smart Internal Hiring Platform</p>

        <form onSubmit={handleLogin}>
          <label>Email Address</label>
          <input
            type="email"
            placeholder="user@intrahire.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <div className="password-box">
            <input
              type={show ? "text" : "password"}
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span onClick={() => setShow(!show)}>Show</span>
          </div>

          <div className="options">
            <label><input type="checkbox" /> Remember me</label>
            <span>Forgot Password?</span>
          </div>

          <button className="login-btn">Login to Dashboard</button>

          <p className="link">
            New user? <span onClick={() => navigate("/signup")}>Create Account</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
