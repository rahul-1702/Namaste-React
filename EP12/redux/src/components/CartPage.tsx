import Header from "./Header";
import RestaurantCard from "./RestaurantCard";
import {useSelector} from "react-redux";
import type {RootState} from "../Redux/Store.ts";
import type {RestaurantType} from "./Home";
import { Link } from "react-router";

const CartPage = () => {
    const cartData: RestaurantType[] = useSelector((state: RootState) => state.cart);

    return <div className="flex gap-10 flex-col justify-center align-items-center py-10">
        <Header atc={true}/>
        <section className="flex flex-col gap-4 align-items-center justify-center mt-20">
            <h2 className="text-center text-4xl text-cyan-300">Selected Restaurants</h2>
            <ul className="flex flex-wrap gap-4 align-items-center justify-center p-3">
                {cartData?.length > 0 ?
                    cartData.map((restaurant: RestaurantType, index: number) => (
                        <RestaurantCard
                            key={restaurant?.id || index}
                            restaurant={restaurant}
                            cartMode={true}
                        />
                    )) : <span className={'flex items-center gap-2'}><p className={'italic text-gray-400'}>Cart is Empty !!</p> <Link to={'/'} className={'px-2 py-1 bg-cyan-800 text-white rounded-sm'}>Shop Now</Link></span>
                }
            </ul>
        </section>
    </div>
}

export default CartPage;