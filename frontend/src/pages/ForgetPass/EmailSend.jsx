import React from "react";
import { useNavigate } from "react-router-dom";
import "../../css/emailsend.css";

const EmailSend = () => {
  const navigate = useNavigate();

  const handleResend = () => {
    // Logika untuk mengirim ulang email
    console.log("Resend Email");
  };

  const handleChangeEmail = () => {
    navigate("/change-email");
  };

  const handleContinue = () => {
    // Logika untuk lanjutkan
    navigate("/create-new-password");
  };

  return (
    <div className="container">
      <div className="email-send-container">
        <h1>Sent Email</h1>
        <p>
          We have sent you email at <strong>{}</strong>, check
          your inbox and follow the instructions to reset your account password
        </p>
        <div className="email-send-actions">
          <p>
            Did not receive the email?{" "}
            <a onClick={handleResend} className="link-text">
              Resent Email
            </a>
          </p>
          <p>
            Wrong email address?{" "}
            <a onClick={handleChangeEmail} className="link-text">
              Change Email Address
            </a>
          </p>
        </div>
        <button onClick={handleContinue} className="continue-button">
          Continue
        </button>
      </div>
    </div>
  );
};

export default EmailSend;
