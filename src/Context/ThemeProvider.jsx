import { createContext, useState, useContext } from "react";
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
    index: "three ",
  },
];

// Crear un componente ThemeProvider
const ThemeProvider = ({ children }) => {
  // Definir el estado inicial del tema
  const [theme, setTheme] = useState(themes[0]);

  // Función para alternar el tema
  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
  };

  // Proporcionar el estado del tema y la función de alternar a los componentes hijos
  return (
    <ThemeContext.Provider value={{ theme, themes, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
