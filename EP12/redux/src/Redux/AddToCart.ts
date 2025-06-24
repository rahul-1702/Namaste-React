import { createSlice } from "@reduxjs/toolkit";
import type {RestaurantType} from "../components/Home";

type ReduxActionType = { payload: RestaurantType, type: string }

const AddToCartSlice = createSlice({
    name: "Add To Cart",
    initialState: [],
    reducers: {
        addItem: (state: RestaurantType[], action: ReduxActionType) => {
            state.push({ ...action.payload, count: 1 })
        },
        removeItem: (state: RestaurantType[], action: ReduxActionType) =>{
            const index = state.findIndex((item) => item.id === action.payload.id);
            if (index !== -1) {
                state.splice(index, 1);
            }
        },
        increaseCount: (state: RestaurantType[], action: ReduxActionType) => {
            const item = state.find((item: RestaurantType) => item.id === action.payload.id);
            if (item && item.count && item.count >= 1) item.count += 1;
        },
        decreaseCount: (state: RestaurantType[], action: ReduxActionType) => {
            const item = state.find((item: RestaurantType) => item.id === action.payload.id);
            if (item && item.count && item.count > 1) item.count -= 1;
        }
    }
})

export const { addItem, removeItem, increaseCount, decreaseCount } = AddToCartSlice.actions;
export default AddToCartSlice.reducer;