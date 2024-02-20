import { IMG_CDN_URL } from "../constant";

const FoodItem = ({ item }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 flex items-center space-x-4">
            <img src={IMG_CDN_URL + item?.card?.info?.imageId} className="w-32 h-32 rounded-md" />
            <div>
                <h2 className="text-lg font-semibold">{item?.card?.info?.name}</h2>
                <p className="text-sm">{item?.card?.info?.description}</p>
                <p className="text-sm font-bold">Price: Rs {item?.card?.info?.price / 100}</p>
            </div>
        </div>
    );
};

export default FoodItem;
