import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

// Import your components
import Header from './components/header.jsx';
import Home from './home.js';
import MyDeziner from './pages/mydeziner.js';
import CustomFurnish from './pages/customfurnish.js';
import About from './pages/about.js';
import Contact from './pages/contact.js';
import Works from './pages/works.js';

function App() {
  const [theme, setTheme] = useState("dark"); // fallback
  const [manualOverride, setManualOverride] = useState(false);
  const [animating, setAnimating] = useState(false);

  // ✅ Toggle theme with ripple animation
  const toggleTheme = () => {
    setAnimating(true);
    setManualOverride(true);
    setTheme(prev => (prev === "light" ? "dark" : "light"));

    // remove overlay after animation ends
    setTimeout(() => setAnimating(false), 700); // match CSS animation duration
  };

  // 1️⃣ On load → check localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      setManualOverride(true);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
    }
  }, []);

  // 2️⃣ Apply theme to body
  useEffect(() => {
    document.body.classList.remove("light-theme", "dark-theme");
    document.body.classList.add(theme === "light" ? "light-theme" : "dark-theme");

    if (manualOverride) {
      localStorage.setItem("theme", theme);
    } else {
      localStorage.removeItem("theme"); // clear if user wants system-follow
    }
  }, [theme, manualOverride]);

  // 3️⃣ System preference listener (only works if no manual override)
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handler = (e) => {
      if (!manualOverride) {
        setTheme(e.matches ? "dark" : "light");
      }
    };

    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, [manualOverride]);

  return (
    <HashRouter>
      {/* 🔥 Smooth transition overlay */}
      {animating && <div className="theme-transition-overlay"></div>}

      <Header toggleTheme={toggleTheme} theme={theme} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mydeziner" element={<MyDeziner />} />
        <Route path="/customfurnish" element={<CustomFurnish />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
