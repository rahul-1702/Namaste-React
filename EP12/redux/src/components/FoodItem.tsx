import AddCartButton from "./AddCartButton";
import type {RestaurantType} from "./Home";
import {addItem, decreaseCount, increaseCount} from "../Redux/AddToCart.ts";
import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "../Redux/Store.ts";

interface FoodItemProps {
    item: RestaurantType;
    info: RestaurantType[];
}

const FoodItem: React.FC<FoodItemProps> = ({ item, info }) => {
    const { name, imageId, description } = item?.card?.info;

    const dispatch = useDispatch();
    const cart = useSelector((state: RootState) => state.cart);

    const handleAddToCartClick = (info: RestaurantType) => {
        const findItem = cart.some((item: RestaurantType) => item.id === info.id);
        if (!findItem) {
            dispatch(addItem(info))
        } else {
            alert(info.name + " already added to cart !!");
        }
    };

    const handleDecreaseCartCount = (info: RestaurantType) => {
        dispatch(decreaseCount(info));
    };

    const handleIncreaseCartCount = (info: RestaurantType) => {
        dispatch(increaseCount(info));
    };

    return (
        <div className={'flex justify-between gap-12 p-3 my-2 border-1 border-gray-500 rounded-2xl lg:w-[900px] w-[90vw]'}>
            <div className={'w-4/6'}>
                <h2 className={'mb-3 text-xl m-2 text-yellow-200 '}>{name}</h2>
                <p className={'mb-2 text-md m-2'}>{description}</p>
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
                <span className={'absolute bottom-[-22px] right-0'}><AddCartButton increase={handleIncreaseCartCount} decrease={handleDecreaseCartCount} clicked={handleAddToCartClick} data={info}/></span>
            </div>
        </div>
    )
}

export default FoodItem;