import React from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";

const Navbar_Components = () => {
  return (
    <div className="navbar-1">
      <nav>
        <Link to="/">
          <img src="images/logo.png" alt="logo" />
        </Link>
        <ul className="nav-link">
          <li className="link">
            <Link to="/">Home</Link>
          </li>
          <li className="link">
            <Link to="/signin">Article</Link>
          </li>
          <li className="link">
            <Link to="/signin">Fashion</Link>
          </li>
          <li className="link">
            <Link to="/signin">Wardrobe</Link>
          </li>
          <li className="link">
            <Link to="/signin">Place</Link>
          </li>
          <li className="link">
            <Link to="/signin">About Us</Link>
          </li>
        </ul>
        <div className="btn-signin">
          <Link to="/signin">
            <button>Sign In</button>
          </Link>
        </div>
        <div className="btn-signup">
          <Link to="/signup">
            <button>Sign Up</button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar_Components;
