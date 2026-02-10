import "./signup.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleSignup = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h1>IntraHire</h1>
        <p>Create your account</p>

        <form onSubmit={handleSignup}>
          <input
            placeholder="Username"
            value={form.username}
            onChange={(e) => setForm({...form, username:e.target.value})}
          />

          <input
            placeholder="Email address"
            value={form.email}
            onChange={(e) => setForm({...form, email:e.target.value})}
          />

          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({...form, password:e.target.value})}
          />

          <button>Create Account</button>

          <p>
            Already have an account?
            <span onClick={() => navigate("/login")}> Login</span>
          </p>

          <p className="back" onClick={() => navigate("/")}>
            ← Back to Home
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
