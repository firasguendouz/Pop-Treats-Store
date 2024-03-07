const mongoose = require('mongoose');
const Product = require('./models/productModel'); // Adjust the path as needed

mongoose.connect('mongodb://localhost:27017/pop-treats', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB Connected');
}).catch(err => {
  console.error('Connection error', err);
});

const products = [
  {
    name: 'Magical Brownie',
    description: 'A delightful treat with a special touch.',
    price: 4.99,
  },
  {
    name: 'Enchanted Cookie',
    description: 'Crispy, sweet, and surprisingly uplifting.',
    price: 3.99,
  }
];

Product.insertMany(products)
  .then(res => {
    console.log('Products added:', res);
    mongoose.connection.close();
  })
  .catch(err => {
    console.error('Error adding products:', err);
    mongoose.connection.close();
  });
