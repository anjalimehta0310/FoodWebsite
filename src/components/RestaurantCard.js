 import { IMG_CDN_URL } from "../constant";

const ResturantCard=({name,cuisines,cloudinaryImageId,avgRating})=>{

    return (
        <div className="w-56 p-2 m-2 shadow-lg bg-pink-50 border-2 border-black">
            <img src={IMG_CDN_URL+ cloudinaryImageId}/>
            <h2 className="font-bold text-2xl">{name}</h2>
            <h3 className="font-bold text-sm">{cuisines.join(" ,")}</h3>
            <h4 className="font-bold text-xs">{avgRating}star</h4>

        </div>
    )
}; 

export default ResturantCard;