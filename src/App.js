import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import AboutUs from './pages/AboutUs';
import CheckoutPage from './pages/CheckoutPage';
import HomePage from './pages/HomePage';
import { Provider } from 'react-redux';
import React from 'react';
import { store } from './redux/store';

// Import other components and pages as needed

function App() {
  return (
    <Provider store={store}>

    <Router>
      <div>
        {/* Navigation and other components */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          {/* Add other routes here */}
        </Routes>
      </div>
    </Router>
    </Provider>

  );
}

export default App;
