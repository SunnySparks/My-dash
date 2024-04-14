import { createContext, useState } from "react";
// Crear un nuevo contexto para el tema
export const ThemeContext = createContext();

// Crear un componente ThemeProvider
const ThemeProvider = ({ children }) => {
  // Definir el estado inicial del tema
  const [theme, setTheme] = useState("light");

  // Función para alternar el tema
  // const toggleTheme = (newTheme) => {
  //   setTheme(newTheme);
  // };

  // Proporcionar el estado del tema y la función de alternar a los componentes hijos
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
