import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar3_Components from "../../components/Navbar3_Components";
import SidebarAdmin_Components from "../../components/SidebarAdmin_Components";
import "../../css/addproduct.css";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name_item: "",
    price_item: "",
    category_item: "",
    stock_item: "", // Tambahkan stock_item ke dalam state
    description_item: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Konversi harga dan stok menjadi tipe data integer
    const { name_item, category_item, description_item } = formData;
    const price_item = parseInt(formData.price_item);
    const stock_item = parseInt(formData.stock_item);

    try {
      const response = await axios.post(
        "http://localhost:8080/api/items/createitem",
        { name_item, price_item, category_item, stock_item, description_item }, // Mengirimkan data dengan harga dan stok dalam tipe data integer
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      alert("Produk berhasil ditambahkan!");
      navigate("/products");
    } catch (error) {
      console.error("Error adding product:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        alert(`Gagal menambahkan produk: ${error.response.data.message}`);
      } else {
        alert("Gagal menambahkan produk");
      }
    }
  };

  return (
    <div className="container">
      <Navbar3_Components />
      <div className="add-product">
        <div className="side">
          <SidebarAdmin_Components />
        </div>
        <div className="content">
          <h1>Tambah Produk Baru</h1>
          <form onSubmit={handleSubmit}>
            <label>
              Judul Produk
              <input
                type="text"
                name="name_item"
                value={formData.name_item}
                onChange={handleChange}
              />
            </label>
            <label>
              Harga
              <input
                type="text"
                name="price_item"
                value={formData.price_item}
                onChange={handleChange}
              />
            </label>
            <label>
              Kategori
              <input
                type="text"
                name="category_item"
                value={formData.category_item}
                onChange={handleChange}
              />
            </label>
            <label>
              Stock Produk
              <input
                type="text"
                name="stock_item"
                value={formData.stock_item}
                onChange={handleChange}
              />
            </label>
            <label>
              Deskripsi Produk
              <input
                type="text"
                name="description_item"
                value={formData.description_item}
                onChange={handleChange}
              />
            </label>
            <div className="button-group">
              <button type="submit">Simpan</button>
              <button type="button" onClick={() => navigate("/products")}>
                Batal
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
