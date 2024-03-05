import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

import React from 'react';

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const handlePaymentSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not been loaded yet. Make sure to disable form submission until Stripe.js has loaded.
            return;
        }

        const card = elements.getElement(CardElement);
        const result = await stripe.createPaymentMethod({
            type: 'card',
            card: card,
        });

        if (result.error) {
            console.log(result.error.message);
        } else {
            console.log(result.paymentMethod);
            // Pass the obtained payment method ID to your server for processing.
        }
    };

    return (
        <div>
            <CardElement />
            <button onClick={handlePaymentSubmit} disabled={!stripe}>
                Pay
            </button>
        </div>
    );
};

export default PaymentForm;
