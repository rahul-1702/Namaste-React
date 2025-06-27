import AllRestaurantCard from "./AllRestaurantCard";
import useFetchAllRestaurants from "../Hook/useFetchAllRestaurants.ts";
import loadingGif from "../assets/loader.gif";

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

const Dashboard = () => {
    const { restaurants, loading } = useFetchAllRestaurants();

    if (loading) return <div className="flex flex-col items-center justify-center h-dvh"><img className={'w-50 h-50'} src={loadingGif} alt={'Loading...'}/></div>;

    return (
        <div className="flex gap-10 flex-col justify-start items-center py-10 h-[100%] min-h-[100vh]">
            <section className="flex flex-col gap-4 items-center justify-center mt-20">
                <h2 className="text-center text-4xl text-cyan-300">All Restaurants</h2>
                <ul className="flex flex-wrap gap-5 items-center justify-center p-3">
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
    )
}

export default Dashboard;