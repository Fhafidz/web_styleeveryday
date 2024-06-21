import React from "react";
import "../css/footer.css";
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const FooterComponents = () => {
  return (
    <div>
      <footer>
        <div className="content-6">
          <div className="left">
            <h1>StyleEveryday.</h1>
            <div className="instagram">
              <FontAwesomeIcon
                icon={faInstagram}
                style={{ fontSize: 20, color: "#ffff" }}
              />
              <p>@style.everyday</p>
            </div>
          </div>
          <div className="right">
            <h2>About Us</h2>
            <ArrowOutwardOutlinedIcon
              style={{ fontSize: 40, color: "#ffff" }}
            />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterComponents;
