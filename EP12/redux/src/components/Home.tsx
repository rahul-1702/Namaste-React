import { useEffect, useState } from "react";

export default function Home() {
  // const [data, setData] = useState<string[]>([]);

  useEffect(() => {
    const FETCH_URL = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.45970&lng=77.02820&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
    (async () => {
      const response = await fetch(FETCH_URL);
      const json = await response.json();
      // if (json) {
      //   setData(json.restaurants);
      // }
      console.log("json : ", json);
    })();

  }, []);

  return (
    <div className="flex gap-10 flex-col">
      <h1>Welcome Redux Food Store</h1>
      <section>
        <h2>All Restaurants</h2>
        <ul>
          {/* {data &&
            data.length > 0 &&
            data.map((restaurant, index) => (
              <li key={index} className="border p-2">
                {restaurant}
              </li>
            ))} */}
        </ul>
      </section>
    </div>
  );
}
