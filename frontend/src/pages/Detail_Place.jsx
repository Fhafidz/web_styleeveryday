import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar2_Components from "../components/Navbar2_Components";
import "../css/detail_place.css";
import Footer_Components from "../components/Footer_Components";

const Detail_Place = () => {
  const { id } = useParams();
  const [place, setPlace] = useState(null);

  useEffect(() => {
    getPlaceDetails();
  }, [id]);

  const getPlaceDetails = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/place/place/${id}`
      );
      if (response.data && response.data.payload) {
        setPlace(response.data.payload);
      } else {
        console.error("Unexpected response format:", response.data);
        setPlace(null);
      }
    } catch (error) {
      console.error("Error fetching place details:", error);
      setPlace(null);
    }
  };

  if (!place) return <div>Loading...</div>;

  return (
    <div className="container">
      <Navbar2_Components />

      <div className="deplace">
        <img src={`/images/${place.image_url}`} alt={place.name_place} />
        <h1>{place.name_place}</h1>
        {/* Adjust other properties as needed */}
        <div className="rating">
          <span>★★★★☆</span>
          <span className="recommended">| Recommended</span>
        </div>
        <p>{place.description}</p>
        <a href={place.mapLink} className="button">
          Go to Maps
        </a>
      </div>

      <Footer_Components />
    </div>
  );
};

export default Detail_Place;
