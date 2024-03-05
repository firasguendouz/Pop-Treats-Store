// server.js
const express = require('express');
const bodyParser = require('body-parser');
const stripe = require('stripe')('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'); // Replace with your actual secret key

const app = express();
const port = 3001; // You can use any available port

app.use(bodyParser.json());

// Endpoint to create a payment intent
app.post('/create-payment-intent', async (req, res) => {
  try {
    const { amount, currency, productName } = req.body;

    // Create a PaymentIntent with the specified amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      description: `Payment for ${productName}`,
    });

    // Send the client secret back to the client
    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error('Error creating payment intent:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
