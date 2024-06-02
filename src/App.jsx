import Calculator from "./components/Calculator/Calculator";
import TodoContainer from "./components/Todo/TodoContainer";
import Calendar from "./components/Calendar/Calendar";
import Weather from "./components/Weather/Weather";
import "./App.css";
import "./App.scss";
import ThemeProvider from "./Context/ThemeProvider";
import Clock from "./components/Clock/Clock";
import Themes from "./components/Layout/Themes";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Themes />
        <Clock />
        <div id="componentContainer">
          <Calculator />
          <TodoContainer />
          <Calendar />
          <Weather />
        </div>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
