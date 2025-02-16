import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getDatabase, ref, get } from "firebase/database";
import { app } from "../../firebase/config";
import GenericButton from "../../Components/GenericButton";
import { addToCart } from "../../redux/features/cartSlice"; 

import "./CollectionPage.css";

const CollectionPage = () => {
  const dispatch = useDispatch();
  const [viewMode, setViewMode] = useState("grid");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quantities, setQuantities] = useState({});

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
              ...childSnapshot.val(),
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

  const handleQuantityChange = (productId, change) => {
    setQuantities(prev => ({
      ...prev,
      [productId]: Math.max(0, (prev[productId] || 0) + change)
    }));
  };

  const handleAddToCart = (product) => {
    const quantity = quantities[product.id] || 0;
    if (quantity > 0) {
      dispatch(addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity
      }));
      // Reset quantity after adding to cart
      setQuantities(prev => ({ ...prev, [product.id]: 0 }));
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="background-container">
    <div className="collection-container">
      <div className="collection-header">
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
      </div>

      <div className="collection-products">
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
                <p className="product-price">${product.price}</p>
                <div className="quantity-controls">
                  <button 
                    className="quantity-btn minus-btn"
                    onClick={() => handleQuantityChange(product.id, -1)}
                  >
                    -
                  </button>
                  <span className="quantity-value">
                    {quantities[product.id] || 0}
                  </span>
                  <button 
                    className="quantity-btn plus-btn"
                    onClick={() => handleQuantityChange(product.id, 1)}
                  >
                    +
                  </button>
                </div>
                <button 
                  className="add-to-cart-btn"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default CollectionPage;