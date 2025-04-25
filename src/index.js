import React from "react";
import ReactDOM from "react-dom";
import "./index.css"; // Importing the global CSS (which includes tailwind.css)
import App from "./App"; // Your main App component

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
