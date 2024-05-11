
import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./reducers/CartSlice";

export const store = configureStore({
    reducer: {
        cart: CartReducer
    }
})
