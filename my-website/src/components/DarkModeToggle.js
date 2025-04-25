// src/components/DarkModeToggle.js

import React, { useEffect, useState } from "react";

const DarkModeToggle = () => {
  const [theme, setTheme] = useState(() => {
    // Check localStorage for theme preference
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light";
    }
    return "light";
  });

  useEffect(() => {
    // Apply the theme to the <html> element
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    // Store the user's preference in localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <button
      onClick={toggleTheme}
      className="px-3 py-2 rounded-md bg-gray-200 dark:bg-gray-700 text-sm font-medium"
    >
      {theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
};

export default DarkModeToggle;
