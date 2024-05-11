import { useEffect, useState } from "react";
import RecipeItems from "./RecipeItems";
import { Link } from "react-router-dom";


const Header = () => {
  const [loading, setLoading] = useState(true);
  const [recipes, setRecipes] = useState([]);
  const [searchParams, setSearchParams] = useState("");

  useEffect(() => {
    async function fetchRecipe() {
      try {
        let res = await fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParams}`
        );
        let data = await res.json();

        if (data) {
          setRecipes(data.data.recipes);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching recipe:", error);
        setLoading(false);
      }
    }
    fetchRecipe();
  }, [searchParams]);

  return (
    <div>
      <header className="sticky top-0 flex items-center justify-between px-10 py-2 text-[18px] backdrop-blur-lg">
        <Link to={'/'}>Food Recipe</Link>
        <div>
          <input
            value={searchParams}
            onChange={(e) => {
              setSearchParams(e.target.value);
            }}
            autoFocus
            className="p-2 text-black border rounded-full shadow-md outline-none shadow-gray-400"
            type="text"
            placeholder="Search Recipe..."
          />
        </div>
        <div className="hidden space-x-8 md:items-center md:flex md:justify-center">
          <Link to={'/'}>Home</Link>
          {/* <Link to={'/favourites'}>Favourites</Link> */}
        </div>
      </header>

      <div className="md:container w-[90vw] mx-auto mt-4 text-[20px]">
        <main className="grid grid-cols-1 w-[90vw] mx-auto md:grid-cols-4 gap-4 md:container text-sm text-wrap">
          {loading
            ? "Loading...."
            : recipes ?
              recipes.map((recipe, index: number) => (
                <div key={index + 1}>
                  <RecipeItems items={recipe} />
                </div>
              )) : "Search Recipe First"}
        </main>
      </div>
    </div>
  );
};

export default Header;
