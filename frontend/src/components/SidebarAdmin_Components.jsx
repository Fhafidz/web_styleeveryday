import React from 'react'
import { Link } from "react-router-dom";
import "../css/sidebarAdmin.css";

const SidebarAdmin_Components = () => {
  return (
    <div className="container">
      <div className="sidebar">
        <ul>
          <li>
            <Link to="/view-fashion">Fashion</Link>
          </li>
          <li>
            <Link to="/view-article">Article</Link>
          </li>
          <li>
            <Link to="/view-place">Place</Link>
          </li>
          <li>
            <Link to="/view-sales">Sales</Link>
          </li>
        </ul>
        <Link to="/">
          <button className="logout-button">Log Out</button>
        </Link>
      </div>
    </div>
  );
}

export default SidebarAdmin_Components;
