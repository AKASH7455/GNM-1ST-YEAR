import {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "pink"
  );

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === "pink"
        ? "blue"
        : "pink"
    );
  };

  useEffect(() => {
    document.body.className = "";

    document.body.classList.add(
      `${theme}-theme`
    );

    localStorage.setItem(
      "theme",
      theme
    );
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;

export const useTheme = () =>
  useContext(ThemeContext);