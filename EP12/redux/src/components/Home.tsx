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

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="flex gap-10 flex-col">
      <h1>Welcome Redux Food Store</h1>
      <section>
        <h2>All Restaurants</h2>
        <ul>
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
