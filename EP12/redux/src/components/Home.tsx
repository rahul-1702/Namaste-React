import Header from "./Header.tsx";
import useFetchRestaurants from "../Hook/useFetchAllRestaurants.ts";
import AllRestaurantCard from "./AllRestaurantCard.tsx";

export type ResDetails = {
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

export type RestaurantType = {
  info: ResDetails
}

export default function Home() {
  const { restaurants, loading } = useFetchRestaurants();

  if (loading) return <h1 className="flex flex-col items-center justify-center h-lvh text-4xl">Loading...</h1>;

  return (
    <div className="flex gap-10 flex-col justify-center align-items-center py-10">
      <Header atc={true}/>
      <section className="flex flex-col gap-4 align-items-center justify-center mt-20">
        <h2 className="text-center text-4xl text-cyan-300">All Restaurants</h2>
        <ul className="flex flex-wrap gap-4 align-items-center justify-center p-3">
          {
            restaurants?.length > 0 ?
              restaurants.map((restaurant: RestaurantType, index: number) => (
                <AllRestaurantCard
                  key={restaurant?.info?.id || index}
                  restaurant={restaurant?.info}
                />
              )) : <p className={'italic text-gray-400'}>No Restaurant Found !!</p>
          }
        </ul>
      </section>
    </div>
  );
}
