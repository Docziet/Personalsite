// src/components/DarkModeToggle.js

import React, { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa"; // Import icons from react-icons

const DarkModeToggle = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light";
    }
    return "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 shadow-md"
      aria-label="Toggle Dark Mode"
    >
      {theme === "dark" ? (
        <FaSun className="w-5 h-5" /> // Show Sun icon in dark mode (to switch back to light)
      ) : (
        <FaMoon className="w-5 h-5" /> // Show Moon icon in light mode (to switch to dark)
      )}
    </button>
  );
};

export default DarkModeToggle;
