import React from "react";
import Navbar2_Components from "../components/Navbar2_Components";
import "../css/fashionpage.css";
import Footer_Components from "../components/Footer_Components";
import Fashion_Components from "../components/Fashion_Components";

const FashionPage = () => {
  return (
    <div className="container">
      <Navbar2_Components />

      <section className="fashion1">
        <div className="content-6">
          <img src="images/frame5.png" alt="photo1" />
        </div>
      </section>

      <section className="fashion2">
        <div className="content-3">
          <div className="second">
            <Fashion_Components start={0} limit={3} />
          </div>
          <div className="main">
            <a href="/">
              <img src="images/image69.png" alt="photo1" />
            </a>
          </div>
        </div>
      </section>

      <section className="fashion3">
        <div className="content-2">
          <div className="main">
            <a href="/">
              <img src="images/image74.png" alt="photo1" />
            </a>
          </div>
          <div className="second">
            <Fashion_Components start={3} limit={3} />
          </div>
        </div>
      </section>

      <section className="fashion4">
        <h1>Shop by Style: Find Your Perfect Look!</h1>
        <div className="main">
          <Fashion_Components start={0} limit={4} />
        </div>
        <div className="btn">
          <a href="/fashion">
            <button>More</button>
          </a>
        </div>
      </section>

      <Footer_Components />
    </div>
  );
};

export default FashionPage;
