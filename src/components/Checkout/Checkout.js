import './checkout.css';

import React, { useState } from 'react';

import Basket from '../Basket/Basket';
import PaymentForm from './PaymentForm'; // This will be your new Stripe payment form component

const Checkout = ({ onConfirmOrder }) => {
    // Load your publishable key
    
    const [customerInfo, setCustomerInfo] = useState({
        name: '',
        address: '',
        email: '',
    });

    const [formErrors, setFormErrors] = useState({
        name: '',
        address: '',
        email: '',
    });

    const handleChange = (e) => {
        setCustomerInfo({ ...customerInfo, [e.target.name]: e.target.value });
        // Clear the corresponding error when the user starts typing in the field
        setFormErrors({ ...formErrors, [e.target.name]: '' });
    };

    const validateForm = () => {
        const errors = {};
        if (!customerInfo.name.trim()) {
            errors.name = 'Name is required';
        }
        if (!customerInfo.address.trim()) {
            errors.address = 'Address is required';
        }
        if (!/\S+@\S+\.\S+/.test(customerInfo.email)) {
            errors.email = 'Invalid email address';
        }
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate the form before submission
        const errors = validateForm();
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }

        // Form is valid, proceed with order confirmation
        onConfirmOrder(customerInfo);
    };

    return (
        <form className="checkoutForm" onSubmit={handleSubmit}>
            <h2>Checkout</h2>
            <div className="formGroup">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={customerInfo.name}
                    onChange={handleChange}
                    required
                />
                <span className="error">{formErrors.name}</span>
            </div>
            <div className="formGroup">
                <label htmlFor="address">Address</label>
                <input
                    type="text"
                    id="address"
                    name="address"
                    value={customerInfo.address}
                    onChange={handleChange}
                    required
                />
                <span className="error">{formErrors.address}</span>
            </div>
            <div className="formGroup">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={customerInfo.email}
                    onChange={handleChange}
                    required
                />
                <span className="error">{formErrors.email}</span>
            </div>
            {/* Placeholder for payment information. In a real application, integrate with a payment service. */}
            <div className="formGroup">
                <label>Payment Details</label>
                <Basket/>
                <p>Payment integration is required here.</p>
            </div>
            <button type="submit" className="confirmOrderButton">
                Confirm Order
            </button>
        </form>
    );
};

export default Checkout;
