import React from 'react';
import { useDispatch } from 'react-redux';
import { resetOrderState } from '../../redux/features/cartSlice';
import './checkoutBanner.css'; 

const CheckoutBanner = () => {
  const dispatch = useDispatch();
  const orderNumber = Math.floor(Math.random() * 1000000); // Generate a random order number
  
  const handleClose = () => {
    dispatch(resetOrderState()); // Reset order state when closing banner
  };

  return (
    <div className="banner-container">
      <div className="banner-content">
        <p className="banner-title">Your order has been sent!</p>
        <p>Order number: <span className="order-number">{orderNumber}</span></p>
        <p>Thank you, we will reach out for further steps.</p>
        <button className="close-btn" onClick={handleClose}>Close</button>
      </div>
    </div>
  );
};

export default CheckoutBanner;
