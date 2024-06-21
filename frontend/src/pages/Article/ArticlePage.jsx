import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar2_Components from "../../components/Navbar2_Components";
import "../../css/articlepage.css";
import Footer_Components from "../../components/Footer_Components";
import Article_Components from "../../components/Article_Components";

const ArticlePage = () => {
  return (
    <div className="container">
      <Navbar2_Components />
      <div className="article-page">
        <section className="article6">
          <div className="content-6">
            <img src="images/frame1.png" alt="photo1" />
          </div>
        </section>

        <div className="cards-section">
          <div className="art-compo1">
            <Article_Components start={1} limit={3} />
          </div>
        </div>

        <section className="article7">
          <div className="line-with-text">
            <span>Formal</span>
          </div>
          <div className="content-7">
            <img src="images/image23.png" alt="" />
            <img src="images/image24.png" alt="" />
            <span>
              <Link to="/article-formal">
                <img src="images/image25.png" alt="" />
              </Link>
            </span>
          </div>
        </section>

        <section className="article8">
          <div className="line-with-text">
            <span>Casual</span>
          </div>
          <div className="content-8">
            <img src="images/image26.png" alt="" />
            <img src="images/image27.png" alt="" />
            <span>
              <Link to="/article-casual">
                <img src="images/image28.png" alt="" />
              </Link>
            </span>
          </div>
        </section>

        <section className="article9">
          <div className="line-with-text">
            <span>Sporty</span>
          </div>
          <div className="content-9">
            <img src="images/image29.png" alt="" />
            <img src="images/image30.png" alt="" />
            <span>
              <Link to="/article-sporty">
                <img src="images/image31.png" alt="" />
              </Link>
            </span>
          </div>
        </section>
      </div>

      <Footer_Components />
    </div>
  );
};

export default ArticlePage;
