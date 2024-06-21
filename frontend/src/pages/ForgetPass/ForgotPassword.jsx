import React from "react";
import { useNavigate } from "react-router-dom";
import "../../css/forgotpassword.css";
import EmailIcon from "@mui/icons-material/Email";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/email-send");
  };

  return (
    <div className="container">
      <div className="forpass-container">
        <div className="forgot-password-card">
          <h1>Forgot Password</h1>
          <p>
            Enter the email address you used to create the account, and we will
            email instructions to reset your password.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input type="email" placeholder="Enter Your Email" required />
              <span className="input-icon"><EmailIcon /></span>
            </div>
            <button type="submit">Send Email</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
