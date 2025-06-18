import { Link } from "react-router-dom";

export default function RestaurantCard({ restaurant }: { restaurant: any }) {
  const info = restaurant?.info;

  return (
    <Link
      to={"/restaurant/" + info?.id}
      className="border p-3 rounded-2xl cursor-pointer flex gap-6 ease-in-out hover:bg-gray-800 w-[600px] h-60"
    >
      <img
        src={
          info?.cloudinaryImageId
            ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/${info.cloudinaryImageId}`
            : ""
        }
        alt={info?.name}
        className="w-2/5 rounded-xl"
      />

      <div className="flex flex-col justify-evenly align-items-start w-3/5">
        <h3 className="text-2xl text-yellow-200">{info?.name}</h3>
        <ul>
          <li className="text-md">
            <span>ID:</span> <span>{info?.id}</span>
          </li>
          <li className="text-md">
            <span>Rating:</span> <span>{info?.avgRating}</span>
          </li>
          <li className="text-md">
            <span>Cuisines:</span> <span>{info?.cuisines?.join(", ")}</span>
          </li>
          <li className="text-md">
            <span>Open:</span> <span>{info?.isOpen ? "Yes" : "No"}</span>
          </li>
          <li className="text-md">
            <span>Cost for Two:</span> <span>{info?.costForTwo}</span>
          </li>
          <li className="text-md">
            <span>Delivery Time:</span>{" "}
            <span>{info?.sla?.deliveryTime} mins</span>
          </li>
        </ul>
      </div>
    </Link>
  );
}
