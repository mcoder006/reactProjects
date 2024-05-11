import { createSlice } from "@reduxjs/toolkit";

let initialState: string [] = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            console.log(action);
            state.push(action.payload);
        },

        removeFromCart(state, action) {
            return state.filter(item => item.id !== action.payload.id);
        },

        clearCart( state ) {
            return state = [];
        }
    }
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;


