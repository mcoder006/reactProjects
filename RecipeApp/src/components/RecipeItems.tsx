import { useNavigate } from 'react-router-dom'

interface Recipe {
  image_url: string;
  publisher: string;
  title: string;
  id?: string;
}

interface RecipeItemsProps {
  items: Recipe;
}

const RecipeItems: React.FC<RecipeItemsProps> = ({ items }) => {
  const navigate = useNavigate();

  return (
    <div className="p-6 shadow-md md:w-fit">
      <div className="overflow-hidden h-28 w-28">
        <img
          className="w-full mx-auto rounded h-30"
          src={items.image_url}
          alt="RecipeItem"
        />
      </div>
      <div className="text-sm text-emerald-500">{items.publisher}</div>
      <div className="font-bold whitespace-normal text-wrap">{items.title}</div>
      <button 
      onClick={() => {
        navigate(`/recipes/${items.id}`)
      }}
      className="text-[12px] px-4 py-1 text-white uppercase bg-black rounded-lg mt-1 bottom-0">
        Recipe Details
      </button>
    </div>
  );
};

export default RecipeItems