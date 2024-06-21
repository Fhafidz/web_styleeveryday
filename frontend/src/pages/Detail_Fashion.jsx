import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar2_Components from "../components/Navbar2_Components";
import Footer_Components from "../components/Footer_Components";
import { fashion } from "../Data_Fashion";
import "../css/detail_fashion.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Detail_Fashion = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [size, setSize] = useState("");
  const [loved, setLoved] = useState(false);

  useEffect(() => {
    // Mencari item fashion berdasarkan ID
    const foundItem = fashion.find((f) => f.id.toString() === id);
    setItem(foundItem);
  }, [id]);

  const handleSizeChange = (newSize) => {
    setSize(newSize);
  };

  const toggleLove = () => {
    setLoved(!loved);
  };

  if (!item) return <div>Loading...</div>;

  return (
    <div className="container">
      <Navbar2_Components />

      <div className="defash1">
        <div className="detail-fashion">
          <div className="image">
            <img src={item.image} alt={item.title} />
          </div>
          <div className="info">
            <h3>{item.category}</h3>
            <h1>{item.title}</h1>
            <h2>Rp. {item.price}</h2>
            <p>{item.description}</p>
            <div className="size-selector">
              <h4>Size</h4>
              {["S", "M", "L", "XL"].map((sz) => (
                <button
                  key={sz}
                  onClick={() => handleSizeChange(sz)}
                  className={`size-button ${size === sz ? "active" : ""}`}
                >
                  {sz}
                </button>
              ))}
            </div>
            <a href="/checkout-info">
              <button className="checkout-button">Checkout</button>
            </a>
            {loved ? (
              <FavoriteIcon
                style={{ fontSize: 20, color: "red", marginLeft: 5 }}
                onClick={(e) => {
                  e.preventDefault(); // Mencegah navigasi
                  toggleLove();
                }}
              />
            ) : (
              <FavoriteBorderIcon
                style={{ fontSize: 20, color: "#000", marginLeft: 5 }}
                onClick={(e) => {
                  e.preventDefault(); // Mencegah navigasi
                  toggleLove();
                }}
              />
            )}
          </div>
        </div>
      </div>

      <Footer_Components />
    </div>
  );
};

export default Detail_Fashion;
