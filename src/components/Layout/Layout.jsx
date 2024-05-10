import React, { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeProvider";

const Layout = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return <div id="appGrid">{children}</div>;
};

export default Layout;
