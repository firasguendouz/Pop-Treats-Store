const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const compression = require('compression');
const morgan = require('morgan');

const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const userRoutes = require('./routes/userRoutes');
const isAuthenticated = require('./middleware/authenticationMiddleware');
const errorHandlingMiddleware = require('./middleware/errorHandlingMiddleware');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/your-database-name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
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
app.use('/users', isAuthenticated, userRoutes);

// Error handling middleware
app.use(errorHandlingMiddleware);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
