// src/components/PaymentButton.js

import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

import React from 'react';

const PaymentButton = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Your server endpoint for creating a payment intent
    const paymentIntentEndpoint = '/create-payment-intent';

    const response = await fetch(paymentIntentEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: 500, currency: 'eur', productName: 'test' }),
    });

    const { clientSecret } = await response.json();

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (result.error) {
      console.error(result.error.message);
    } else {
      if (result.paymentIntent.status === 'succeeded') {
        console.log('Payment succeeded!');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Card details
        <CardElement />
      </label>
      <button type="submit" disabled={!stripe}>
        Pay 5 Euro for test
      </button>
    </form>
  );
};

export default PaymentButton;
