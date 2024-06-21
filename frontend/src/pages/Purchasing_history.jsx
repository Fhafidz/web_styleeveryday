import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/purchasing_history.css";
import Navbar2_Components from "../components/Navbar2_Components";
import axios from "axios";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

const Purchasing_history = () => {
  const name = "Olivia Jones";
  const [purchaseHistory, setPurchaseHistory] = useState([]);

  const fetchPurchaseHistory = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/item/items");
      // Pastikan response.data.payload.datas adalah array
      if (Array.isArray(response.data.payload.datas)) {
        // Filter produk dengan ID 1, 2, dan 3
        const selectedIds = [51, 52, 54];
        const filteredItems = response.data.payload.datas.filter((item) =>
          selectedIds.includes(item.id_item)
        );
        // Set default quantity to 1 and status to "delivery"
        const itemsWithQuantityAndStatus = filteredItems.map((item) => ({
          ...item,
          quantity: 1,
          status: "delivery",
        }));
        setPurchaseHistory(itemsWithQuantityAndStatus);
      } else {
        console.error(
          "Response data payload.datas is not an array:",
          response.data.payload.datas
        );
      }
    } catch (error) {
      console.error("Error fetching checkout data:", error);
    }
  };

  useEffect(() => {
    fetchPurchaseHistory();
  }, []);

  return (
    <div className="container">
      <Navbar2_Components />
      <div className="purchistory">
        <div className="sidebar">
          <div className="profile-pic">
            <AccountCircleIcon style={{ fontSize: 200, color: "gray" }} />
          </div>
          <h2>{name}</h2>
          <ul>
            <li>
              <Link to="/user-profile">
                <PersonOutlineOutlinedIcon
                  style={{ fontSize: 30, color: "white", marginRight: 10 }}
                />
                My Profile
              </Link>
            </li>
            <li>
              <Link to="/purchasing-history">
                <LocalMallOutlinedIcon
                  style={{ fontSize: 30, color: "white", marginRight: 10 }}
                />
                Purchase History
              </Link>
            </li>
          </ul>
          <Link to="/">
            <button className="logout-button">Log Out</button>
          </Link>
        </div>
        <div className="content">
          <h1>My Purchase History</h1>
          <div className="purchase-list">
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {purchaseHistory.map((purchase) => (
                  <tr key={purchase.id}>
                    <td className="item">
                      <img
                        src={`/images/${purchase.image_url}`}
                        alt={purchase.name_item}
                        className="product-image"
                      />
                      <h2>{purchase.name_item}</h2>
                      <p>Rp {purchase.price_item.toLocaleString()}</p>
                    </td>
                    <td>{purchase.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchasing_history;
