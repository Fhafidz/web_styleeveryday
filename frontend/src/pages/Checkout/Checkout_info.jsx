import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar2_Components from "../../components/Navbar2_Components";
import Footer_Components from "../../components/Footer_Components";
import axios from "axios";
import "../../css/checkout_info.css";

const Checkout_info = () => {
  const [items, setItems] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    postcode: "",
  });

  const fetchCheckoutData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/item/items");
      // Filter produk dengan ID 1, 2, dan 3
      const selectedIds = [51,52, 54];
      const filteredItems = response.data.payload.datas.filter((item) =>
        selectedIds.includes(item.id_item)
      );
      // Set default quantity to 1
      const itemsWithQuantity = filteredItems.map((item) => ({
        ...item,
        quantity: 1,
      }));
      setItems(itemsWithQuantity);
    } catch (error) {
      console.error("Error fetching checkout data:", error);
    }
  };

  useEffect(() => {
    fetchCheckoutData();
  }, []);

  const handleQuantityChange = (id, delta) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id_item === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lakukan validasi formulir di sini sebelum melanjutkan ke halaman pembayaran
    // Contoh validasi: pastikan semua bidang telah diisi
    const { name, email, phone, address, postcode } = formData;
    if (!name || !email || !phone || !address || !postcode) {
      alert("Please fill in all fields.");
    } else {
      // Lakukan tindakan lanjutan seperti pindah ke halaman pembayaran
      console.log("Form submitted:", formData);
    }
  };

  return (
    <div className="container">
      <Navbar2_Components />

      <section className="checkout">
        <div className="content-1">
          <Link to="/wardrobe">
            <button className="back-button">Back</button>
          </Link>

          <h1>Your Order</h1>
          <p>Check your shopping items before paying for them</p>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id_item}>
                  <td>
                    <img
                      src={`/images/${item.image_url}`}
                      alt={item.name_item}
                      className="product-image"
                    />
                    {item.name_item}
                  </td>
                  <td>
                    Rp {item.price_item && item.price_item.toLocaleString()}
                  </td>
                  <td>
                    <button
                      className="btn-quantity"
                      onClick={() => handleQuantityChange(item.id_item, -1)}
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    {item.quantity}
                    <button
                      className="btn-quantity"
                      onClick={() => handleQuantityChange(item.id_item, 1)}
                    >
                      +
                    </button>
                  </td>
                  <td>
                    Rp{" "}
                    {item.price_item && item.quantity
                      ? (item.price_item * item.quantity).toLocaleString()
                      : 0}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="content-2">
          <h2>Information</h2>
          <p>Make sure your data is correct</p>
          <form onSubmit={handleSubmit}>
            <label>
              Name
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </label>
            <label>
              Email
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </label>
            <label>
              Phone Number
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </label>
            <label>
              Detail Address
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
              ></textarea>
            </label>
            <label>
              Pos Code
              <input
                type="text"
                name="postcode"
                value={formData.postcode}
                onChange={handleChange}
              />
            </label>
            <Link to="/checkout-payment">
              <button className="btn-next" type="submit">
                Next
              </button>
            </Link>
          </form>
        </div>
      </section>
      <Footer_Components />
    </div>
  );
};

export default Checkout_info;
