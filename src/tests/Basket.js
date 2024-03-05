// Basket.js

import './Basket.css';

import React from 'react';

const Basket = ({ basket }) => {
  return (
    <div>
      <h2>Your Basket</h2>
      {basket.length === 0 ? (
        <p>Your basket is empty.</p>
      ) : (
        <ul>
          {basket.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Basket;
