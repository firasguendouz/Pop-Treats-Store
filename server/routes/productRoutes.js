const express = require('express');
const router = express.Router();
const Product = require('../models/productModel');

// Define product routes
// Example: GET /products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Additional product routes as needed

module.exports = router;
