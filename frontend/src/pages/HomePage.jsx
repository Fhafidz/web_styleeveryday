import React from "react";
import { Link } from "react-router-dom";
import "../css/homepage.css";
import Navbar_Components from "../components/Navbar_Components";
import FooterComponents from "../components/Footer_Components";
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";
import Place_Components from "../components/Place_Components";
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "images/frame6.png" },
  { url: "images/frame7.png" },
  { url: "images/frame8.png" },
];

const HomePage = () => {
  return (
    <div className="container">
      <Navbar_Components />

      <section className="home1">
        <div>
          <SimpleImageSlider
            width={1349}
            height={600}
            images={images}
            autoPlay={true}
            slideDuration={3}
            loop={true}
            autoPlayDelay={3}
          />
        </div>
      </section>

      <section className="home2">
        <div className="content-2">
          <div className="formal">
            <div className="main">
              <Link to="/signin">
                <img src="images/image75.png" alt="photo1" />
              </Link>
            </div>
            <div className="second">
              <img src="images/image3.png" alt="photo1" />
              <img src="images/image4.png" alt="photo1" />
              <img src="images/image5.png" alt="photo1" />
            </div>
          </div>
        </div>
      </section>

      <section className="home3">
        <div className="content-3">
          <div className="casual">
            <div className="second">
              <img src="images/image6.png" alt="photo1" />
              <img src="images/image7.png" alt="photo1" />
              <img src="images/image8.png" alt="photo1" />
            </div>
            <div className="main">
              <Link to="/signin">
                <img src="images/image76.png" alt="photo1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="home4">
        <div className="content-4">
          <div className="sporty">
            <div className="main">
              <Link to="/signin">
                <img src="images/image77.png" alt="photo1" />
              </Link>
            </div>
            <div className="second">
              <img src="images/image11.png" alt="photo1" />
              <img src="images/image12.png" alt="photo1" />
              <img src="images/image13.png" alt="photo1" />
            </div>
          </div>
        </div>
      </section>

      <section className="home5">
        <div className="content-5">
          <h1>
            New Place, <span>New Experience!</span>
            <ArrowOutwardOutlinedIcon
              style={{ fontSize: 50, color: "#FEA94F", marginLeft: 10 }}
            />
          </h1>
          <Place_Components start={5} limit={6} />
        </div>
      </section>

      <FooterComponents />
    </div>
  );
};

export default HomePage;
