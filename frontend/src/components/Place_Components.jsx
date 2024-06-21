import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";
import "../css/place_filter.css";

const Place_Components = ({ start, limit }) => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    getPlaces();
  }, []);

  const getPlaces = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/place/places"
      );
      if (
        response.data &&
        response.data.payload &&
        Array.isArray(response.data.payload.data)
      ) {
        setPlaces(response.data.payload.data);
      } else {
        console.error("Unexpected response format:", response.data);
        setPlaces([]);
      }
    } catch (error) {
      console.error("Error fetching places:", error);
      setPlaces([]);
    }
  };

  const startIndex = Number(start) || 0;
  const limitIndex = Number(limit) || places.length;
  const placesToShow = places.slice(startIndex, startIndex + limitIndex);

  return (
    <div className="container">
      <div className="places-container">
        {placesToShow.map((place) => (
          <Link
            to={`/detail-place/${place.place_id}`}
            style={{ textDecoration: "none", color: "inherit" }}
            key={place.place_id}
          >
            <div className="place-card">
              <img src={`/images/${place.image_url}`} alt={place.name} />
              <h3 style={{ display: "flex", alignItems: "center" }}>
                {place.name}
                <ArrowOutwardOutlinedIcon
                  style={{
                    fontSize: 20,
                    color: "#18518a",
                    marginLeft: 5,
                  }}
                />
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Place_Components;
