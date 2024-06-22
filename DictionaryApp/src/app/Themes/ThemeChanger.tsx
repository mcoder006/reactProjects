import { useThemeContext } from "../../context/ThemeContext";
import { theme } from "./Themes"

const ThemeChanger = () => {
    const { setTheme } = useThemeContext();
    const onChange = (e: any) => {
        const theme = e.target.value;
        setTheme(theme);
    }
  return (
    <select
    onChange={onChange}
     className="max-w-xs w-fit select select-info">
      <option disabled selected>
        Select Theme
      </option>
      {
        theme.map((themes, index) => (
            <option key={index} value={themes}>
                {themes}
            </option>
        ))
      }
    </select>
  );
}

export default ThemeChanger