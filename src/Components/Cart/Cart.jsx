import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, toggleCart } from '../../redux/features/cartSlice';

import './Cart.css';

const Cart = () => {
  const dispatch = useDispatch();
  const { items, isOpen } = useSelector(state => state.cart);
  
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

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
          <button className="checkout-btn">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;