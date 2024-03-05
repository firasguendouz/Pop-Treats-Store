// Basket.js

import './basket.css';

import { removeFromBasket, updateQuantity } from '../../redux/basketSlice';
import { useDispatch, useSelector } from 'react-redux';

import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Basket = () => {
  const dispatch = useDispatch();
  const basketItems = useSelector(state => state.basket.items);
  const totalCost = basketItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  
  
  console.log('Basket state:', useSelector(state => state.basket));

  const handleRemoveItem = (itemId) => {
    dispatch(removeFromBasket(itemId));
  };

  const handleDecreaseQuantity = (itemId) => {
    // Ensure the quantity is at least 1 before dispatching the update
    const newQuantity = Math.max(1, basketItems.find(item => item.id === itemId).quantity - 1);
    dispatch(updateQuantity({ itemId, newQuantity }));
  };

  const handleIncreaseQuantity = (itemId) => {
    // Increment the quantity by 1 when increasing
    const newQuantity = basketItems.find(item => item.id === itemId).quantity + 1;
    dispatch(updateQuantity({ itemId, newQuantity }));
  };

  const handleCheckout = () => {
    // Navigate to the checkout page with the basket items
    navigate('/checkout', { state: { basketItems } });
  };

  return (
    <div className="basket">
      <h2>Your basket</h2>
      <div className="basketItems">
        {basketItems.length > 0 ? (
          basketItems.map(item => (
            <div key={item.id} className="basketItem">
              <div className="itemDetails">
                <span>{item.name}</span>
                {/* Add an image, if available */}
                {item.image && <img src={item.image} alt={item.name} />}
              </div>
              <div className="quantityControls">
                <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
                <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
              </div>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))
        ) : (
          <p>Your basket is empty.</p>
        )}
      </div>
      {basketItems.length > 0 && (
        <div className="checkout">
          <p>Total Cost: ${totalCost.toFixed(2)}</p>
          <button onClick={handleCheckout}>Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Basket;
