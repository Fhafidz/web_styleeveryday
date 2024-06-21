import React from "react";
import Navbar2_Components from "../components/Navbar2_Components";
import "../css/fashion.css";
import Footer_Components from "../components/Footer_Components";
import FashionFilter_Components from "../components/FashionFilter_Components";

const Fashion = () => {
  return (
    <div className="container">
      <Navbar2_Components />

      <section className="fash1">
        <div className="content-1">
          <h1>Explore Your Style!</h1>
        </div>
        <form className="search-bar">
          <input type="text" placeholder="Search..." />
          <button type="submit">Cari</button>
        </form>

        <FashionFilter_Components />
      </section>

      <Footer_Components />
    </div>
  );
};

export default Fashion;
