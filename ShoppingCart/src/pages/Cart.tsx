import { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar"
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeFromCart } from "../store/reducers/CartSlice";

interface CartItem {
  name: string;
  price: number;
}

const Cart = () => {

  const [totalCart, setTotalCart] = useState(0);

    const cartProducts = useSelector((state: any) => state.cart);

    const dispatch = useDispatch();

    useEffect(() => {
      setTotalCart(cartProducts.reduce((acc: number, curr: CartItem) => acc + curr.price, 0))
    }, [cartProducts]);


    if(cartProducts.length === 0) {
      return (
        <>
          <Navbar />
          <div className="flex h-[80vh] items-center justify-center text-4xl font-bold capitalize">
            Cart is Empty
          </div>
        </>
      );
    }



  return (
    <>
      <Navbar />
      <div className="flex mx-auto mt-4 flex-col space-y-4 md:container sm:w-[90vw] p-2 px-6 justify-center">
        {cartProducts &&
          cartProducts.map((items: any) => {
            return (
              <div className="flex items-center justify-between p-2 rounded bg-slate-200">
                <img
                  className="bg-transparent rounded-lg h-14"
                  src={items.image}
                  alt=""
                />
                <div>${items.price}</div>
                <button className="p-2 text-white bg-red-500 rounded"
                onClick={() => {
                  dispatch(removeFromCart(items));
                }}
                >
                  Remove
                </button>
              </div>
            );
          })}
      </div>

      <div className=" mx-auto md:container bg-slate-200 sm:w-[90vw] p-4 px-8 rounded flex justify-between mb-10 items-center">
        <button 
        onClick={() => {
          if(totalCart < 50) {
            alert("Cart Must Have Sufficient Amount For Checkout!");
          }
          else {
            alert("Thanks For Your Checkout!");
            dispatch(clearCart());
          }
        }}
        className="p-2 px-4 text-white rounded-lg bg-violet-500">Checkout</button>
        <p>Total Price : ${totalCart.toFixed(2)}</p>
      </div>
    </>
  );
}

export default Cart