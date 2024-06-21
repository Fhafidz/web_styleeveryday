import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/verifyemail.css";

const VerifyEmail = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState(["", "", "", ""]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]$/.test(value) || value === "") {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
    }
  };

  const handleKeyUp = (e, index) => {
    if (e.target.value && index < code.length - 1) {
      document.getElementById(`code-input-${index + 1}`).focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      document.getElementById(`code-input-${index - 1}`).focus();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const verificationCode = code.join("");
    // Lakukan verifikasi kode di sini
    navigate("/user-home");
  };

  return (
    <div className="container">
      <div className="verification-container">
        <h1>Verification Number</h1>
        <p>
          Enter Your Verification Code that we sent you through your email or
          phone number
        </p>
        <form onSubmit={handleSubmit} className="verification-form">
          <div className="input-group">
            {code.map((digit, index) => (
              <input
                key={index}
                id={`code-input-${index}`}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(e, index)}
                onKeyUp={(e) => handleKeyUp(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="verification-input"
                required
              />
            ))}
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerifyEmail;
