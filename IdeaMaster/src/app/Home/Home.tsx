import { useEffect, useState } from "react";
import { db } from "../../../utils/index";
import { TopIdeas } from "../../../utils/Schema";
import { useThemeContext } from "../../context/ThemeContext";
import { Navbar, HeroSection, IdeaLister } from "../components/Exports";
import Tabs from "./Tabs";
import { useLocation } from "react-router-dom";
import { desc } from "drizzle-orm";

const Home = () => {
  const { theme } = useThemeContext();

  const [idealist, setIdealist] = useState<any>([]);

  const params = useLocation();

  const getAllIdeas = async () => {
    const result = await db.select().from(TopIdeas).orderBy(desc(params.hash == '#hot' || params.hash == "#top" ? TopIdeas.vote : TopIdeas.id)).limit(25);
    setIdealist(result);
  };

  useEffect(() => {
    getAllIdeas();
  }, [params]);

  return (
    <div data-theme={theme} className="w-full h-full pt-4 pb-10">
      <Navbar />
      <HeroSection />
      <Tabs />
      <IdeaLister refreshData={getAllIdeas} idealist={idealist} />
    </div>
  );
};

export default Home;
