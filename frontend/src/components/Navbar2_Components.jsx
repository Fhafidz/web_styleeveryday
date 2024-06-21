import React from "react";
import "../css/navbar_2.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle"; // Mengimpor ikon dari Material-UI
import { Link } from "react-router-dom";

const Navbar2_Components = () => {
  return (
    <div className="navbar-2">
      <nav>
        <Link to="/">
          <img src="images/logo.png" alt="logo" />
        </Link>
        <ul className="nav-link">
          <li className="link">
            <Link to="/user-home">Home</Link>
          </li>
          <li className="link">
            <Link to="/article-page">Article</Link>
          </li>
          <li className="link">
            <Link to="/fashion-page">Fashion</Link>
          </li>
          <li className="link">
            <Link to="/wardrobe">Wardrobe</Link>
          </li>
          <li className="link">
            <Link to="/place-page">Place</Link>
          </li>
          <li className="link">
            <Link to="/about-us">About Us</Link>
          </li>
        </ul>
        <Link to="/user-profile">
          <div className="img-user">
            <AccountCircleIcon style={{ fontSize: 40, color: "gray" }} />
          </div>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar2_Components;
