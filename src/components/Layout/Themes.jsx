import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeProvider";

const Themes = () => {
  const { themes, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="buttonCont">
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
  );
};

export default Themes;
