import { useEffect, useState } from "react";
import Layout from "./app/Layout/Layout"
import { useThemeContext } from "./context/ThemeContext";
import { languageCategories } from "./languages/Languages";
import SearchedResult from "./app/components/HeroSection/SearchedResult";

const App = () => {
  const { theme } = useThemeContext();
  
  const [language, setLanguage] = useState("en");
  
  const [word, setword] = useState("");

  const [data, setData] = useState([]);

  const handleWord = (e: any) => {
    setword(e.target.value);
    setSearchData({ ...searchData, word: `${word}` });
  }

  const handleLanguage = (e: any) => {
    setLanguage(e.target.value);
    setSearchData({...searchData, language: `${language}`});
  }
  
  const getWordDetails = async ( word: String, lang: String) => {
    try {
      const res = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/${lang}/${word}`);
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.error("Error : ", error)
    }
  }

  const [searchData, setSearchData] = useState({
    word: "",
    language: "" || "en",
  });
  
  useEffect(() => {
    getWordDetails(word, language);
  }, [word, language])
  
  return (
    <div className="min-h-screen pb-28" data-theme={theme}>
      <Layout theme={theme}>
        <div className="w-1/2 mx-auto text-xl text-center md:text2xl">
          <h2>
            Dictionary App { " " }
            <span className="text-primary">( Search Your Words )</span>
          </h2>
          <section className="flex items-center justify-center gap-2 mt-4 md:gap-4">
            <label className="flex items-center gap-2 input">
              <input
                onChange={handleWord}
                value={word}
                type="text"
                className="grow"
                placeholder="Search Words.."
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
            <select
              onChange={handleLanguage}
              className="w-[150px] text-xs select select-warning md:text-sm"
            >
              <option selected value="en">English</option>
              {languageCategories.map((languages, index) => (
                <option key={index} value={languages.label}>
                  {languages.value}
                </option>
              ))}
            </select>
          </section>
          <SearchedResult data={data[0]} sword={word} />
        </div>
      </Layout>
    </div>
  );
}

export default App