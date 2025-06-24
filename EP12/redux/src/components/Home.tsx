import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Header from "./Header";

export type RestaurantType = {
  id: string,
  name: string,
  avgRating: string,
  cuisines: string[],
  isOpen: boolean,
  costForTwo: string,
  sla: {
    deliveryTime: number
  },
  count?: number,
  cloudinaryImageId: string
}

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

  if (loading) return <h1 className="flex flex-col items-center justify-center h-lvh text-4xl">Loading...</h1>;

  return (
    <div className="flex gap-10 flex-col justify-center align-items-center py-10">
      <Header atc={true}/>
      <section className="flex flex-col gap-4 align-items-center justify-center mt-20">
        <h2 className="text-center text-4xl text-cyan-300">All Restaurants</h2>
        <ul className="flex flex-wrap gap-4 align-items-center justify-center p-3">
          {
            restaurants?.length > 0 ?
              restaurants.map((restaurant, index) => (
                <RestaurantCard
                  key={restaurant?.info?.id || index}
                  restaurant={restaurant?.info}
                  cartMode={false}
                />
              )) : <p className={'italic text-gray-400'}>No Restaurant Found !!</p>
          }
        </ul>
      </section>
    </div>
  );
}
