import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useRestaurantFoodDetails from "../Hook/useRestaurantFoodDetails.ts";
import useFetchAllRestaurants from "../Hook/useFetchAllRestaurants.ts";
import type {ResDetails} from "./Dashboard.tsx";
import FoodItem, { type FoodItemListType } from "./FoodItem.tsx";
import loadingGif from "../assets/loader.gif";

export default function RestaurantDetail() {
  const params = useParams();
  const id: string = params.id || "0"
  const { res, loading } = useRestaurantFoodDetails(id);
  const { restaurants } = useFetchAllRestaurants();
  const [resInfo, setResInfo] = useState<ResDetails>();

  useEffect(() => {
    setResInfo(restaurants?.find((allRes) => allRes.info.id === id)?.info);
  }, [restaurants, id]);

  if (loading) return <div className="flex flex-col items-center justify-center h-dvh"><img className={'w-50 h-50'} src={loadingGif} alt={'Loading...'}/></div>;

  return (
    <main className="flex flex-col items-center justify-start py-10 px-5 h-[100%] min-h-[100vh]">
      <div className="border p-3 rounded-2xl flex gap-6 w-[90vw] h-80 mt-20 from-gray-900 to-cyan-500 to-10% from-90% bg-gradient-to-br">
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
        <h2 className={'text-2xl mt-10 text-white'}>Popular Items of {resInfo?.name}</h2>
        <ul className={'my-5 flex flex-col gap-4 items-center max-w-4xl'}>
          {
            res && res.length > 0 ? res.map((item: FoodItemListType, index: number) => (<li key={index}>
                    <FoodItem foodItem={item}/>
                </li>
              )
            ) : <p className={'italic text-gray-400'}>No Items Found !!</p>
          }
        </ul>
      </div>
    </main>
  );
}
