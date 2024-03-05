const express = require('express');
const router = express.Router();
const User = require('../models/userModel');

// Define user routes
// Example: GET /users
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Additional user routes as needed

module.exports = router;
