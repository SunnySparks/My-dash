import Calculator from "./components/Calculator/Calculator";
import TodoContainer from "./components/Todo/TodoContainer";
import Calendar from "./components/Calendar/Calendar";
import Weather from "./components/Weather/Weather";
import "./App.css";
import ThemeProvider from "./Context/ThemeProvider";
import { useContext } from "react";
import Clock from "./components/Clock/Clock";

function App() {
  // props for app context
  //const { theme, setTheme } = useContext(ThemeContext);

  return (
    <ThemeProvider>
      <Calculator />
      <TodoContainer />
      <Calendar />
      <Weather />
      <Clock />
    </ThemeProvider>
  );
}

export default App;
