import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../css/updatepage.css";
import Navbar3_Components from "../../components/Navbar3_Components";
import SidebarAdmin_Components from "../../components/SidebarAdmin_Components";
import axios from "axios";

const ViewArticle = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles();
  }, []);

  const getArticles = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/articles/article"
      );
      if (response.data && Array.isArray(response.data)) {
        setArticles(response.data);
      } else {
        console.error("Unexpected response format:", response.data);
        setArticles([]);
      }
    } catch (error) {
      console.error("Error fetching items:", error);
      setArticles([]); // Set default value if there's an error
    }
  };

  const handleDelete = async (itemId) => {
    // Implementasi fungsi delete di sini
  };

  const handleEdit = (itemId) => {
    // Implementasi fungsi edit di sini
  };

  return (
    <div className="container">
      <Navbar3_Components />
      <div className="update">
        <div className="side">
          <SidebarAdmin_Components />
        </div>
        <div className="content">
          <div className="btn-action">
            <Link to="/add-product">
              <button>Add Product</button>
            </Link>
          </div>
          <div className="view-data">
            <table>
              <tbody>
                {Array.isArray(articles) &&
                  articles.map((article) => (
                    <tr key={article.article_id}>
                      <td className="item">
                        <img
                          src={`/images/${article.image_url}`} // Gunakan URL relatif ke gambar
                          alt={article.title}
                          className="product-image"
                        />
                        <p>{article.category}</p>
                        <h2>{article.title}</h2>
                        <p>Description : {article.description}</p>
                      </td>
                      <td>
                        <div className="btn-action">
                          <button
                            onClick={() => handleEdit(article.article_id)}
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(article.article_id)}
                          >
                            Delete
                          </button>
                        </div>
                      </td>
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

export default ViewArticle;
