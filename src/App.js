
import "./App.css";
import LandingPages from "./Pages/LandingPages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ThemeSwitcher from "./Pages/ThemeSwitcher";
import { useState } from "react";

function App() {
  
  const [theme,setTheme]=useState("white-theme")
  return (
    
    <div className={`App ${theme}`}>
      <BrowserRouter>
        <ThemeSwitcher setTheme={setTheme} theme={theme} /> {/* Place the ThemeSwitcher component here */}
        <Routes>
          <Route path="/" element={<LandingPages />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
