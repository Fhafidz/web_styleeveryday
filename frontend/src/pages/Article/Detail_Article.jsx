import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar2_Components from "../../components/Navbar2_Components";
import Footer_Components from "../../components/Footer_Components";
import "../../css/detailarticle.css";
import Article3_Components from "../../components/Article3_Components";

const Detail_Article = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/articles/articles/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setItem(data);
      } catch (error) {
        console.error('Failed to fetch article:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!item) return <div>Article not found.</div>;

  return (
    <div className="container">
      <Navbar2_Components />

      <div className="detail-article">
        <h1>{item.title}</h1>
        <p className="date">Published on: {item.date}</p>
        <div className="image">
          <img src={item.image} alt={item.title} />
        </div>
        <p className="desc">{item.description}</p>
        <section className="detfat7">
          <div className="line-with-text">
            <span>Related Reading</span>
          </div>
          <div className="art-compo4">
            <Article3_Components start={0} limit={3} />
          </div>
        </section>
      </div>

      <Footer_Components />
    </div>
  );
};

export default Detail_Article;
