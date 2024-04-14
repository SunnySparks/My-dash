import { useState } from "react";
import Layout from "./components/Layout/Index";
import "./App.css";
import ThemeProvider from "./Context/ThemeProvider";
import { useContext } from "react";

function App() {
  // props for app context
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <ThemeProvider>
      <Layout />
    </ThemeProvider>
  );
}

export default App;
