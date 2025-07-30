import { useState , useEffect } from "react";

const User=({name,location})=>{
    const[count]=useState(0);

    // useEffect(()=>{
    //     fetchMenu();
    // },[])

    // const fetchMenu = async () => {
    //     const data = await fetch(
    //      "https://api.github.com/users/SojitraMit");
    //     const json = await data.json();
    //     console.log(json);
    // };

    return( <div className="user">
            <h3>Count={count}</h3>
            <h2>Name : {name} </h2>
            <h3>Location : {location}</h3>
        </div>
    );
};

export default User;