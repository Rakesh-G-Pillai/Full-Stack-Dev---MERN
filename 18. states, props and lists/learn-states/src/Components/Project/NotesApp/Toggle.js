import React, { useState, useEffect } from "react";
import "./App.css";

function Toggle() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  });
  return (
    <div>
      <button className="button" onClick={toggleTheme}>
        Toggle Mode
      </button>
    </div>
  );
}

export default Toggle;
