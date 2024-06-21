import React from "react";
import { useNavigate } from "react-router-dom";
import "../../css/resetsuccess.css";

const ResetSuccessful = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/signin");
  };

  return (
    <div className="container">
      <div className="reset-success">
        <h1>Your Password Has Been Reset</h1>
        <button onClick={handleSignIn}>Continue</button>
      </div>
    </div>
  );
};

export default ResetSuccessful;
