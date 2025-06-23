import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import {useDispatch, useSelector} from "react-redux";
import {addItem, increaseCount, decreaseCount} from "../Redux/AddToCart";
import type {RootState} from "../Redux/Store";
import type {RestaurantType} from "./Home.tsx";

export default function RestaurantDetail() {
  const params = useParams();
  const id: string = params.id || "0";
  const [restaurants, setRestaurants] = useState<unknown[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [info, setInfo] = useState<RestaurantType>();
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);

  useEffect(() => {
    const FETCH_URL =
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.45970&lng=77.02820&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
    (async () => {
      try {
        const response = await fetch(FETCH_URL);
        const json = await response.json();
        const restaurantArr =
          json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;
        setRestaurants(restaurantArr);
      } catch (error) {
        console.error("Failed to fetch restaurants:", error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    setInfo(restaurants.find((res) => res?.info?.id === id)?.info || {});
  }, [restaurants, id]);

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

  if (loading)
    return (
      <h1 className="flex flex-col items-center justify-center h-lvh text-4xl">
        Loading...
      </h1>
    );

  return (
    <main className="flex flex-col items-center justify-center py-10">
      <Header atc={true} />
      <div className="border p-3 rounded-2xl flex flex-col gap-6 w-[420px] h-180 mt-20">
        <img
          src={
            info?.cloudinaryImageId
              ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/${info.cloudinaryImageId}`
              : "image"
          }
          alt={info?.name}
          className="h-3/5 rounded-xl"
        />

        <div className="flex flex-col justify-between items-start h-2/5">
          <h3 className="text-2xl text-cyan-300 font-bold mb-1">
            {info?.name}
          </h3>
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
          </ul>
          <span className="flex justify-center items-center w-[180px] ms-auto bg-cyan-600 text-white rounded-md cursor-pointer">
            <button
              onClick={() => handleDecreaseCartCount(info)}
              className="flex justify-center items-center m-auto px-3 py-0 w-3/12 cursor-pointer text-4xl pb-1 active:bg-cyan-500 active:rounded-md"
            >
              -
            </button>
            <button
              onClick={() => handleAddToCartClick(info)}
              className="bg-gray-600 px-4 py-2 w-6/12 text-center rounded-sm cursor-pointer active:bg-gray-500 active:rounded-md"
            >
              Add
            </button>
            <button
              onClick={() => handleIncreaseCartCount(info)}
              className="flex justify-center items-center m-auto px-3 py-1 w-3/12 cursor-pointer text-3xl active:bg-cyan-500 active:rounded-md"
            >
              +
            </button>
          </span>
        </div>
      </div>
    </main>
  );
}