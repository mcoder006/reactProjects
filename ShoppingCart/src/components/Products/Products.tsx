
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../store/reducers/CartSlice";

const Products = ({ pro }: any) => {

  const dispatch = useDispatch();

  const cartProducts = useSelector((state: any) => state.cart);

  function handleAddToCart( product: any ) {
    dispatch(addToCart(product));
  }

  function handleRemoveFromCart( product: any ) {
    dispatch(removeFromCart(product));
  }
  
  return (
    <div className="flex flex-col items-center gap-3 p-4 group spacey-4 w-2/3 h-[300px] border border-red-500 rounded">
      <div className="overflow-hidden h-fit">
        <img className="mt-4 sm:h-2/3" src={pro.image} alt={pro.title} />
      </div>
      <div>
        <h1 className="w-40 mt-3 text-lg font-bold text-gray-700 truncate">
          {pro.title}
        </h1>
      </div>
      <div className="items-center justify-center w-full mx-auto mt-5 lex bottom-5">
        <button
          onClick={() =>
            cartProducts.some((item: any) => item.id === pro.id)
              ? handleRemoveFromCart(pro)
              : handleAddToCart(pro)
          }
          className="bottom-0 block w-full px-4 py-2 font-bold text-white border-2 rounded-lg bg-red-950"
        >
          {cartProducts.some((item: any) => item.id === pro.id)
            ? "Remove from cart"
            : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default Products