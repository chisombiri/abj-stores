import { useState, useEffect, createContext } from "react";
import useLocalStorage from "react-use-localstorage";

const ThemeContext = createContext();

//create a custom theme context provider
export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const [switchBtn, setSwitchBtn] = useState(false);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    setSwitchBtn(!switchBtn);
  };

  useEffect(() => {
    if (theme === "dark") {
      setSwitchBtn(true);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, switchBtn }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
