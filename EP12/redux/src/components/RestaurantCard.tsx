import { useNavigate } from "react-router-dom";

export default function RestaurantCard({ restaurant }: { restaurant: any }) {
  const navigate = useNavigate();

  const info = restaurant?.info;

  const handleToCardClick = () => {
    navigate("/restaurant/" + info?.id);
  };

  return (
    <li onClick={handleToCardClick} className="border p-2 text-white cursor-pointer">
      <h3>{info?.name}</h3>
      <p>ID: {info?.id}</p>
      <p>Rating: {info?.avgRating}</p>
      <p>Cuisines: {info?.cuisines?.join(", ")}</p>
      <p>Open: {info?.isOpen ? "Yes" : "No"}</p>
      <p>Cost for Two: {info?.costForTwo}</p>
      <p>Delivery Time: {info?.sla?.deliveryTime} mins</p>
      <img
        src={
          info?.cloudinaryImageId
            ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/${info.cloudinaryImageId}`
            : ""
        }
        alt={info?.name}
        width={100}
      />
    </li>
  );
}
