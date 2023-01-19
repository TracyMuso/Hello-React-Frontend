import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './reducer/api.js';

const store = configureStore({
  reducer: {
    greeting: greetingReducer,
  },
});

export default store;