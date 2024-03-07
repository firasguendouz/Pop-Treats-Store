import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import AboutUs from './pages/AboutUs';
import CheckoutPage from './pages/CheckoutPage';
import HomePage from './pages/HomePage';
import Login from './components/auth/LoginForm';
import { Provider } from 'react-redux';
import React from 'react';
import Register from  './components/auth/RegisterForm';
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
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

        </Routes>
      </div>
    </Router>
    </Provider>

  );
}

export default App;
