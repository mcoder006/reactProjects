import { useThemeContext } from "../../../context/ThemeContext";
import { theme as the } from "./Themes";

const HeroSection = () => {
  const { setTheme } = useThemeContext();
  const handleThemeChange = (e: any) => {
    const themeChange = e.target.value;
    setTheme(themeChange);
  }
  return (
    <section className="mt-4 h-auto p-4 mx-auto md:w-[50vw] w-[90vw] space-y-4">
      <h2 className="text-2xl font-bold text-center md:text-3xl">
        Top StartUp Ideas
      </h2>
      <p className="block w-2/3 mx-auto font-bold text-center">
        <strong className="text-success">
          Like and share a productive ideas for startup.
        </strong>
        Account did not needed to share ideas.
      </p>
      <select className="block max-w-xs mx-auto w-xl select select-info" onChange={handleThemeChange}>
        <option disabled selected>
          Select Theme
        </option>
        {
            the.map(themes => (
                <option
                className="capitalize"
                key={themes}>{themes}</option>
            ))
        }
      </select>
    </section>
  );
}

export default HeroSection