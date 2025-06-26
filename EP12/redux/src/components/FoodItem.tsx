import AddCartButton from "./AddCartButton.tsx";
import {addItem, decreaseCount, increaseCount} from "../Redux/AddToCart.ts";
import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "../Redux/Store.ts";
import * as React from "react";
import VegTag from "./VegTag.tsx";
import {toast} from "react-toastify";

export type IsVeg = "VEG" | "NONVEG";

export type FoodInfoType = {
    id: string,
    name: string,
    imageId: string,
    description: string,
    defaultPrice: number,
    price: number,
    vegClassifier: string,
    count: number,
    itemAttribute: {
        vegClassifier: IsVeg;
    }
}

export type FoodCardType = {
    info: FoodInfoType;
}

export type FoodItemListType = {
    card: FoodCardType,
    count?: number
}

interface FoodItemProps {
    foodItem: FoodItemListType;
}

const FoodItem: React.FC<FoodItemProps> = ({ foodItem }) => {
    // eslint-disable-next-line no-unsafe-optional-chaining
    const { name, imageId, description, defaultPrice, price, itemAttribute, id } = foodItem?.card?.info;
    const { vegClassifier } = itemAttribute;

    const dispatch = useDispatch();
    const cart = useSelector((state: RootState) => state.cart);

    const handleAddToCartClick = (item: FoodItemListType) => {
        const findItem = cart.some((it: FoodItemListType) => it?.card?.info?.id === id);
        if (!findItem) {
            dispatch(addItem(item))
            toast.success(item?.card?.info?.name + ' added to Cart');
        } else {
            toast.error(item?.card?.info?.name + " already added to cart !!");
        }
    };

    const handleDecreaseCartCount = (item: FoodItemListType) => {
        dispatch(decreaseCount(item));
    };

    const handleIncreaseCartCount = (item: FoodItemListType) => {
        dispatch(increaseCount(item));
    };

    return (
        <div className={'flex justify-between gap-12 p-3 my-2 border-1 border-gray-500 from-gray-900 to-cyan-950 bg-gradient-to-tl hover:from-gray-800 hover:to-cyan-850 ease-in-out transition-all cursor-pointer rounded-2xl lg:w-[900px] w-[90vw]'}>
            <div className={'w-4/6'}>
                <div className={'flex justify-between items-center'}>
                    <h2 className={'mb-3 text-xl m-2 text-yellow-200 '}>{name}</h2>
                    <VegTag vegClassifier={vegClassifier} />
                </div>
                <p className={'text-md m-2'}>{description}</p>
                <strong className={'text-cyan-400 m-2 text-xl'}>₹ {defaultPrice ? Math.ceil(defaultPrice/100) : Math.ceil(price/100)}</strong>
            </div>
            <div className={'relative'}>
                <img
                    src={
                        imageId
                            ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/${imageId}`
                            : "image"
                    }
                    alt={name}
                    className="rounded-lg object-cover w-[220px] h-50"
                />
                <span className={'absolute bottom-[-22px] left-[50%] translate-x-[-50%]'}>
                    <AddCartButton
                        increase={() => handleIncreaseCartCount(foodItem)}
                        decrease={() => handleDecreaseCartCount(foodItem)}
                        clicked={() => handleAddToCartClick(foodItem)} data={foodItem}/>
                </span>
            </div>
        </div>
    )
}

export default FoodItem;