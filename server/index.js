// index.js

const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const cors = require('cors');
const compression = require('compression');
const morgan = require('morgan');
const jwt = require('jsonwebtoken'); // If you're using JWT for authentication

const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const loginRoutes = require('./routes/loginRoutes');
const registerRoutes = require('./routes/registerRoutes');

const isAuthenticated = require('./middleware/authenticationMiddleware');
const errorHandlingMiddleware = require('./middleware/errorHandlingMiddleware');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/pop-treats', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(helmet());
app.use(cors());
app.use(compression());
app.use(morgan('dev'));
// Logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// Routes
app.use('/products', productRoutes);
app.use('/orders', isAuthenticated, orderRoutes);
app.use('/login',  loginRoutes);
app.use('/register',  registerRoutes);

// Error handling middleware
app.use(errorHandlingMiddleware);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
