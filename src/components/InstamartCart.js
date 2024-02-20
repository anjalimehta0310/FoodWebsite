import { IMG_URL} from "../constant";

const InstamartCart=({displayName,imageId})=>{

    return (
        <div className="w-32 p-2 m-2 shadow-lg bg-pink-50 border border-black">
        <img className="w-full h-32 object-cover" src={IMG_URL + imageId} alt={displayName} />
        <h2 className="font-bold text-sm mt-2">{displayName}</h2>
      </div>
      

    )
}; 

export default InstamartCart;