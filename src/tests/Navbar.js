// Navbar.js

import './Navbar.css'; // Import the CSS file

import React, { useState } from 'react';

import Basket from './Basket';
import { withRouter } from 'react-router-dom';

function Navbar({ history }) {
  const [isBasketOpen, setBasketOpen] = useState(false);

  const toggleBasket = () => {
    setBasketOpen(!isBasketOpen);
  };

  const navigateTo = (path) => {
    history.push(path);
    setBasketOpen(false); // Close the basket when navigating
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand" onClick={() => navigateTo('/')}>
        Pop'it
      </div>
      <div className="navbar-links">
        <div className="nav-link" onClick={() => navigateTo('/')}>
          Home
        </div>
        <div className="nav-link" onClick={() => navigateTo('/about-us')}>
          About Us
        </div>

        {/* Basket icon and link */}
        <div className="basket-container" onClick={toggleBasket}>
          <div className="basket-count basket-icon">🛒</div>
        </div>
      </div>

      {/* Display the Basket component as a pop-up */}
      {isBasketOpen && <Basket basket={[]} toggleBasket={toggleBasket} />}
    </nav>
  );
}

export default withRouter(Navbar);
