import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../css/article3.css";

const Article3_Components = ({ start, limit }) => {
  const [articles, setItems] = useState([]);

  useEffect(() => {
    getArticle();
  }, []);

  const getArticle = async () => {
   try {
     const response = await axios.get(
       "http://localhost:8000/api/articles/article"
     );
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
  const limitIndex = limit ? startIndex + Number(limit) : articles.length;
  const itemsToShow = articles.slice(startIndex, limitIndex);

  return (
    <div className="container">
      <div className="articles3-container">
        {itemsToShow.map((art) => (
          <Link
            to={`/detail-article/${art.article_id}`}
            style={{ textDecoration: "none", color: "inherit" }}
            key={art.article_id} // Menyesuaikan dengan properti article_id
          >
            <div className="article-card">
              <img src={`/images/${art.image_url}`} alt={art.title} />
              <div className="article-content">
                <h3 className="article-category">{art.category}</h3>
                <h2 className="article-title">{art.title}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Article3_Components;
