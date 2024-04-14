import Calculator from "./components/Calculator/Calculator";
import TodoContainer from "./components/Todo/TodoContainer";
import Calendar from "./components/Calendar/Calendar";
import Weather from "./components/Weather/Weather";
import "./App.css";
import ThemeProvider from "./Context/ThemeProvider";
import { useContext } from "react";

function App() {
  // props for app context
  //const { theme, setTheme } = useContext(ThemeContext);

  return (
    <ThemeProvider>
      <Calculator />
      <TodoContainer />
      <Calendar />
      <Weather />
    </ThemeProvider>
  );
}

export default App;
