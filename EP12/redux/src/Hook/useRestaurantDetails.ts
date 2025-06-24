import {useEffect, useState} from "react";

const useRestaurantDetails = (id: { id: string }) => {
    const [res, setRes] = useState({});
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        if (!id) return;

        const FETCH_URL = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`;

        setLoading(true);
        fetch(FETCH_URL)
            .then(r => r.json())
            .then((data) => {
                setRes(data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[11]?.card?.card?.itemCards || []);
            }).catch((err) => {
                console.log("Err : ", err);
        })
            .finally(() => {
                setLoading(false);
        })
    }, [id]);

    return { res, loading };
}

export default useRestaurantDetails;