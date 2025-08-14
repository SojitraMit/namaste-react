import { CDN_URL } from "../utils/constants";

// const styleCard = {
//   backgroundColor: "#f0f0f0",
//   borderRadius: "5px",
// };

const RestaurantCards = ({ resData }) => {
  const { name, cuisines, avgRating, sla, costForTwo, cloudinaryImageId } =
    resData.info;

  return (
    <div className="m-1 p-1 w-[208px] h-[350px] rounded-lg bg-gray-100 border-[1px] hover:bg-gray-300 ">
      <div className="h-[45%] w-[100%]  ">
        <img
          className="w-[100%] h-[100%] object-cover rounded-lg"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
          alt={name}
        />
      </div>
      <h3 className="font-bold py-2 text-lg ">{name}</h3>
      <h6 className="cuisine">{cuisines.join(", ")}</h6>
      <div id="rating">
        <h4 className="star">{avgRating} stars</h4>
        <h4 className="time">{sla.deliveryTime} mins</h4>
      </div>
      <h5 className="price">{costForTwo} </h5>
      <h6 className="off">
        {resData.info.aggregatedDiscountInfoV2?.header || "No Offer"}
      </h6>
    </div>
  );
};

// Higher order component
export const WithVegLable = () => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-green-400 px-3 rounded-lg m-1 mx-2 ">
          Vegetarian
        </label>
        <RestaurantCards {...props} />
      </div>
    );
  };
};

export const WithNonVegLable = () => {
  return (props) => (
    <div>
      <label className="absolute bg-red-700 rounded-lg px-3 m-1 mx-2 text-white">
        Non-veg.
      </label>
      <RestaurantCards {...props} />
    </div>
  );
};

export default RestaurantCards;
