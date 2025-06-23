import { Link } from "react-router-dom";
import {decreaseCount, increaseCount} from "../Redux/AddToCart";
import {useDispatch} from "react-redux";
import type {RestaurantType} from "./Home.tsx";

export default function RestaurantCard({ restaurant, cartMode }: { restaurant: RestaurantType, cartMode: boolean }) {
  const info = cartMode ? restaurant : restaurant;
  const dispatch = useDispatch();

  const handleDecreaseCartCount = (info: RestaurantType) => {
    dispatch(decreaseCount(info));
  };

  const handleIncreaseCartCount = (info: RestaurantType) => {
    dispatch(increaseCount(info));
  };

  return (
    <Link
      to={(!cartMode ? "/restaurant/" + info?.id : '')}
      className={"border p-3 rounded-2xl flex gap-6 ease-in-out hover:bg-gray-800 w-[600px] h-60 " + (!cartMode ? 'cursor-pointer' : '')}
    >
      <img
        src={
          info?.cloudinaryImageId
            ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/${info.cloudinaryImageId}`
            : "image"
        }
        alt={info?.name}
        className="w-2/5 rounded-xl"
      />

      <div className="flex flex-col justify-evenly align-items-start w-3/5 relative">
        {cartMode && info?.count && info?.count > 1 ? <span className={'bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full absolute top-[-15px] right-[-15px] font-bold'}>X {info.count}</span> : ''}
        <h3 className="text-2xl text-yellow-200">{info?.name}</h3>
        <ul>
          <li className="text-md">
            <span>ID:</span> <span>{info?.id}</span>
          </li>
          <li className="text-md">
            <span>Rating:</span> <span>{info?.avgRating}</span>
          </li>
          <li className="text-md">
            <span>Cuisines:</span> <span>{info?.cuisines?.join(", ")}</span>
          </li>
          <li className="text-md">
            <span>Open:</span> <span>{info?.isOpen ? "Yes" : "No"}</span>
          </li>
          <li className="text-md">
            <span>Cost for Two:</span> <span>{info?.costForTwo}</span>
          </li>
          <li className="text-md">
            <span>Delivery Time:</span>{" "}
            <span>{info?.sla?.deliveryTime} mins</span>
          </li>
          {
            cartMode && <li>
              <span className="flex justify-center items-center w-[100px] ms-auto bg-cyan-600 text-white rounded-md cursor-pointer absolute bottom-0 right-0">
                <button
                    onClick={() => handleDecreaseCartCount(info)}
                    className="flex justify-center items-center m-auto px-2 pt-0.5 w-6/12 cursor-pointer text-3xl pb-1.5 active:bg-cyan-500 active:rounded-md"
                >
                  -
                </button>

                <button
                    onClick={() => handleIncreaseCartCount(info)}
                    className="flex justify-center items-center m-auto px-3 py-1 pb-2 w-6/12 cursor-pointer text-2xl active:bg-cyan-500 active:rounded-md"
                >
                  +
                </button>
            </span>
          </li>
          }
        </ul>
      </div>
    </Link>
  );
}