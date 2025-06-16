import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState<any>();
  const [restaurants, setRestaurants] = useState({});

  useEffect(() => {
    const FETCH_URL =
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.45970&lng=77.02820&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
    (async () => {
      const response = await fetch(FETCH_URL);
      const json = await response.json();
      if (json) {

        setData(
          json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );

        setRestaurants({
          name: data?.info?.name,
          id: data?.info?.name,
          rating: data?.info?.avgRating,
          cuisines: data?.info?.cuisines,
          isOpen: data?.info?.isOpen,
          costForTwo: data?.info?.costForTwo,
          deliveryTime: data?.info?.sla?.deliveryTime,
          cloudinaryImageId: data?.info?.cloudinaryImgeId,
        });
      }
    })();
  }, []);

  useEffect(() => {
    console.log("Data fetched:", restaurants);
  }, [data, restaurants]);

  return (
    <div className="flex gap-10 flex-col">
      <h1>Welcome Redux Food Store</h1>
      <section>
        <h2>All Restaurants</h2>
        {/* <ul>
          {data &&
            data.length > 0 &&
            data.map((restaurant, index) => (
              <li key={index} className="border p-2 text-white">
              
              </li>
            ))}
        </ul> */}
      </section>
    </div>
  );
}
