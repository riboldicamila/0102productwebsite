import React from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '../features/cartSlice';

const Product = ({ id, name, price, image, description }) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(cartActions.addToCart({
      id,
      name,
      price,
      image
    }));
  };

  return (
    <div className="border rounded-lg overflow-hidden shadow-md">
      {image && (
        <img 
          src={image} 
          alt={name} 
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        <h3 className="font-bold text-lg">{name}</h3>
        <p className="text-gray-600 text-sm mb-2">{description}</p>
        <p className="text-lg font-semibold">${price}</p>
        <button
          onClick={addToCartHandler}
          className="mt-2 w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;