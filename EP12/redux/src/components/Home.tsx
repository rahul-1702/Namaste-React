import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";

export default function Home() {
  const [restaurants, setRestaurants] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

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
    console.log("Restaurants fetched:", restaurants);
  }, [restaurants]);

  if (loading) return <h1 className="flex flex-col items-center justify-center h-lvh text-4xl">Loading...</h1>;

  return (
    <div className="flex gap-10 flex-col justify-center align-items-center py-10">
      <h1 className="text-center text-4xl text-red-100 bg-cyan-800 py-4 border-1 border-cyan-300 rounded-2xl fixed w-full top-2">Redux - Food Store</h1>
      <section className="flex flex-col gap-4 align-items-center justify-center mt-20">
        <h2 className="text-center text-4xl text-cyan-300">All Restaurants</h2>
        <ul className="flex flex-wrap gap-4 align-items-center justify-center p-2">
          {restaurants?.length > 0 &&
            restaurants.map((restaurant, index) => (
              <RestaurantCard
                key={restaurant?.info?.id || index}
                restaurant={restaurant}
              />
            ))}
        </ul>
      </section>
    </div>
  );
}
