import React from "react";
import "../css/navbar_3.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle"; // Mengimpor ikon dari Material-UI
import { Link } from "react-router-dom";

const Navbar3_Components = () => {
  return (
    <div className="navbar-3">
      <nav>
        <Link to="/">
          <img src="images/logo.png" alt="logo" />
        </Link>
        <ul className="nav-link">
          <li className="link">
            <Link to="/">Home</Link>
          </li>
          <li className="link">
            <Link to="/article-page">Article</Link>
          </li>
          <li className="link">
            <Link to="/fashion-page">Fashion</Link>
          </li>
          <li className="link">
            <Link to="/place-page">Place</Link>
          </li>
          <li className="link">
            <Link to="/view-fashion">Update</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar3_Components;
