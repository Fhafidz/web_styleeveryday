import React from "react";
import "../../css/checkout_confirmation.css";
import Navbar2_Components from "../../components/Navbar2_Components";
import Footer_Components from "../../components/Footer_Components";
import { Link } from "react-router-dom";

const Checkout_confirmation = () => {
  return (
    <div className="container">
      <Navbar2_Components />

      <section className="ce-confirm">
        <div className="content-1">
          <Link to="/checkout-payment">
            <button className="back-button">Back</button>
          </Link>

          <h1>Waiting for Payment</h1>
          <p>Please make payment immediately.</p>
          <img src="/images/dana.png" alt="" />
        </div>
        <div className="content-2">
          <h2>Payment Confirmation</h2>
          <p>Please confirmation your payment</p>
          <form>
            <label>
              Name
              <input type="text" name="name" />
            </label>
            <label>
              Your Bank/E-Wallet
              <input type="email" name="email" />
            </label>
            <label>
              Your Bank/E-Wallet Number
              <input type="text" name="number" />
            </label>
            <label>
              Upload proof of payment
              <input type="file" name="paymentProof" accept="image/*" />
            </label>

            <Link to="/checkout2-confirmation">
              <button className="btn-next" type="submit">
                Next
              </button>
            </Link>
          </form>
        </div>
      </section>
      <Footer_Components />
    </div>
  );
};
export default Checkout_confirmation;
