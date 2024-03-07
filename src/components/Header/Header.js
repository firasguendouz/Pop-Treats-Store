import './header.css';

import { FaShoppingBasket, FaUserCircle } from 'react-icons/fa'; // Import FaUserCircle for user icon
import React, { useState } from 'react';

import Basket from '../Basket/Basket';
import logoImage from '../../products/logo.png'; // Adjust the path accordingly
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import { useSelector } from 'react-redux';

const Header = () => {
  const basketQuantity = useSelector(state => state.basket.totalQuantity);
  const [isBasketOverlayVisible, setBasketOverlayVisibility] = useState(false);
  const [isUserDropdownVisible, setUserDropdownVisibility] = useState(false);
  const navigate = useNavigate(); // Hook for navigating

  const handleBasketClick = () => {
    setBasketOverlayVisibility(!isBasketOverlayVisible);
  };

  const handleUserIconClick = () => {
    setUserDropdownVisibility(!isUserDropdownVisible);
  };

  const handleLogin = () => {
    // Navigate to Login form
    navigate('/login'); // Update the path as per your routing setup
  };

  const handleRegister = () => {
    // Navigate to Register form
    navigate('/register'); // Update the path as per your routing setup
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={logoImage} alt="My Nineties Store Logo" />
      </div>
      <nav className="navigation">
        <ul>
          <li onClick={handleUserIconClick} className="user-icon">
            <FaUserCircle size={24} />
            {isUserDropdownVisible && (
              <div className="user-dropdown">
                <button onClick={handleLogin}>Login</button>
                <button onClick={handleRegister}>Register</button>
              </div>
            )}
          </li>
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
