import { useEffect, useState } from "react";
import {resturanList} from "../constant"
import ResturantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../Utilis/helper";
import useOnline from "../Utilis/useOnline";



const Body=()=>{
    const [allRestaurants,setAllRestaurants]=useState([]);
    const [searchText,setSearchText]=useState("");
    const [filterRestaurants,setFilterRestaurants]=useState([]);

    useEffect(()=>{
        getRestaurants();
    },[]);
    

    const isOnline=useOnline();
    if(!isOnline){
        return <h1>🔴OOPS!!! you are offline</h1>
    }
    async function getRestaurants(){
        try{
            const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7022686&lng=77.4192428&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const json= await data.json();
             console.log(json);
            setAllRestaurants(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setFilterRestaurants(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        }
        catch(err){
            console.log(err);
        }
       
        
     }
     if(!allRestaurants) return null;
    // if(filterRestaurants?.length===0) return <h1>No restaurant found</h1>
    
    return (allRestaurants.length === 0)?(
    <Shimmer/>
    ):(
        <>  
            <div className="search-container p-5 bg-pink-50 my-2 border-4 ">
                <input type="text"
                 className="focus:bg-gray-400" 
                 placeholder="Search" 
                 value={searchText}
                 onChange={(e)=>{
                    setSearchText(e.target.value);
                 }}/>
                <button className="p-2 m-2 bg-purple-400 hover:bg-gray-200 rounded-lg" 
                onClick={()=>{
                    //need to filter the data
                    const data=filterData(searchText,allRestaurants);
                    //update the filter data
                    setFilterRestaurants(data);

                }}>Search</button>
            </div>
            <div className="flex flex-wrap">
            {filterRestaurants.map((restaurant)=>{
                return (
                <Link to={"/restaurant/"+ restaurant.info.id} key={restaurant.info.id}>
                    <ResturantCard {...restaurant?.info}/></Link>
                )
            })}

            </div>
        </>
    )
};


export default Body
