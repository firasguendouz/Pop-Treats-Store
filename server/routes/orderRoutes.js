const express = require('express');
const router = express.Router();
const Order = require('../models/orderModel');

// Define order routes
// Example: GET /orders
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Additional order routes as needed

module.exports = router;
