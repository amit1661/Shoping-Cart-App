import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  };

  return (
    <div
      className="flex flex-col items-center justify-between 
      ease-in gap-3 p-4 mt-10 ml-5 rounded-xl outline"
    >
      <div className="h-40 ">
        <img className="h-full w-full" src={item.image} />
      </div>
      <div>
        <h1 className="text-gray-700 font-semibold text-lg ">{item.title}</h1>
        <h1 className=" text-gray-400 font-normal text-[15px] ">
          {item.description.split(" ").slice(0, 15).join(" ") + "   "}
        </h1>
        <div className="flex flex-row justify-between">
          <p className="text-green-600">${item.price}</p>
          <div
            className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
              text-[12px] p-1 px-3 
               hover:bg-gray-700
               hover:text-white transition duration-300 ease-in"
            onClick={removeFromCart}
          >
            <FcDeleteDatabase />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
