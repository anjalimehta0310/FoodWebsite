import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constant";
import Shimmer from "./Shimmer";
import UseRestarurant from "../Utilis/useRestarurant";
import { addItem } from "../Utilis/cardSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurant = UseRestarurant(resId);
  const [menu, setMenu] = useState({});
  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  useEffect(() => {
    getMenuInfo();
  }, []);

  async function getMenuInfo() {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7022686&lng=77.4192428&restaurantId=" +
          resId +
          "&catalog_qa=undefined&submitAction=ENTER"
      );
      const json = await data.json();
      console.log(json);
      setMenu(json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
    } catch (error) {
      console.log("error fetching", error);
    }
  }

  return restaurant === null ? (
    <Shimmer />
  ) : (
    <div className="flex">
      <div className="w-1/2 p-4">
        <h1 className="text-xl font-bold mb-2">Restaurant ID: {resId}</h1>
        <h1 className="text-2xl font-bold mb-2">{restaurant?.name}</h1>
        <img
          src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
          className="w-80 h-80 bg-gray-300 flex items-center justify-center text-gray-600 text-xs font-bold p-5 rounded-lg"
        />
        <h1 className="text-lg mb-2 font-bold ">{restaurant?.areaName}</h1>
        <div className="flex items-center mb-2">
          <span className="mr-1 text-lg font-medium ">{restaurant?.avgRating}</span>
          <div className="flex">
            <svg className="w-5 h-5 text-yellow-950 fill-current">
              <path d="M12 1l3.09 9.49L22 10.36l-7.42 5.38L17.55 23 12 18.49 6.45 23l2.97-7.26L2 10.36l6.91.13L12 1zm0 2.93L9.78 9.34 3.76 11.03l5.58 4.05L7.82 21.07 12 17.17l4.18 3.9-1.52-5.99 5.58-4.05-6.02-.69L12 3.93z"></path>
            </svg>
          </div>
        </div>
        <h1 className="mr-1 text-lg font-medium">{restaurant?.city}</h1>
        <h1 className="mr-1 text-lg font-medium">{restaurant?.costForTwoMessage}</h1>
      </div>
      <div className="w-1/2 p-4">
        <h1 className="text-xl font-bold mb-4">MENU</h1>
        <ul className="space-y-4">
          {menu && Object.values(menu).map((item) => (
            <li key={item?.card?.info?.id} className="flex items-center">
              <img src={IMG_CDN_URL + item?.card?.info?.imageId} className="w-32 h-32 rounded-lg mr-4" />
              <div className="flex flex-col">
                <div className="flex items-center mb-1">
                  <h2 className="text-lg font-semibold mr-2 ">{item?.card?.info?.name}</h2>
                  <button className="py-1 px-2 bg-gray-600 text-white rounded-md transition-colors duration-300 hover:bg-green-700 text-xs" onClick={() => addFoodItem(item)}>
                    Add
                  </button>
                </div>
                <p className="text-sm">{item?.card?.info?.description}</p>
                <p className="text-sm font-bold">Rupees: {item?.card?.info?.price/100}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
