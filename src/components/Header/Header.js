// Header.js

import './header.css';

import React, { useState } from 'react';

import Basket from '../Basket/Basket';
import { FaShoppingBasket } from 'react-icons/fa';
import logoImage from '../../products/logo.png'; // Adjust the path accordingly
import { useSelector } from 'react-redux';

const Header = () => {
  const basketQuantity = useSelector(state => state.basket.totalQuantity);
  const [isBasketOverlayVisible, setBasketOverlayVisibility] = useState(false);

  

  const handleBasketClick = () => {
    setBasketOverlayVisibility(!isBasketOverlayVisible);
  };

  return (
    <header className="header">
      <div className="logo">
      <img src={logoImage} alt="My Nineties Store Logo" />
      </div>
      <nav className="navigation">
        <ul>
          
          <li>
            <div className="basket-icon" onClick={handleBasketClick}>
              <FaShoppingBasket />
              {basketQuantity > 0 && <span className="item-count">{basketQuantity}</span>}
            </div>
            {isBasketOverlayVisible && (
              <div className="basket-overlay">
                <h3>Basket Summary</h3>
                <Basket />
                <button onClick={() => setBasketOverlayVisibility(false)}>
                  Close Basket
                </button>
              </div>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
