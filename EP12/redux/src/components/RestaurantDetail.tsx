import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useRestaurantFoodDetails from "../Hook/useRestaurantFoodDetails.ts";
import useFetchAllRestaurants from "../Hook/useFetchAllRestaurants.ts";
import type {ResDetails} from "./Home.tsx";
import FoodItem, { type FoodItemListType } from "./FoodItem.tsx";
import Header from "./Header.tsx";

export default function RestaurantDetail() {
  const params = useParams();
  const id: string = params.id || "0"
  const { res, loading } = useRestaurantFoodDetails(id);
  const { restaurants } = useFetchAllRestaurants();
  const [resInfo, setResInfo] = useState<ResDetails>();

  useEffect(() => {
    setResInfo(restaurants?.find((allRes) => allRes.info.id === id)?.info);
  }, [restaurants, id]);

  if (loading)
    return (
      <h1 className="flex flex-col items-center justify-center h-lvh text-4xl">
        Loading...
      </h1>
    );

  return (
    <main className="flex flex-col items-center justify-center py-10 px-5">
      <Header atc={true} />
      <div className="border p-3 rounded-2xl flex gap-6 w-[90vw] h-80 mt-20">
        <img
          src={
            resInfo?.cloudinaryImageId
              ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/${resInfo?.cloudinaryImageId}`
              : "image"
          }
          alt={resInfo?.name}
          className="w-2/5 rounded-xl object-cover object-top"
        />

        <div className="flex flex-col justify-start items-start w-3/5">
          <h3 className="text-2xl text-cyan-300 font-bold mb-4 mt-4">
            {resInfo?.name}
          </h3>
          <ul>
            <li className="text-md">
              <span>ID:</span> <span>{resInfo?.id}</span>
            </li>
            <li className="text-md">
              <span>Rating:</span> <span>{resInfo?.avgRating}</span>
            </li>
            <li className="text-md">
              <span>Cuisines:</span> <span>{resInfo?.cuisines?.join(", ")}</span>
            </li>
            <li className="text-md">
              <span>Open:</span> <span>{resInfo?.isOpen ? "Yes" : "No"}</span>
            </li>
            <li className="text-md">
              <span>Cost for Two:</span> <span>{resInfo?.costForTwo}</span>
            </li>
            <li className="text-md">
              <span>Delivery Time:</span>{" "}
              <span>{resInfo?.sla?.deliveryTime} mins</span>
            </li>
          </ul>
        </div>
      </div>
      <hr className={'text-gray-500 w-full h-1 mt-15'}/>
      <div className={'flex flex-col items-center justify-center'}>
        <h2 className={'text-2xl mt-10 text-cyan-400'}>Popular Items of {resInfo?.name}</h2>
        <ul className={'my-5 flex flex-col gap-4 items-center max-w-4xl'}>
          {
            res && res.length > 0 && res.map((item: FoodItemListType, index: number) => (<li key={index}>
                    <FoodItem foodItem={item}/>
                </li>
              )
            )
          }
        </ul>
      </div>
    </main>
  );
}
