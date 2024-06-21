import React, { useState } from "react";
import "../css/signup.css";
import { Link, useNavigate } from "react-router-dom";

import { Visibility, VisibilityOff } from "@mui/icons-material";
import EmailIcon from "@mui/icons-material/Email";
import GoogleIcon from "@mui/icons-material/Google";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [Password, setPassword] = useState("");

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          email: email,
          password: Password
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Sign up successful:", data);
        navigate("/verify-email"); // Redirect or handle post sign-up logic
      } else {
        console.error("Sign up failed");
        // Handle errors or unsuccessful sign up here
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  return (
    <div className="container">
      <div className="signup">
        <div className="signup-image">
          <img src="images/image73.png" alt="Sign Up" />
        </div>
        <div className="signup-form">
          <h2>Sign Up</h2>
          <form onSubmit={handleSignUp}>
            <div className="form-group">
              <label htmlFor="email">Email / No.HP</label>
              <input
                type="text"
                id="email"
                placeholder="Email / No. HP"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="icon">
                <EmailIcon />
              </span>
            </div>
            <div className="form-group">
              <label htmlFor="username">username</label>
              <input
                type="text"
                id="username"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <span className="icon">
                <EmailIcon />
              </span>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Password"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="icon" onClick={togglePasswordVisibility}>
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </span>
            </div>

            <button type="submit" className="signup-button">
              Sign Up
            </button>

            <button type="button" className="google-signup-button">
              <span className="google-icon">
                <GoogleIcon />
              </span>{" "}
              Sign Up Via Google
            </button>
          </form>
          <p>
            Already have an account? <Link to="/signin">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;


