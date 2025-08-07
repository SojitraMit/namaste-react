import RestaurantCards,{WithVegLable,WithNonVegLable} from "./RestaurantCards";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
// Always use useState in function component.  
  const [ResList,setResList]=useState([]);
  const [searchText,setsearchText]=useState("");
  const [filterResList,setfilterResList]=useState([]);

  const ResCardVeg=WithVegLable();
  const ResCardNonVeg=WithNonVegLable();

  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData=async()=>{
    const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.7644725&lng=72.15193040000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json=await data.json();

    const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    setResList(restaurants || []);
    setfilterResList(restaurants || []);
  };

  

  const onlineStatus=useOnlineStatus();

  if(onlineStatus===false){
    return <h1>Looks like you are offline !! Pleace check your internet connection </h1>;
  } 

  return ResList.length === 0 ?(<Shimmer/>) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-2 p-2">
          <input type="text" className="border border-solid border-black" value={searchText} 
          onChange={(e)=>{
            setsearchText(e.target.value);
          }}>
            
          </input>
          <button className="m-2 px-3 py-0.5 bg-green-200 rounded-lg" onClick={()=>{
            const filterRes=ResList.filter((res)=>
               res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setfilterResList(filterRes);
          }} >search</button>
        </div >
          <div className="flex items-center">
            <button className="border border-solid border-black px-2 mx-5 rounded-lg " onClick={()=>{
            const filter=ResList.filter(
            (res)=>res.info.avgRating > 4.5
          );
          setfilterResList(filter);
          }}
          > Top rated restaurant</button>
          </div>
        </div>
        
      
      <div className="flex flex-wrap" > 
        {filterResList.map((restaurant) => (
      <Link to={"/restaurant/" + restaurant.info.id} key={restaurant.info.id}>
        {
          restaurant.info.veg ? (<ResCardVeg resData={restaurant} />) : (<ResCardNonVeg resData={restaurant} />)
        }
        
      </Link>
))}

      </div>
    </div>
  );
};

export default Body;