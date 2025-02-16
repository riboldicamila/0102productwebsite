import React from 'react';
import { useDispatch } from 'react-redux';
import { resetOrderState } from '../../redux/features/cartSlice';
import './checkoutBanner.css'; 
import GenericButton from '../GenericButton';

const CheckoutBanner = () => {
  const dispatch = useDispatch();
  const orderNumber = Math.floor(Math.random() * 1000000); 
  
  const handleClose = () => {
    dispatch(resetOrderState());
  };

  return (
    <div className="banner-container">
      <div className="banner-content">
        <h2 className="banner-title">Order Confirmed!</h2>
        <p>Order number: <span className="order-number">{orderNumber}</span></p>
        <p>Thank you! We’ll contact you soon.</p>
        <GenericButton handleClick={handleClose} text="Close" />
      </div>
    </div>
  );
};

export default CheckoutBanner;
