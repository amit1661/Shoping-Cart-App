import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="flex p-[5px] ">
      {cart.length > 0 ? (
        <div className="flex justify-between ">
          <div className="xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto">
            {cart.map((item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />;
            })}
          </div>

          <div className="flex flex-col justify-between items-center ">
            <div className="text-green-600 ">
              <div>Your Cart</div>
              <div>Summary</div>
              <p>
                <span>Total Items: {cart.length}</span>
              </p>
            </div>

            <div className="p-5">
              <p>Total Amount: ${totalAmount}</p>
              <button className="p-2 bg-green-500 text-white rounded">
                CheckOut Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1>Cart Empty</h1>
          <Link to={"/"}>
            <button>Shop Now</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
