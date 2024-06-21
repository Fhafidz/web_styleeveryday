import React, { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import EmailIcon from "@mui/icons-material/Email";
import GoogleIcon from "@mui/icons-material/Google";
import { Link, useNavigate } from "react-router-dom";
import "../css/signin.css";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSignIn = async (event) => {
    event.preventDefault();  // Prevent the default form submission behavior

    const email = event.target.email.value;
    const password = event.target.password.value;

    try {
      const response = await fetch('http://localhost:8000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      console.log('Email:', email, 'Password:', password);

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        localStorage.setItem('useraccount_id', data.user.useraccount_id);
        navigate('/user-home'); // Redirect to user home page on successful login
      } else {
        console.error('Login failed:', response.status);
      }
    } catch (error) {
      console.error('Network error:', error);
      // Optionally, handle network errors here (e.g., show a network error message)
    }
  };

  return (
    <div className="container">
      <div className="signin">
        <div className="signin-form">
          <h1>Welcome Back!</h1>
          <form onSubmit={handleSignIn}>
            <div className="input-group">
              <label htmlFor="email">Email / No.HP</label>
              <input type="text" name="email" placeholder="Email / No. HP" />
              <span className="icon">
                <EmailIcon />
              </span>
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
              />
              <span className="icon" onClick={togglePasswordVisibility}>
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </span>
            </div>
            <button type="submit" className="signin-button" onClick={() => console.log('Button clicked')}>
              Sign In
            </button>
            <div className="options">
              <label>
                <input type="checkbox" /> Keep Me Logged In
              </label>
              <Link to="/forgot-password">Forget Password ?</Link>
            </div>
            <button type="button" className="google-signin-button">
              <span className="google-icon">
                <GoogleIcon />
              </span> Sign In Via Google
            </button>
          </form>
          <p>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
        <div className="signin-image">
          <img src="images/image72.png" alt="Sign In" />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
