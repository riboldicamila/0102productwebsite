import React, { useState } from 'react';

import { blogs } from "../../HomeData.js";

import './CreationsStyles.css';


const CreationsGrid = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleCartToggle = (id) => {
    if (cartItems.includes(id)) {
      setCartItems(cartItems.filter(item => item !== id));
    } else {
      setCartItems([...cartItems, id]);
    }
  };

  return (
    <div className="container">
      <div className="blog-grid">
        {blogs.map((blog) => (
          <article key={blog.id} className="blog-card">
            <div className="blog-image">
              <img src={blog.image} alt={blog.title} />
            </div>
            
            <div className="blog-content">
              <h2>{blog.title}</h2>
              <p className="blog-subtitle">{blog.subtitle}</p>

              <button 
                className="cart-button" 
                onClick={() => handleCartToggle(blog.id)}
              >
                {cartItems.includes(blog.id) ? 'Remove -' : 'Add to cart +'}
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default CreationsGrid;
