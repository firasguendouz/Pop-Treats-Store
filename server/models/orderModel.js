const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    products: [
        {
            product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
            quantity: { type: Number, default: 1 },
        },
    ],
    totalAmount: { type: Number, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    // Additional fields as needed
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
