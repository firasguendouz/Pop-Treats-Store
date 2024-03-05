import React, { createContext, useContext, useReducer } from 'react';

const BasketContext = createContext();

export const useBasket = () => {
  const context = useContext(BasketContext);
  if (!context) {
    throw new Error('useBasket must be used within a BasketContextProvider');
  }
  return context;
};

const basketReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return [...state, action.payload.product];
    case 'REMOVE_FROM_BASKET':
      return state.filter(item => item.id !== action.payload.productId);
    case 'ADJUST_QUANTITY':
      return state.map(item =>
        item.id === action.payload.productId
          ? { ...item, quantity: action.payload.newQuantity }
          : item
      );
    case 'CLEAR_BASKET':
      return [];
    default:
      return state;
  }
};

export const BasketProvider = ({ children }) => {
  const [basket, dispatch] = useReducer(basketReducer, []);

  const addToBasket = (product) => {
    dispatch({ type: 'ADD_TO_BASKET', payload: { product } });
  };

  const removeFromBasket = (productId) => {
    dispatch({ type: 'REMOVE_FROM_BASKET', payload: { productId } });
  };

  const adjustQuantity = (productId, newQuantity) => {
    dispatch({ type: 'ADJUST_QUANTITY', payload: { productId, newQuantity } });
  };

  const clearBasket = () => {
    dispatch({ type: 'CLEAR_BASKET' });
  };

  return (
    <BasketContext.Provider
      value={{ basket, addToBasket, removeFromBasket, adjustQuantity, clearBasket }}
    >
      {children}
    </BasketContext.Provider>
  );
};
