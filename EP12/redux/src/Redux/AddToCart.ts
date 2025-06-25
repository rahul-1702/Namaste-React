import { createSlice } from "@reduxjs/toolkit";
import type {FoodItemListType} from "../components/FoodItem";

type ReduxActionType = { payload: FoodItemListType, type: string }

const isIdSame = (item: FoodItemListType, action: ReduxActionType) => item?.card?.info?.id === action.payload?.card?.info?.id

const AddToCartSlice = createSlice({
    name: "Add To Cart",
    initialState: [],
    reducers: {
        addItem: (state: FoodItemListType[], action: ReduxActionType) => {
            state.push({ ...action.payload, count: 1 })
        },
        removeItem: (state: FoodItemListType[], action: ReduxActionType) =>{
            const index = state.findIndex((item: FoodItemListType) => isIdSame(item,  action));
            if (index !== -1) {
                state.splice(index, 1);
            }
        },
        increaseCount: (state: FoodItemListType[], action: ReduxActionType) => {
            const item = state.find((item: FoodItemListType) => isIdSame(item,  action));
            if (item && item.count && item.count >= 1) item.count += 1;
        },
        decreaseCount: (state: FoodItemListType[], action: ReduxActionType) => {
            const item = state.find((item: FoodItemListType) => isIdSame(item,  action));
            if (item && item.count && item.count > 1) item.count -= 1;
        }
    }
})

export const { addItem, removeItem, increaseCount, decreaseCount } = AddToCartSlice.actions;
export default AddToCartSlice.reducer;