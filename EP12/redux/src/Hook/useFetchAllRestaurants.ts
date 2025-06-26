import {useEffect, useState} from "react";
import type {RestaurantType} from "../components/Dashboard";

const useFetchAllRestaurants = () => {
    const [restaurants, setRestaurants] = useState<RestaurantType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

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
            } catch (err) {
                console.log("error : ", err);
            } finally {
                setLoading(false);
            }
        })();

    }, [])

    return { restaurants, loading };
}

export default useFetchAllRestaurants;