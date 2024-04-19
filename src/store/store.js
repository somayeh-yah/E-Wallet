import { configureStore } from '@reduxjs/toolkit';
import cardReducer from "../reducers/cardReducers"

const store = configureStore({
  reducer: {
    card: cardReducer,
  },
});

export default store;