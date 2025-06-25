import Header from "./Header.tsx";
import CartRestaurantCard from "./CartRestaurantCard.tsx";
import {useSelector} from "react-redux";
import type {RootState} from "../Redux/Store.ts";
import { Link } from "react-router";
import type {FoodItemListType} from "./FoodItem.tsx";

const CartPage = () => {
    const cartData: FoodItemListType[] = useSelector((state: RootState) => state.cart);

    return <div className="flex gap-10 flex-col justify-center align-items-center py-10">
        <Header atc={true}/>
        <section className="flex flex-col gap-4 items-center justify-center mt-20">
            <div className={'flex items-center justify-center gap-5'}>
                <button onClick={() => history.back()} className={'text-center bg-cyan-800 text-white w-20 px-2 py-1 rounded-md m-auto cursor-pointer'}>Back</button>
                <h2 className="text-center text-4xl text-cyan-300">Selected Restaurants</h2>
            </div>
            <ul className="flex flex-wrap gap-x-7 gap-y-5 align-items-center justify-center p-3">
                {cartData?.length > 0 ?
                    cartData.map((item: FoodItemListType, index: number) => (
                        <CartRestaurantCard
                            key={item?.card?.info?.id || index}
                            item={item}
                        />
                    )) : <span className={'flex items-center gap-2'}><p className={'italic text-gray-400'}>Cart is Empty !!</p> <Link to={'/'} className={'px-2 py-1 bg-cyan-800 text-white rounded-sm'}>Shop Now</Link></span>
                }
            </ul>
        </section>
    </div>
}

export default CartPage;