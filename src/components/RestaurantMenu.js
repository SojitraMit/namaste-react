import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";

const RestaurantMenu = () => {
  const {resId}=useParams(); 

  const resInfo=useRestaurentMenu(resId);
  console.log(resInfo);
  

  if (!resInfo) return <Shimmer />;

  // Extract restaurant name
  const res = resInfo[2]?.card?.card?.info || "Restaurant";
  console.log(resInfo[2]?.card?.card?.info);

  // Extract itemCards array safely
  const itemCards =
    resInfo[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards || [];

  const list=resInfo[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  const cetegory=list.filter((c)=> 
    c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
    

  return (
    <div className="text-center">
      <h1 className="font-bold m-6 text-2xl">{res.name}</h1>
      {res.cuisines.map((cus)=>(
        
        <li className="flex text-center" key={cus}>{cus} </li>
      ))}
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
