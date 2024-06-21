import React, { useState } from "react";
import Navbar2_Components from "../components/Navbar2_Components";
import Footer_Components from "../components/Footer_Components";
import "../css/mix_match.css";

const MixMatch = () => {
  const [selectedClothes, setSelectedClothes] = useState(null);
  const [selectedTrousers, setSelectedTrousers] = useState(null);
  const [selectedShoes, setSelectedShoes] = useState(null);

  const clothes = [
    { id: 1, src: "images/image80.png" } /*Data dummy*/,
    { id: 2, src: "images/image8.png" } /*Data dummy*/,
    { id: 3, src: "images/image82.png" } /*Data dummy*/,
  ];

  const trousers = [
    { id: 1, src: "images/image88.png" } /*Data dummy*/,
    { id: 2, src: "images/image84.png" } /*Data dummy*/,
    { id: 3, src: "images/image85.png" } /*Data dummy*/,
  ];

  const shoes = [
    { id: 1, src: "images/image81.png" } /*Data dummy*/,
    { id: 2, src: "images/image83.png" } /*Data dummy*/,
    { id: 3, src: "images/image89.png" } /*Data dummy*/,
  ];

  return (
    <div className="container">
      <Navbar2_Components />
      <div className="mix-match-container">
        <div className="selected-items">
          <div className="selected-item">
            {selectedClothes && (
              <img src={selectedClothes.src} alt="Selected Clothes" />
            )}
          </div>
          <div className="selected-item">
            {selectedTrousers && (
              <img src={selectedTrousers.src} alt="Selected Trousers" />
            )}
          </div>
          <div className="selected-item">
            {selectedShoes && (
              <img src={selectedShoes.src} alt="Selected Shoes" />
            )}
          </div>
          <a href="/checkout-info">
            <button className="checkout-button">Checkout All</button>
          </a>
        </div>
        <div className="items">
          <div className="category">
            <h3>Clothes</h3>
            <div className="items-list">
              {clothes.map((item) => (
                <img
                  key={item.id}
                  src={item.src}
                  alt="Clothes"
                  onClick={() => setSelectedClothes(item)}
                />
              ))}
            </div>
          </div>
          <div className="category">
            <h3>Trousers</h3>
            <div className="items-list">
              {trousers.map((item) => (
                <img
                  key={item.id}
                  src={item.src}
                  alt="Trousers"
                  onClick={() => setSelectedTrousers(item)}
                />
              ))}
            </div>
          </div>
          <div className="category">
            <h3>Shoes</h3>
            <div className="items-list">
              {shoes.map((item) => (
                <img
                  key={item.id}
                  src={item.src}
                  alt="Shoes"
                  onClick={() => setSelectedShoes(item)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer_Components />
    </div>
  );
};

export default MixMatch;
