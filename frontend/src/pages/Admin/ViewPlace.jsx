import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../css/updatepage.css";
import Navbar3_Components from "../../components/Navbar3_Components";
import SidebarAdmin_Components from "../../components/SidebarAdmin_Components";
import axios from "axios";

const ViewPlace = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    getPlaces();
  }, []);

  const getPlaces = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/place/places"
      );
      // Pastikan respons memiliki struktur yang diharapkan
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
      setPlaces([]); // Berikan nilai default jika terjadi kesalahan
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
                {Array.isArray(places) &&
                  places.map((places) => (
                    <tr key={places.place_id}>
                      <td className="item">
                        <img
                          src={`/images/${places.image_url}`} // Gunakan URL relatif ke gambar
                          alt={places.name}
                          className="product-image"
                        />
                        <p>{places.city}</p>
                        <p>{places.address}</p>
                        <h2>{places.name}</h2>
                        <p>Description : {places.description}</p>
                      </td>
                      <td>
                        <div className="btn-action">
                          <button onClick={() => handleEdit(places.place_id)}>
                            Edit
                          </button>
                          <button onClick={() => handleDelete(places.place_id)}>
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

export default ViewPlace;
