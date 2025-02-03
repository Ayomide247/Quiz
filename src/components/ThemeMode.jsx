// ThemeProvider.js
import React, { createContext, useState, useContext, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode((prevMode) => !prevMode);

  useEffect(() => {
    if (isDarkMode) {
      document.getElementsByTagName("html")[0].classList.add("dark");
    } else {
      document.getElementsByTagName("html")[0].removeAttribute("class");
    }
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
