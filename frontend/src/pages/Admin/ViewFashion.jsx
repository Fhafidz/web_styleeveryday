import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../css/updatepage.css";
import Navbar3_Components from "../../components/Navbar3_Components";
import SidebarAdmin_Components from "../../components/SidebarAdmin_Components";
import axios from "axios";

const ViewFashion = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems();
  }, []);

  const getItems = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/item/items");
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
                {Array.isArray(items) &&
                  items.map((fashion) => (
                    <tr key={fashion.Item_id}>
                      <td className="item">
                        <img
                          src={`/images/${fashion.image_url}`} // Gunakan URL relatif ke gambar
                          alt={fashion.name}
                          className="product-image"
                        />
                        <p>{fashion.type}</p>
                        <h2>{fashion.name}</h2>
                        <h2>
                          Rp {parseInt(fashion.price).toLocaleString()}
                        </h2>
                        <p>Description : {fashion.description}</p>
                        <p>Stock : {fashion.stock}</p>
                      </td>
                      <td>
                        <div className="btn-action">
                          <button onClick={() => handleEdit(fashion.id)}>
                            Edit
                          </button>
                          <button onClick={() => handleDelete(fashion.id)}>
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

export default ViewFashion;
