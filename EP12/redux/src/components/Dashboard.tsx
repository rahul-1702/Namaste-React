import AllRestaurantCard from "./AllRestaurantCard";
import useFetchAllRestaurants from "../Hook/useFetchAllRestaurants.ts";
import loadingGif from "../assets/loader.gif";
import {type ChangeEvent, useEffect, useState} from "react";
import SimpleButton from "./SimpleButton.tsx";

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
    const [search, setSearch] = useState<string>('');
    const [filteredRestaurants, setFilteredRestaurants] = useState<RestaurantType[]>([]);

    const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }

    useEffect(() => {
        let timerForSearch: number;
        if (search.trim() !== ''){
            timerForSearch = setTimeout(() => {
                const resFilterList: RestaurantType[] = restaurants.filter((res: RestaurantType) => res?.info?.name.toLowerCase().includes(search.trim().toLowerCase()));
                setFilteredRestaurants(resFilterList);
            }, 500)
        }else{
            setFilteredRestaurants(restaurants);
        }

        return () => {
            clearTimeout(timerForSearch)
        }
    }, [search, restaurants]);

    if (loading) return <div className="flex flex-col items-center justify-center h-dvh"><img className={'w-50 h-50'} src={loadingGif} alt={'Loading...'}/></div>;

    return (
        <div className="flex gap-10 flex-col justify-start items-center py-10 h-[100%] min-h-[100vh]">
            <section className="flex flex-col gap-4 items-center justify-center mt-25 min-w-full">
                <div className={'flex items-center justify-between w-full px-4'}>
                    <div className={'w-2/9'}>
                        <SimpleButton text={'Back'} link={'/'}/>
                    </div>
                    <h2 className="text-center text-4xl text-cyan-300 w-5/9">All Restaurants</h2>
                    <input placeholder={'Search Restaurant'} className={'w-2/9 bg-white text-black outline-0 p-2 px-3 rounded-sm'} type='text' onChange={(e: ChangeEvent<HTMLInputElement>) => handleSearchInput(e)} value={search} />
                </div>
                    <ul className="flex flex-wrap gap-5 items-center justify-center p-3">
                    {
                        filteredRestaurants?.length > 0 ?
                            filteredRestaurants.map((restaurant: RestaurantType, index: number) => (
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