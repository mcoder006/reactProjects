import { useEffect, useState } from "react"
import Products from "../components/Products/Products";

const Home = () => {

  const url = "https://fakestoreapi.com/products";
  const [loading, seTloading] = useState(false);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    seTloading(true);

    async function fetchProducts( url : string) {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.log("Error occured on fetching Products!", error);
        throw error;
      }
      finally{
        seTloading(false);
      }
    }

    fetchProducts(url);
  }, [url])

  if(loading) {
    return <div>Loading Products...</div>
  }

  return (
    <div className="grid sm:grid-cols-2 place-items-center mx-auto md:container md:grid md:grid-cols-3 xl:grid-cols-5 space-x-4 w-[90vw] md:gap-4 space-y-4 mt-4">
      
        {
        product && product.length > 0 ? product.map((pro, index: number) => {
          return <Products pro={pro} key={index} />
        }) : null }
    </div>
  )
}

export default Home