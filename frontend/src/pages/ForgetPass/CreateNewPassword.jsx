import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/createnewpass.css";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const CreateNewPassword = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/reset-successful");
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container">
      <div className="createnewpass-container">
        <div className="create-new-password-card">
          <h1>Create New Password</h1>
          <p>
            Enter the email address you used to create the account, and we will
            email instructions to reset your password.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
              />
              <span className="input-icon" onClick={togglePasswordVisibility}>
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </span>
            </div>
            <div className="input-group">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Confirm Password"
                required
              />
              <span className="input-icon" onClick={togglePasswordVisibility}>
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </span>
            </div>
            <button type="submit">Reset Password</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateNewPassword;
