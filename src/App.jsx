import Calculator from "./components/Calculator/Calculator";
import TodoContainer from "./components/Todo/TodoContainer";
import Calendar from "./components/Calendar/Calendar";
import Weather from "./components/Weather/Weather";
import "./App.css";
import "./App.scss";
import ThemeProvider from "./Context/ThemeProvider";
import { useContext } from "react";
import Clock from "./components/Clock/Clock";
import Themes from "./components/Layout/Themes";

function App() {
  // props for app context
  //const { theme, setTheme } = useContext(ThemeContext);

  return (
    <ThemeProvider>
      <div id="appGrid">
        <Calculator />
        <TodoContainer />
        <Calendar />
        <Weather />
        <Clock />
      </div>
    </ThemeProvider>
  );
}

export default App;
