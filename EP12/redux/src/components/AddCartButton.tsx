import * as React from "react";
import type { FoodItemListType } from "./FoodItem";

interface AddCartButtonProps {
    increase: (info: FoodItemListType) => void;
    clicked: (info: FoodItemListType) => void;
    decrease: (info: FoodItemListType) => void;
    data: FoodItemListType;
}

const AddCartButton: React.FC<AddCartButtonProps> = ({ decrease, clicked, increase, data }) => {
    return (
        <span className="flex justify-center items-center w-[180px] ms-auto bg-cyan-600 text-white rounded-md cursor-pointer">
            <button
                onClick={() => decrease(data)}
                className="flex justify-center items-center m-auto px-3 py-0 w-3/12 cursor-pointer text-4xl pb-1 hover:bg-cyan-700 hover:rounded-md active:bg-cyan-600 active:rounded-md"
            >
              -
            </button>
            <button
                onClick={() => clicked(data)}
                className="bg-gray-600 px-4 py-2 w-6/12 text-center rounded-sm cursor-pointer hover:bg-gray-700 hover:rounded-md active:bg-gray-600 active:rounded-md"
            >
              Add
            </button>
            <button
                onClick={() => increase(data)}
                className="flex justify-center items-center m-auto px-3 py-1 w-3/12 cursor-pointer text-3xl hover:bg-cyan-700 hover:rounded-md active:bg-cyan-600 active:rounded-md"
            >
              +
            </button>
          </span>
    )
}

export default AddCartButton;