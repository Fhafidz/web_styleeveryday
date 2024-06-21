import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../css/article.css"; // Anda mungkin perlu membuat file CSS ini

const Article_Components = ({ start , limit }) => {
  const [articles, setItems] = useState([]);

  useEffect(() => {
    getArticle();
  }, []);

  const getArticle = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/articles/article");
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
      <div className="articles-container">
        {articles.length === 0 ? (
          <p>Loading...</p> // Tampilkan pesan loading ketika data masih dimuat
        ) : (
          itemsToShow.map((article, index) => (
            <Link
              to={`/detail-article/${article.article_id}`}
              style={{ textDecoration: "none", color: "inherit" }}
              key={index} // Gunakan indeks sebagai properti key
            >
              <div className="article-card" key={index}>
                <img
                  src={`/images/${article.image_url}`}
                  alt={article.title}
                />
                <div className="article-content">
                  <h3 className="article-category">
                    {article.category}
                  </h3>
                  <h2 className="article-title">{article.title}</h2>
                  <p className="article-description">
                    {article.description}
                  </p>
                  <p className="article-date">{article.created_at}</p>
                  <button className="more-button">More</button>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Article_Components;
