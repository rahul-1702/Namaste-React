import CartRestaurantCard from "./CartRestaurantCard";
import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "../Redux/Store.ts";
import type {FoodItemListType} from "./FoodItem";
import loadingGif from "../assets/loader.gif";
import SimpleButton from "./SimpleButton";
import useCartTotal from "../Hook/useCartTotal.ts";
import {clearCart} from "../Redux/AddToCart.ts";

const CartPage = () => {
    const cartData: FoodItemListType[] = useSelector((state: RootState) => state.cart);
    const { total } = useCartTotal();
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    if (!cartData) return <div className="flex flex-col items-center justify-center h-dvh"><img className={'w-50 h-50'} src={loadingGif} alt={'Loading...'}/></div>;

    return <div className="flex gap-10 flex-col justify-start items-center py-10 h-[100%] min-h-[100vh]">
        <section className="flex flex-col gap-8 items-center justify-center mt-25 min-w-full">
            <div className={'flex items-center justify-between w-full px-4'}>
                <div className={'w-2/10'}>
                    <SimpleButton text={'Back'} link={'back'}/>
                </div>
                <h2 className="text-center text-4xl text-cyan-300 w-6/10">Selected Items</h2>
                <div className={'w-2/10 flex items-center justify-end gap-3'}>
                    <p className={'flex gap-2 text-2xl mt-1 bg-gray-700 rounded-md px-6 py-2'}><span>Total - </span><span className={'font-extrabold text-yellow-200'}>₹{total}</span></p>
                    <button onClick={handleClearCart} className={'text-4xl scale-110 active:scale-100 hover:scale-120 ease-in-out transition-all cursor-pointer'}>🆑</button>
                </div>
            </div>
            <ul className="flex flex-wrap gap-x-8 gap-y-6 items-center justify-center p-3">
                {cartData?.length > 0 ?
                    cartData.map((item: FoodItemListType, index: number) => (
                        <CartRestaurantCard
                            key={item?.card?.info?.id || index}
                            item={item}
                        />
                    )) : <span className={'flex items-center gap-2'}><p className={'italic text-gray-400'}>Cart is Empty !!</p> <SimpleButton link={'/dashboard'} text={'Shop Now'}/></span>
                }
            </ul>
        </section>
    </div>
}

export default CartPage;