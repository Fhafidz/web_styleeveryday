import React from "react";
import Navbar2_Components from "../components/Navbar2_Components";
import Footer_Components from "../components/Footer_Components";
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";
import PlaceFilter_Components from "../components/PlaceFilter_Components";
import "../css/placepage.css";

const PlacePage = () => {
  return (
    <div className="container">
      <Navbar2_Components />

      <div className="place-page">
        <section className="place-1">
          <div className="content-5">
            <h1>
              New Place, <span>New Experience!</span>
              <ArrowOutwardOutlinedIcon
                style={{ fontSize: 50, color: "#FEA94F", marginLeft: 10 }}
              />
            </h1>
            <form className="search-bar">
              <input type="text" placeholder="Find Your Own Place..." />
              <button type="submit">Cari</button>
            </form>
          </div>
          <PlaceFilter_Components />
        </section>
      </div>
      
      <Footer_Components />
    </div>
  );
};

export default PlacePage;
