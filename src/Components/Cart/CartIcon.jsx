import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCart } from '../../redux/features/cartSlice';

const CartIcon = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="cart-icon" onClick={() => dispatch(toggleCart())}>
      <span className="material-icons">shopping_cart</span>
      {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
    </div>
  );
};

export default CartIcon;