import '../App.css'; // Assuming you have some general styles

import Checkout from '../components/Checkout/Checkout';
import { Elements } from '@stripe/react-stripe-js';
import { Link } from 'react-router-dom';
import React from 'react';
import { loadStripe } from '@stripe/stripe-js';

const CheckoutPage = () => {
// Load your Stripe publishable key
const stripePromise = loadStripe('pk_test_51OqmVPFXCxDMGeV2pwdxAef9b0p76Cz1ytxKFE8UpdGbyWB5SekpXnkTwXlB0nysXY2x1DfT3IJo7uqrALKz4csx00Q5cBXful');

const BuyButton = () => {
  const handleClick = async (event) => {
    // Prevent the form from submitting
    event.preventDefault();

    // Get Stripe.js instance
    const stripe = await stripePromise;

    // Redirect to checkout
    const { error } = await stripe.redirectToCheckout({
      lineItems: [{ price: 'price_ID', quantity: 1 }], // Replace 'price_ID' with your actual price ID
      mode: 'payment',
      successUrl: window.location.protocol + '//' + window.location.host + '/success',
      cancelUrl: window.location.protocol + '//' + window.location.host + '/canceled',
    });

    if (error) {
      console.error('Error:', error);
    }
  };

  return (
    <button role="link" onClick={handleClick}>
      Buy Now
    </button>
  );
};
    const handleConfirmOrder = (orderDetails) => {
        // Here you would handle the order confirmation logic,
        // such as sending the order to your backend or a third-party API
        console.log('Order confirmed', orderDetails);
    };

    return (
        <div className="checkoutPage">
            <Link to="/">
        <span role="img" aria-label="Back to Home" style={{ fontSize: '24px', cursor: 'pointer' }}>
          &#x2190; {/* Left arrow Unicode character */}
        </span>
      </Link>
      <h1>Stripe Payment App</h1>
      <Elements stripe={stripePromise}>
        <BuyButton />
      </Elements>
            <Checkout onConfirmOrder={handleConfirmOrder} />
        </div>
    );
};

export default CheckoutPage;
