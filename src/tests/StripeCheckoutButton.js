// StripeCheckoutButton.js

import React from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('your_publishable_key');

const StripeCheckoutButton = ({ amount }) => {
  const handleClick = async (event) => {
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      lineItems: [{
        price: 'your_price_id', // Replace with your price ID
        quantity: 1,
      }],
      mode: 'payment',
      successUrl: window.location.origin + '/success',
      cancelUrl: window.location.origin + '/cancel',
    });
  };

  return (
    <button role="link" onClick={handleClick}>
      Checkout
    </button>
  );
};

export default StripeCheckoutButton;
