import { useEffect ,useState} from "react";
import { MENU_API } from "./constants";

const useRestaurentMenu=(resId)=>{
    const [resInfo,setresInfo]=useState(null);


    useEffect(()=>{
        fetchData();
    }
    ,[]);

    const fetchData=async ()=>{
        const data=await fetch(MENU_API+resId);
        const json=await data.json();

        const restaurants = json?.data?.cards || [];
        setresInfo(restaurants);
    };

    return resInfo;
}

export default useRestaurentMenu;