import { createContext, useState, useContext } from "react";
// Crear un nuevo contexto para el tema
export const ThemeContext = createContext();

const themes = [
  {
    name: "light",
    className: "pastel-theme",
    index: "zero",
  },
  {
    name: "gradient",
    className: "gradient-theme",
    index: "one",
  },
  {
    name: "dark",
    className: "retro-theme",
    index: "two",
  },
];

// Crear un componente ThemeProvider
const ThemeProvider = ({ children }) => {
  // Definir el estado inicial del tema
  const [theme, setTheme] = useState(0);

  // Función para alternar el tema
  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
  };

  // Proporcionar el estado del tema y la función de alternar a los componentes hijos
  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

export function useTheme() {
  return useContext(ThemeContext);
}
