import React from 'react'
import { Link } from 'react-router-dom';
import PlaceFilter_Components from '../components/PlaceFilter_Components';
import Place_Components from '../components/Place_Components';
import FashionFilterComponents from '../components/FashionFilter_Components';
import FashionComponents from '../components/Fashion_Components';
import Article_Components from '../components/Article_Components';
import Article2_Components from '../components/Article2_Components';
import Article3_Components from '../components/Article3_Components';


const View = () => {
  return (
    <div className="contianer">
      <div className="place_filter">
        <h1>PLACE FILTER</h1>
        <PlaceFilter_Components />
      </div>

      <div className="place">
        <h1>PLACE</h1>
        <Place_Components start={5} limit={2} />
      </div>

      <div className="fashion_filter">
        <h1>FASHION FILTER</h1>
        <FashionFilterComponents />
      </div>

      <div className="fashion">
        <h1>FASHION </h1>
        <FashionComponents start={5} limit={2} />
      </div>

      <div className="article">
        <h1>ARTICLE </h1>
        <Article_Components start={5} limit={2} />
      </div>

      <div className="article2">
        <h1>ARTICLE2 </h1>
        <Article2_Components start={5} limit={2} />
      </div>

      <div className="article3">
        <h1>ARTICLE3 </h1>
        <Article3_Components start={5} limit={2} />
      </div>
    </div>
  );
}

export default View;
