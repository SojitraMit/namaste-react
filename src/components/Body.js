import RestaurantCards from "./RestaurantCards";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
// Always use useState in function component.  
  const [ResList,setResList]=useState([]);
  const [searchText,setsearchText]=useState("");
  const [filterResList,setfilterResList]=useState([]);

  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData=async()=>{
    const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.7644725&lng=72.15193040000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json=await data.json();

    console.log(json);
    const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    setResList(restaurants || []);
    setfilterResList(restaurants || []);
  };

  console.log("render2");


  return ResList.length === 0 ?(<Shimmer/>) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText} 
          onChange={(e)=>{
            setsearchText(e.target.value);
          }}>
            
          </input>
          <button onClick={()=>{
            const filterRes=ResList.filter((res)=>
               res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setfilterResList(filterRes);
          }} >search</button>
        </div>
        <button className="filter-btn" onClick={()=>{
        const filter=ResList.filter(
          (res)=>res.info.avgRating > 4.5
        );
        setfilterResList(filter);
      }}
      > Top rated restaurant</button>
      </div>
      
      <div className="res-container" > 
        {filterResList.map((restaurant) => (
      <Link to={"/restaurant/" + restaurant.info.id} key={restaurant.info.id}>
        <RestaurantCards resData={restaurant} />
      </Link>
))}

      </div>
    </div>
  );
};

export default Body;