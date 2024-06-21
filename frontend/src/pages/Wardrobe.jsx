import React, { useEffect, useState } from "react";

import Navbar2_Components from "../components/Navbar2_Components";
import "../css/wardrobe.css";
import Footer_Components from "../components/Footer_Components";
import Fashion_Components from "../components/Fashion_Components";

const Wardrobe = () => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const useraccount_id = localStorage.getItem('useraccount_id');
  const token = localStorage.getItem('token');

  if (!useraccount_id || !token) {
    console.error("useraccount_id or token is not defined");
    return <div>Please log in to view your wardrobe.</div>;
  }

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/favorites/user/${useraccount_id}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setFavorites(data.favorites);
      } catch (error) {
        console.error('Failed to fetch favorites:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
  }, [useraccount_id, token]);

  if (loading) return <div>Loading...</div>;
  if (!favorites.length) return <div>No favorites found.</div>;

  return (
    <div className="container">
      <Navbar2_Components />

      <section className="wardrobe">
        <h1>Your Wishlist</h1>
        <div className="main">
          {favorites.map(item => (
            <Fashion_Components key={item.item_id} item={item} />
          ))}
        </div>
        <div className="btn">
          <a href="/mix-match">
            <button>Lets Try To MIX & Match</button>
          </a>
        </div>
      </section>

      <Footer_Components />
    </div>
  );
};

export default Wardrobe;
