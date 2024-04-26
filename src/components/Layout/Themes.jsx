import ThemeProvider from "../../Context/ThemeProvider";
import React from "react";
import { useTheme } from "../../Context/ThemeProvider";

const Themes = () => {
  //const [theme, setTheme] = useContext(ThemeProvider);
  //
  const themes = useContext(ThemeProvider);
  //console.log(themes);
  return (
    <div className="buttonCont">
      <button>themes</button>
    </div>
  );
};

export default Themes;
