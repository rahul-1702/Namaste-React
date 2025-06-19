import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function RestaurantDetail() {
  const params = useParams();
  const id: string = params.id || "0";
  const [restaurants, setRestaurants] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [info, setInfo] = useState<object>({});

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

  useEffect(() => {
    console.log("Restaurant Data:", info);
  }, [info]);

  if (loading)
    return (
      <h1 className="flex flex-col items-center justify-center h-lvh text-4xl">
        Loading...
      </h1>
    );

  return (
    <main className="flex flex-col items-center justify-center py-10">
      <div className="border p-3 rounded-2xl flex flex-col gap-6 w-[400px] h-150">
        <img
          src={
            info?.cloudinaryImageId
              ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/${info.cloudinaryImageId}`
              : ""
          }
          alt={info?.name}
          className="h-3/5 rounded-xl"
        />

        <div className="flex flex-col justify-start items-start h-2/5">
          <h3 className="text-2xl text-cyan-300 font-bold mb-2">
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
        </div>
      </div>
    </main>
  );
}
