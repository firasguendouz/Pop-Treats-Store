import basketReducer from './basketSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});
