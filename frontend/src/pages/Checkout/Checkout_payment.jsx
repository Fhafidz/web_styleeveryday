import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar2_Components from "../../components/Navbar2_Components";
import Footer_Components from "../../components/Footer_Components";
import axios from "axios";
import "../../css/checkout_payment.css";

const Checkout_payment = () => {
  const [items, setItems] = useState([]);
  const [deliveryCost, setDeliveryCost] = useState(12000);

  const fetchCheckoutData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/item/items");
      // Filter produk dengan ID 1, 2, dan 3
      const selectedIds = [51, 52, 54];
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

  const totalPrice = items.reduce((total, item) => total + item.price, 0);
  const total = totalPrice + deliveryCost;

  return (
    <div className="container">
      <Navbar2_Components />

      <div className="checkout-pay">
        <div className="summary-order">
          <Link to="/checkout-info">
            <button className="back-button">Back</button>
          </Link>

          <h2>Summary Order</h2>
          <p>Check your shopping items before paying for them</p>
          <div className="items">
            {items.map((item, index) => (
              <div key={index} className="item">
                <img src={`/images/${item.image_url}`} alt={item.name_item} />
                <div className="item-details">
                  <h3>{item.name_item}</h3>
                  <p>
                    Rp {item.price_item && item.price_item.toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="delivery-payment">
          <div className="delivery">
            <h2>Delivery</h2>
            <p>Select a delivery service</p>
            <div className="delivery-option">
              <select>
                <option value="jne">
                  JNE Express Rp {deliveryCost.toLocaleString("id-ID")}
                </option>
                <option value="jnt">
                  J&T Regular Rp {deliveryCost.toLocaleString("id-ID")}
                </option>
                <option value="sicepat">
                  Sicepat Express Rp {deliveryCost.toLocaleString("id-ID")}
                </option>
              </select>
            </div>
          </div>
          <div className="payment">
            <h2>Payment</h2>
            <p>You must transfer here</p>
            <div className="payment-details">
              <select>
                <option value="dana">
                  Dana 085715655471 A.N. Pricillia Putri
                </option>
              </select>
            </div>
          </div>
        </div>

        <div className="shopping-summary">
          <h2>Shopping Summary</h2>
          <div className="summary-details">
            <p>
              Total Price ({items.length} items){" "}
              <span>Rp {totalPrice.toLocaleString("id-ID")}</span>
            </p>
            <p>
              Delivery <span>Rp {deliveryCost.toLocaleString("id-ID")}</span>
            </p>
            <hr />
            <p>
              Total <span>Rp {total.toLocaleString("id-ID")}</span>
            </p>
          </div>

          <Link to="/checkout-confirmation">
            <button className="pay-button">Pay</button>
          </Link>
        </div>
      </div>

      <Footer_Components />
    </div>
  );
};

export default Checkout_payment;
