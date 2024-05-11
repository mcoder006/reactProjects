import { useParams } from "react-router-dom";
import {useEffect, useState } from "react";
import DetailsItems from "./DetailsItems";

export interface RecipeItemsProps {
  title: string;
  source_url: string;
  cooking_time: number;
  image_url: string;
  ingredients: IngredientTypes[];
  publisher: string;
  servings: number;
  id?: string;
}

interface IngredientTypes {
  quantity: number;
  unit: string;
  description: string;
}


const RecipesDetails = () => {
  const { id } = useParams<{ id: string }>() ?? ""; 

  const [recipe, setRecipe] = useState<RecipeItemsProps | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRecipeById(recipeId: string) {
      try {
        const response = await fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes/${recipeId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch recipe");
        }
        const data = await response.json();
        setRecipe(data.data.recipe);
      } catch (error) {
        console.error("Error fetching recipe:", error);
      } finally {
        setLoading(false);
      }
    }
    id && fetchRecipeById(id);
  }, [id]);
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen mt-4 overflow-x-hidden">
      {loading ? "Loading..." : <DetailsItems key={id} recipeItems={recipe} />}
    </div>
  );
};

export default RecipesDetails;
