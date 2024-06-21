import React from "react";
import Navbar2_Components from "../../components/Navbar2_Components";
import "../../css/articlesporty.css";
import Footer_Components from "../../components/Footer_Components";
import Fashion_Components from "../../components/Fashion_Components";
import Place_Components from "../../components/Place_Components";
import { article } from "../../Data_Article";
import Article_Components from "../../components/Article_Components";
import Article2_Components from "../../components/Article2_Components";
import Article3_Components from "../../components/Article3_Components";

const Article_Sporty = () => {
  // Asumsi bahwa 'article' adalah array dan kita menggunakan artikel pertama
  const art = article[0];

  return (
    <div className="container">
      <Navbar2_Components />

      <div className="art-sporty">
        <section className="atsporty6">
          <div className="content-6">
            <img src="images/frame4.png" alt="photo1" />
          </div>
        </section>

        <div className="cards-section">
          <div className="art-compo1">
            <Article2_Components start={16} limit={1} />
          </div>
          <div className="art-compo2">
            <Article_Components start={17} limit={1} />
          </div>
          <div className="art-compo3">
            <Article2_Components start={18} limit={1} />
          </div>
        </div>

        <section className="atsporty7">
          <div className="line-with-text">
            <span>Latest</span>
          </div>
          <div className="art-compo4">
            <Article3_Components start={19} limit={5} />
          </div>
        </section>

        <section className="atsporty8">
          <h1>Outfit Recommendation</h1>
          <div className="fash-compo">
            <Fashion_Components start={10} limit={4} />
          </div>
        </section>

        <section className="atsporty9">
          <h1>You might like to visit</h1>
          <Place_Components start={10} limit={3} />
        </section>
      </div>

      <Footer_Components />
    </div>
  );
};

export default Article_Sporty;
