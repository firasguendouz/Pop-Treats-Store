// Header.js

import './header.css';

import React, { useState } from 'react';
import { addToBasket, updateQuantity } from '../../redux/basketSlice';
import { useDispatch, useSelector } from 'react-redux';

import Basket from '../Basket/Basket';
import { FaShoppingBasket } from 'react-icons/fa';
import logoImage from '../../products/logo.png'; // Adjust the path accordingly

const Header = () => {
  const basketItems = useSelector(state => state.basket.items);
  const basketQuantity = useSelector(state => state.basket.totalQuantity);
  const dispatch = useDispatch();
  const [isBasketOverlayVisible, setBasketOverlayVisibility] = useState(false);

  const handleAddToBasket = (product) => {
    const existingProduct = basketItems.find(item => item.id === product.id);

    if (existingProduct) {
      dispatch(updateQuantity({ itemId: product.id, newQuantity: existingProduct.quantity + 1 }));
    } else {
      dispatch(addToBasket(product));
    }
  };

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
