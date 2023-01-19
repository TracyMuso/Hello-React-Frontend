import { configureStore } from "@reduxjs/toolkit";
import greetingReducer from './reducer/api'

const store = configureStore({
    reducer: {
        greeting: greetingReducer
    },
});

export default store;