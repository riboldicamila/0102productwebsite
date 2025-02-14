import React, { useState, useEffect } from "react";
import { getDatabase, ref, get } from "firebase/database";
import { app } from '../../firebase/config'; 
import "./CollectionPage.css";
import GenericButton from "../../Components/Button";

const CollectionPage = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const database = getDatabase();
        const productsRef = ref(database, "products");
        const snapshot = await get(productsRef);
        
        if (snapshot.exists()) {
          const productsData = [];
          snapshot.forEach((childSnapshot) => {
            productsData.push({
              id: childSnapshot.key,
              ...childSnapshot.val()
            });
          });
          setProducts(productsData);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="collection-container">
      <h1 className="collection-title">Our Bakery Delights</h1>
      <p className="collection-description">
        Discover the delicious treats freshly baked just for you!
      </p>
      <div className="banner">
        <div className="banner-content">
          <span className="new-arrival">FRESHLY BAKED</span>
          <h2 className="banner-title">Our Specialties</h2>
          <GenericButton text="Order Now" to="/shop" />
        </div>
      </div>

      <div className="collection-controls">
        <div className="view-controls">
          <button
            className={`view-btn ${viewMode === "grid-large" ? "active" : ""}`}
            onClick={() => setViewMode("grid-large")}
          >
            ⊞
          </button>
          <button
            className={`view-btn ${viewMode === "grid" ? "active" : ""}`}
            onClick={() => setViewMode("grid")}
          >
            ⊟
          </button>
          <button
            className={`view-btn ${viewMode === "list" ? "active" : ""}`}
            onClick={() => setViewMode("list")}
          >
            ≡
          </button>
        </div>
      </div>

      <div className={`products-grid ${viewMode}`}>
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;