
interface IngredientTypes {
    quantity: number;
    unit: string;
    description: string;
}

// import { useContext } from "react";
import { RecipeItemsProps } from "./RecipesDetails"; 
// import { favouriteContext } from "../App";

const DetailsItems: React.FC<{ recipeItems: RecipeItemsProps | null }> = ({
  recipeItems,
}) => {
  if (!recipeItems) {
    return <div>Loading...</div>;
  }

  // const { addToFavourite } = useContext(favouriteContext);

  return (
    <div className="md:grid-cols-2 md:grid md:w-fit w-[90vw] min-h-screen mx-auto grid-cols-1 gap-8">
      <div className="mb-4 text-center text-black">
        <h1 className="mb-4 text-3xl font-bold">Recipe Details Page</h1>
        <img
          className="w-1/2 mx-auto mb-4 rounded md:w-[300px] h-52 md:h-[300px]"
          src={recipeItems.image_url}
          alt="Item Image"
        />
        {/* <button className="block px-4 py-2 mx-auto mt-2 text-sm text-white bg-green-500 rounded-sm md:text-xl"
        onClick={() => {
          addToFavourite(recipeItems.id);
        }}
        >
          Add To Favourite
        </button> */}
      </div>

      <div className="flex flex-col">
        <h2>Recipe Name : {recipeItems.title}</h2>
        <h2>Publisher : {recipeItems.publisher}</h2>
        <h2>Cooking time : {recipeItems.cooking_time}</h2>
        <h2>Servings : {recipeItems.servings}</h2>
        {recipeItems.ingredients.map((item: IngredientTypes, index: number) => {
          return (
            <div key={index} className="flex flex-col">
              <h2>
                Quantity : {item.quantity ? item.quantity : "Not Provided"}
              </h2>
              <h2>Unit : {item.unit ? item.unit : "Not Provided"}</h2>
              <h2>Description : {item.description}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DetailsItems;
