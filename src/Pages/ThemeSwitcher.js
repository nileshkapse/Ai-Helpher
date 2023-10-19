import React, { useState } from "react";

function ThemeSwitcher(props) {
  const toggleTheme = () => {
    props.theme == "dark-theme"
      ? props.setTheme("white-theme")
      : props.setTheme("dark-theme");
    return props.theme;
  };
  return (
    <div className="wrapper">
      <button onClick={toggleTheme}><input type="checkbox"/></button>
    </div>
  );
}

export default ThemeSwitcher;
