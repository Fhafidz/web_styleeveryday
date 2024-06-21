import React from "react";
import "../../css/checkout2_confirmation.css";

const Checkout2_confirmation = () => {
  return (
    <div className="container">
      <div className="ce2">
        <h1 className="title">Well Done!</h1>
        <p className="description">Your order will be processed immediately</p>
        <a href="/purchasing-history">
          <button className="payment-button">Go to Purchase History</button>
        </a>
      </div>
    </div>
  );
};

export default Checkout2_confirmation;
