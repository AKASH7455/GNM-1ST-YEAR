import { useTheme } from "../context/ThemeContext";

function ThemeSwitcher() {
  const {
    theme,
    toggleTheme
  } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="theme-btn"
    >
      {theme === "pink"
        ? "Blue Theme"
        : "Pink Theme"}
    </button>
  );
}

export default ThemeSwitcher;