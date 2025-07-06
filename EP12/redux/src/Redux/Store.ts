import { configureStore } from "@reduxjs/toolkit";
import AddToCartReducer from "./AddToCart.ts";

export const store = configureStore({
    reducer: {
        cart: AddToCartReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;