// registerRoutes.js

const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const jwt = require('jsonwebtoken'); // If you're using JWT for authentication

// Registration route
router.post('/', async (req, res) => {
    try {
      const { username, email, password } = req.body;
      let user = await User.findOne({ username });
      if (user) {
        return res.status(400).json({ message: 'Username already exists' });
      }
      user = new User({ username, email, password });
      await user.save();
      // Generate a token with user id included
      const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET, { expiresIn: '1h' });
      res.status(201).json({ token });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

module.exports = router;
