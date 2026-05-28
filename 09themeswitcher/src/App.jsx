import { useEffect, useState } from "react";
import { ThemeProvider } from "./context/theme";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

const App = () => {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  // actually how theme change work ?
  useEffect(() => {
    const documetHtml = document.querySelector("html");
    documetHtml.classList.remove("light", "dark");
    documetHtml.classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>
          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;

// to give access of theme to entire app need to wrap the whole app with ThemeProvider

// {themeMode, lightTheme, darkTheme} in methods ke as it is name se methods banene se unko functionalities mil jayegi ye ek bada intresting concept hai
