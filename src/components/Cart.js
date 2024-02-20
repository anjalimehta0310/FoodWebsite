import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../Utilis/cardSlice";

const Cart = () => {
    const cardItems = useSelector((store) => store.card.item);

    const dispatch=useDispatch();
    const handleClearCart=()=>{
        dispatch(clearCart());
    }
    
    return (
        <div>
            <h1 className="font-bold text-3xl mb-4 flex">Cart Items - {cardItems.length}</h1>
            <button className="bg-green-100 p-2 m-5" onClick={()=>handleClearCart()}>Clear cart</button>
            <div className="flex flex-col gap-4">
                {cardItems.map((item) => (
                    <FoodItem key={item.card.info.id} item={item} />
                ))}
            </div>
            
            
        </div>
    );
};

export default Cart;
