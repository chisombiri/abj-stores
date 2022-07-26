import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Footer from "./components/footer/Footer";
import useLocalStorage from "react-use-localstorage";

function App() {
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
    <div className="main">
      <Header theme={theme} toggleTheme={toggleTheme} onSwitch={switchBtn} />
      <Hero theme={theme} />
      <Footer theme={theme} />
    </div>
  );
}

export default App;
