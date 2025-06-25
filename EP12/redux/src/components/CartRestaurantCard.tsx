import {decreaseCount, increaseCount, removeItem} from "../Redux/AddToCart.ts";
import {useDispatch} from "react-redux";
import type {FoodItemListType} from "./FoodItem.tsx";
import * as React from "react";

interface CartRestaurantCardProps {
   item: FoodItemListType
}

const CartRestaurantCard: React.FC<CartRestaurantCardProps> = ({ item }) => {
  const dispatch = useDispatch();
  const resDetails = item?.card?.info;

  const handleDecreaseCartCount = (item: FoodItemListType) => {
    dispatch(decreaseCount(item));
  };

  const handleIncreaseCartCount = (item: FoodItemListType) => {
    dispatch(increaseCount(item));
  };

  const handleCrossClicked = (item: FoodItemListType) => {
    dispatch(removeItem(item));
  }

  return (
      <div
        className={"border p-3 rounded-2xl flex gap-6 ease-in-out hover:bg-gray-800 w-[600px] h-60 relative cursor-pointer"}
      >
        <img
          src={
            resDetails?.imageId
              ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/${resDetails?.imageId}`
              : "image"
          }
          alt={resDetails?.name}
          className="w-2/5 rounded-xl"
        />

        <div className="flex flex-col justify-between align-items-start w-3/5">
          {item?.count && item?.count > 1 ? <span className={'bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full absolute top-[-8px] right-[-8px] font-bold'}>X {item?.count}</span> : ''}
          <h3 className="text-2xl text-yellow-200">{item?.card?.info?.name}</h3>
          <ul>
            <li className="text-md">
              <span>ID:</span> <span>{resDetails?.id}</span>
            </li>
            <li className="text-md">
              <span>Name:</span> <span>{resDetails?.name}</span>
            </li>
            <li className="text-md">
              <span>IsVeg:</span> <span>{resDetails?.vegClassifier}</span>
            </li>
            <li className="text-md">
              <span>Price:</span> <span>{resDetails?.defaultPrice ? Math.ceil(resDetails?.defaultPrice/100) : Math.ceil(resDetails?.price/100)}</span>
            </li>

          </ul>
          <div>
            {
                <span className="flex justify-center items-center w-[100px] ms-auto bg-cyan-600 text-white rounded-md cursor-pointer">
                  <button
                      onClick={() => handleDecreaseCartCount(item)}
                      className="flex justify-center items-center m-auto px-2 pt-0.5 w-6/12 cursor-pointer text-3xl pb-1.5 active:bg-cyan-500 active:rounded-md"
                  >
                    -
                  </button>

                  <button
                      onClick={() => handleIncreaseCartCount(item)}
                      className="flex justify-center items-center m-auto px-3 py-1 pb-2 w-6/12 cursor-pointer text-2xl active:bg-cyan-500 active:rounded-md"
                  >
                    +
                  </button>
                </span>
            }
            {
                <button onClick={() => handleCrossClicked(item)} className={'cursor-pointer p-1 w-10 h-10 flex items-center justify-center rounded-full bg-red-200 absolute top-[-8px] left-[-8px]'}>❌</button>
            }
          </div>
        </div>
      </div>
  );
}

export default CartRestaurantCard;