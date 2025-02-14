import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, sendOrder, resetOrderState } from '../../redux/features/cartSlice';
import CheckoutBanner from '../CheckoutBanner/CheckoutBanner'; 

import './cart.css';


const Cart = () => {
  const dispatch = useDispatch();
  const { items, isOpen, orderSent } = useSelector(state => state.cart);
  
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  const handleSendOrder = () => {
    dispatch(sendOrder()); // Dispatch action to send the order and clear cart
    setTimeout(() => {
      dispatch(resetOrderState()); // Reset order state after a few seconds
    }, 3000); //time
  };

  return (
    <div className="cart-overlay">
      <div className="cart-container">
        <div className="cart-header">
          <h2>Your Order Selection</h2>
        </div>
        <div className="cart-items">
          {items.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="item-details">
                <h3>{item.name}</h3>
                <p>${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
              </div>
              <button 
                onClick={() => dispatch(removeFromCart(item.id))}
                className="remove-btn"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
        <div className="cart-footer">
          <div className="total">Total: ${total.toFixed(2)}</div>
          <button 
            className="checkout-btn"
            onClick={handleSendOrder}
          >
            Send Order
          </button>
        </div>
      </div>
      {orderSent && <CheckoutBanner />}
    </div>
  );
};

export default Cart;
