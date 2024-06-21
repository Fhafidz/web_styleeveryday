import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "../css/fashion_filter.css";

const FashionFilterComponents = () => {
  const [items, setItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
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
  };;

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

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

  const filteredItems = items.filter(
    (item) =>
      selectedCategory === "All" || item.type === selectedCategory
  );

  return (
    <div className="container">
      <div className="category-buttons">
        <button
          className={selectedCategory === "All" ? "active" : ""}
          onClick={() => handleCategoryChange("All")}
        >
          All
        </button>
        <button
          className={selectedCategory === "Formal" ? "active" : ""}
          onClick={() => handleCategoryChange("Formal")}
        >
          Formal
        </button>
        <button
          className={selectedCategory === "Casual" ? "active" : ""}
          onClick={() => handleCategoryChange("Casual")}
        >
          Casual
        </button>
        <button
          className={selectedCategory === "Sporty" ? "active" : ""}
          onClick={() => handleCategoryChange("Sport")}
        >
          Sporty
        </button>
      </div>

      <div className="fashion-container">
        {filteredItems.map((fashion) => (
          <div className="fashion-card" key={fashion.Item_id}>
            <Link
              to={`/detail-fashion/${fashion.Item_id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <img
                src={`/images/${fashion.image_url}`}
                alt={fashion.name}
              />
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

export default FashionFilterComponents;
