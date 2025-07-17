import { CDN_URL } from "../utils/constants";

const styleCard = {
  backgroundColor: "#f0f0f0",
  borderRadius: "5px",
};

const RestaurantCards = ({ resData }) => {
  const { name, cuisines, avgRating, deliveryTime, costForTwo, cloudinaryImageId } = resData.info;
  return (
    <div className="res-card" style={styleCard}>
      <div className="res-logo">
        <img
          src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
    cloudinaryImageId}
          alt={name}
        />
      </div>
      <h3>{name}</h3>
      <h6 className="cuisine">{cuisines.join(", ")}</h6>
      <div id="rating">
        <h4 className="star">{avgRating} stars</h4>
        <h4 className="time">{deliveryTime} mins</h4>
      </div>
      <h5 className="price">₹{costForTwo / 100} FOR TWO</h5>    
      <h6 className="off">{resData.info.aggregatedDiscountInfoV2?.header || "No Offer"}</h6>
    </div>
  );
};

export default RestaurantCards;