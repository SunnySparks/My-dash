import { createContext, useState, useContext, useEffect } from "react";

// Crear un nuevo contexto para el tema
export const ThemeContext = createContext();

const themes = [
  {
    name: "light",
    className: "light-theme",
    index: "zero",
  },
  {
    name: "Super",
    className: "super-theme",
    index: "one",
  },
  {
    name: "gradient",
    className: "gradient-theme",
    index: "two",
  },
  {
    name: "dark",
    className: "dark-theme",
    index: "three",
  },
  {
    name: "System Pref",
    className: "auto-theme",
    index: "four",
  },
];

const THEME_STORAGE_KEY = "selected-theme";

// Crear un componente ThemeProvider
const ThemeProvider = ({ children }) => {
  const getInitialTheme = () => {
    const storedThemeName = localStorage.getItem(THEME_STORAGE_KEY);
    if (storedThemeName) {
      const found = themes.find((t) => t.name === storedThemeName);
      if (found) return found;
    }

    // Optional: detect system preference
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return prefersDark
      ? themes.find((t) => t.name === "dark")
      : themes.find((t) => t.name === "light");
  };

  const [theme, setTheme] = useState(getInitialTheme);

  // Apply theme class to <html> when theme changes
  useEffect(() => {
    // Remove all other theme classes
    themes.forEach((t) => {
      document.documentElement.classList.remove(t.className);
    });

    // Add the current one
    document.documentElement.classList.add(theme.className);

    // Save selection
    localStorage.setItem(THEME_STORAGE_KEY, theme.name);
  }, [theme]);

  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, themes, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
