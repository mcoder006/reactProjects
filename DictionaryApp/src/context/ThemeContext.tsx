// ThemeContext.tsx
import { createContext, useContext, useState, ReactNode } from "react";

interface ThemeContextProps {
    theme: String;
    setTheme: (theme: string) => void
}

export const themeContext = createContext<ThemeContextProps>({
  theme: "light",
  setTheme: () => {},
});

export const useThemeContext = () => {
  return useContext(themeContext);
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<string>("light");

  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      {children}
    </themeContext.Provider>
  );
};
