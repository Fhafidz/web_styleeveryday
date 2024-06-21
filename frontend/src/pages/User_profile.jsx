import React, { useState } from "react";
import Navbar2_Components from "../components/Navbar2_Components";
import { Link } from "react-router-dom";
import "../css/userprofile.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

const User_profile = () => {
  const [name, setName] = useState("Olivia Jones");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("olivia.jones@example.com");
  const [address, setAddress] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Simpan data ke server atau state management
  };

  return (
    <div className="container">
      <Navbar2_Components />

      <div className="profile-container">
        <div className="sidebar">
          <div className="profile-pic">
            <AccountCircleIcon style={{ fontSize: 200, color: "gray" }} />
          </div>
          <h2>{name}</h2>
          <ul>
            <Link to="/user-profile">
              <li>
                <PersonOutlineOutlinedIcon
                  style={{ fontSize: 30, color: "white", marginRight: 10 }}
                />
                My Profile
              </li>
            </Link>
            <Link to="/purchasing-history">
              <li>
                <LocalMallOutlinedIcon
                  style={{ fontSize: 30, color: "white", marginRight: 10 }}
                />
                Purchase History
              </li>
            </Link>
          </ul>
          <Link to="/">
            <button className="logout-button">Log Out</button>
          </Link>
        </div>
        <div className="profile-details">
          <h1>Hi, {name}!</h1>
          <p>Manage Your Profile Information.</p>
          <div className="profile-form">
            <div className="profile-pic-large">
              <AccountCircleIcon style={{ fontSize: 200, color: "gray" }} />
              <button className="choose-photo-button">Choose Photo</button>
              <button className="delete-photo-button">Delete Photo</button>
            </div>

            <div className="form-input">
              <form>
                <label>Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={!isEditing}
                />
                <label>Phone Number</label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  disabled={!isEditing}
                />
                <label>Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={!isEditing}
                />
                <label>Address</label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  disabled={!isEditing}
                />
                <div className="buttons">
                  <button
                    type="button"
                    onClick={handleEdit}
                    className="edit-button"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={handleSave}
                    className="save-button"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User_profile;
