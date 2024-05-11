import { createContext, useState } from "react";
import Header from "./components/Header";
import { Layout } from "./components/Layout";

type FavouriteContextType = {
  favourite: string [];
  addToFavourite: ( id: string ) => void;
};


export const favouriteContext = createContext<FavouriteContextType | null >(null);

const App = () => {
  const [favourite, setFavourite] = useState<string []>([]);

  const addToFavourite = (id: string) => {
    if (favourite.includes(id)) {
      return;
    }
    setFavourite((prevFavourite) => [...prevFavourite, id]);
  };

  return (
    <favouriteContext.Provider value={{ favourite, addToFavourite }}>
      <Layout>
        <Header />
      </Layout>
    </favouriteContext.Provider>
  );
};

export default App;
