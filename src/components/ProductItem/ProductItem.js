import './productItem.css';

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { updateQuantity } from '../../redux/basketSlice';

const ProductItem = ({ product, onAddToBasket }) => {
    const [clicked, setClicked] = useState(false);
    const dispatch = useDispatch();
    const basketItems = useSelector(state => state.basket.items);
    basketItems.forEach(item => {
        console.log(`Item: ${item.name}, Price: ${item.price}, Quantity: ${item.quantity}`);
      });
      const totalCost = basketItems.reduce((total, item) => total + item.price * item.quantity, 0);
      console.log(`Total Cost: ${totalCost}`);
      
    const handleIncreaseQuantity = (itemId) => {
        // Increment the quantity by 1 when increasing
        const newQuantity = basketItems.find(item => item.id === itemId).quantity + 1;
        dispatch(updateQuantity({ itemId, newQuantity }));
    };

    const handleClick = () => {
        if (!clicked) {
            onAddToBasket(product);
            setClicked(true);
        } else {
            // If the product was clicked before, increase the quantity
            handleIncreaseQuantity(product.id);
        }
    };

    return (
        <div className="productItem">
            <div className="productImage">
                {/* Use a responsive image tag and add an alt attribute for accessibility */}
                <img
                    src={product.image}
                    alt={`${product.name} - ${product.description}`}
                    className="responsiveImage"
                />
            </div>
            <div className="productInfo">
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p className="productPrice">${product.price.toFixed(2)}</p>
                {/* Improve accessibility by adding a role and tabindex to the button */}
                <button
                    onClick={handleClick}
                    role="button"
                    tabIndex="0"
                    className="addToBasketButton"
                >
                    Add to Basket
                </button>
            </div>
        </div>
    );
};

export default ProductItem;
