import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";

const RestaurantMenu = () => {
  const {resId}=useParams(); 

  const resInfo=useRestaurentMenu(resId);
  console.log(resInfo);
  

  if (!resInfo) return <Shimmer />;

  // Extract restaurant name
  const resName = resInfo[2]?.card?.card?.info?.name || "Restaurant";

  // Extract itemCards array safely
  const itemCards =
    resInfo[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards || [];

  return (
    <div className="menu">
      <h1>{resName}</h1>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item?.card?.info?.id}>{item?.card?.info?.name}-{item?.card?.info?.finalPrice/100 || 500}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
