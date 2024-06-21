import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "../css/fashion_filter.css";

const Fashion_Components = ({ start = 0, limit }) => {
  const [items, setItems] = useState([]);
  const [favorites, setFavorites] = useState(new Set());

  useEffect(() => {
    getItems();
  }, []);

  const getItems = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/item/items");
      if (response.data && Array.isArray(response.data)) {
        setItems(response.data);
      } else {
        console.error("Unexpected response format:", response.data);
        setItems([]);
      }
    } catch (error) {
      console.error("Error fetching items:", error);
      setItems([]); // Set default value if there's an error
    }
  };

  const startIndex = Number(start) || 0;
  const limitIndex = limit ? startIndex + Number(limit) : items.length;
  const itemsToShow = items.slice(startIndex, limitIndex);

  const toggleFavorite = (id) => {
    setFavorites((prevFavorites) => {
      const newFavorites = new Set(prevFavorites);
      if (newFavorites.has(id)) {
        newFavorites.delete(id);
      } else {
        newFavorites.add(id);
      }
      return newFavorites;
    });
  };

  return (
    <div className="container">
      <div className="fashion-container">
        {itemsToShow.map((fashion) => (
          <div className="fashion-card" key={fashion.Item_id}>
            <Link
              to={`/detail-fashion/${fashion.Item_id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <img src={`/images/${fashion.image_url}`} alt={fashion.name} />
            </Link>
            <h3>
              {fashion.name}
              {favorites.has(fashion.Item_id) ? (
                <FavoriteIcon
                  style={{ fontSize: 20, color: "red", marginLeft: 5 }}
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent navigation
                    e.preventDefault(); // Prevent navigation
                    toggleFavorite(fashion.Item_id);
                  }}
                />
              ) : (
                <FavoriteBorderIcon
                  style={{ fontSize: 20, color: "#000", marginLeft: 5 }}
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent navigation
                    e.preventDefault(); // Prevent navigation
                    toggleFavorite(fashion.Item_id);
                  }}
                />
              )}
            </h3>
            <p>Rp {parseInt(fashion.price).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fashion_Components;
