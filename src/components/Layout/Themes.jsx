import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeProvider";

const Themes = () => {
  const { themes, toggleTheme } = useContext(ThemeContext);
  return (
    <div id="buttonCont">
      <h2>Choose Your Theme here</h2>
      <div id="btnInner">
        {themes.map((theme, index) => (
          <button
            key={index}
            className={theme.className}
            onClick={() => toggleTheme(theme)}
          >
            {theme.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Themes;
