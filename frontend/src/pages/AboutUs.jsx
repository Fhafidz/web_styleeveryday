import React from "react";
import Navbar2_Components from "../components/Navbar2_Components";
import "../css/aboutus.css";
import Footer_Components from "../components/Footer_Components";

const AboutUs = () => {
  return (
    <div className="container">
      <Navbar2_Components />

      <section className="about9">
        <h1>
          Let’s Introduce <span>Our Team!</span>
        </h1>
        <div className="team-member-container">
          <div className="team-member">
            <div className="member-1">
              <img src="images/pricil.png" alt="" />
              <div className="member-text">
                <h3>Pricillia Putri</h3>
                <p>Project Manager</p>
              </div>
            </div>
            <div className="member-2">
              <img src="images/norman.png" alt="" />
              <div className="member-text">
                <h3>Norman </h3>
                <p>Programmer</p>
              </div>
            </div>
            <div className="member-3">
              <img src="images/budi.png" alt="" />
              <div className="member-text">
                <h3>Budiyana</h3>
                <p>UI/UX Designer</p>
              </div>
            </div>
            <div className="member-4">
              <img src="images/fikri.png" alt="" />
              <div className="member-text">
                <h3>Fikri Kurnia Pradana</h3>
                <p>Programmer</p>
              </div>
            </div>
            <div className="member-5">
              <img src="images/stefany.png" alt="" />
              <div className="member-text">
                <h3>Stefany</h3>
                <p>UI/UX Designer</p>
              </div>
            </div>
            <div className="member-6">
              <img src="images/fariz.png" alt="" />
              <div className="member-text">
                <h3>Fariz Hafidz</h3>
                <p>Programmer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer_Components />
    </div>
  );
};

export default AboutUs;
