// basketSlice.js

import { createSlice } from '@reduxjs/toolkit';

export const basketSlice = createSlice({
  name: 'basket',
  initialState: {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addToBasket: (state, action) => {
      const { id, name, price, quantity } = action.payload;
      const existingItemIndex = state.items.findIndex(item => item.id === id);

      if (existingItemIndex !== -1) {
        state.items[existingItemIndex].quantity += quantity;
      } else {
        state.items.push({ id, name, price, quantity: 1 }); // Set quantity to 1 for new items
      }

      state.totalQuantity += quantity;
      state.totalPrice += price * quantity;
    },
    removeFromBasket: (state, action) => {
      const idToRemove = action.payload;
      const existingItem = state.items.find(item => item.id === idToRemove);

      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.totalPrice -= existingItem.price * existingItem.quantity;
        state.items = state.items.filter(item => item.id !== idToRemove);
      }
    },
    updateQuantity: (state, action) => {
      const { itemId, newQuantity } = action.payload;
      const existingItem = state.items.find(item => item.id === itemId);

      if (existingItem) {
        state.totalQuantity += newQuantity - existingItem.quantity;
        state.totalPrice += existingItem.price * (newQuantity - existingItem.quantity);
        existingItem.quantity = newQuantity;
      }
    },
  },
});

export const { addToBasket, removeFromBasket, updateQuantity } = basketSlice.actions;

export default basketSlice.reducer;
