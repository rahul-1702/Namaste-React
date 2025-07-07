import { Link } from "react-router-dom";
import type { ResDetails } from "./Dashboard";
import * as React from "react";

interface AllRestaurantCardProps {
   restaurant: ResDetails
}

const AllRestaurantCard: React.FC<AllRestaurantCardProps> = ({ restaurant }) => {

  return (
      <>
      <Link
        to={"/restaurant/" + restaurant?.id}
        className={"border p-3 rounded-2xl flex gap-6 hover:to-cyan-700 hover:from-gray-800 bg-gradient-to-tl from-gray-900 to-cyan-800 hover:scale-102 ease-in-out transition-all w-[600px] h-60 relative cursor-pointer"}
      >
        <img
          src={
            restaurant?.cloudinaryImageId
              ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/${restaurant.cloudinaryImageId}`
              : "image"
          }
          alt={restaurant?.name}
          className="w-2/5 rounded-xl"
        />

        <div className="flex flex-col justify-start items-start w-3/5">
            <h3 className="text-2xl text-yellow-200 mb-4">{restaurant?.name}</h3>
          <ul>
            <li className="text-md">
              <span>ID:</span> <span>{restaurant?.id}</span>
            </li>
            <li className="text-md">
              <span>Name:</span> <span>{restaurant?.name}</span>
            </li>
            <li className="text-md">
              <span>Delivery Time:</span> <span>{restaurant?.sla?.deliveryTime}</span>
            </li>
            <li className="text-md">
              <span>Rating:</span> <span>{restaurant?.avgRating}</span>
            </li>
            <li className="text-md">
              <span>CostForTwo:</span> <span>{restaurant?.costForTwo}</span>
            </li>
          </ul>
        </div>
      </Link>
    </>
  );
}

export default AllRestaurantCard;
