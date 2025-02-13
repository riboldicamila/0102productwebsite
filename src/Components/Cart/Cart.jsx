import React from 'react';
import './cart.css'

const Cart = () => {
  const cartItems = [
    { id: 1, name: 'Product 1', price: 20, quantity: 2 },
    { id: 2, name: 'Product 2', price: 15, quantity: 1 },
    { id: 3, name: 'Product 3', price: 30, quantity: 3 }
  ];

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-summary">
      <h2 className="cart-title">Shopping Summary</h2>
      <ul className="cart-items">
        {cartItems.map((item) => (
          <li key={item.id} className="cart-item">
            <div>
              <h3 className="item-name">{item.name}</h3>
              <p className="item-quantity">Quantity: {item.quantity}</p>
            </div>
            <div className="item-price-remove">
              <p className="item-price">${item.price * item.quantity}</p>
              <button
                className="remove-button"
                onClick={() => alert('Remove logic here')}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
      <hr className="divider" />
      <div className="total">
        Total: ${total}
      </div>
    </div>
  );
};

export default Cart;
