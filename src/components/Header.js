import { LOGO_URL } from "../utils/constants"; 
import { useState} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {


  let [BtnName,setBtnName]=useState("Login")

  const onlineStatus=useOnlineStatus();

  return (
    <div className="flex justify-between bg-pink-200 lg:bg-amber-100">
      <div className="logo-container">
        <img
          className="w-40"
          src={LOGO_URL}
          alt="Logo"
        />
      </div>
      <div className="flex items-center">
        <ul className="flex m-8  ">
          <li className="px-2">Online Status : {onlineStatus ? "🟢" : "🔴" }</li>
          <li className="mx-3"><Link to="/">Home</Link></li>
          <li className="mx-3"><Link to="/about">About Us</Link></li>
          <li className="mx-3"><Link to="/contact">Contact Us</Link></li>
          <li className="mx-3">Cart</li>
          <li className="mx-3"><Link to="/grocery">Grocery</Link></li>
          <button className="mx-3" onClick={()=>{
            BtnName==="Login" ? setBtnName("Logout") : setBtnName("Login");
            }}>
            {BtnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;