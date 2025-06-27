import type {FoodItemListType} from "../components/FoodItem";
import {useSelector} from "react-redux";
import type {RootState} from "../Redux/Store.ts";
import {useEffect, useState} from "react";

const useCartTotal = () => {
    const [total, setTotal] = useState<number>(0);
    const cartData = useSelector((state: RootState) =>  state?.cart);

    useEffect(() => {

        const itemTotal: number = cartData.reduce((acc: number, item: FoodItemListType) => {
            if (item?.card?.info?.defaultPrice) {
                acc += ((item?.count || 1) * (Math.ceil(item?.card?.info?.defaultPrice / 100)));
            } else {
                acc += ((item?.count || 1) * (Math.ceil(item?.card?.info?.price / 100)));
            }

            return acc;
        }, 0);

        setTotal(itemTotal);

    }, [cartData]);

    return {total};
}

export default useCartTotal;