import './App.css'
import Home from "./app/Home/Home";
import { useThemeContext } from "./context/ThemeContext";

const App = () => {
  const { theme } = useThemeContext();
  return (
      <div 
      className="w-screen min-h-screen mt-0"
      data-theme={theme}>
        <Home />
      </div>
  );
}

export default App