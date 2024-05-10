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
        <Calculator />
        <TodoContainer />
        <Calendar />
        <Weather />
        <Clock />
        <Themes />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
