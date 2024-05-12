import React, { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeProvider";

const Layout = ({ children }) => {
  const { themes, theme, toggleTheme } = useContext(ThemeContext);
  console.log(theme.className);
  return (
    <div id="appGrid" className={`${theme.className}`}>
      {children}
    </div>
  );
};

export default Layout;
//${themes[toggleTheme].className}
