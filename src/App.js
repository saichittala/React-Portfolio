import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';

// Import components
import Header from './components/header.jsx';
import Home from './home.js';
import MyDeziner from './pages/mydeziner.js';
import CustomFurnish from './pages/customfurnish.js';
import About from './pages/about.js';
import Contact from './pages/contact.js';
import Works from './pages/works.js';
import SmoothScrollProvider from './components/Scrollsmooth.jsx';

// ✅ Wrapper to hook into route changes
function ThemeWatcher({ setTheme, manualOverride }) {
  const location = useLocation();

  // pages that should always be light
  const forceLightRoutes = ["/mydeziner"]; 

  useEffect(() => {
    if (forceLightRoutes.includes(location.pathname)) {
      setTheme("light"); // force light theme
    }
  }, [location, setTheme, manualOverride]);

  return null; // no UI, just logic
}

function App() {
  const [theme, setTheme] = useState("dark");
  const [manualOverride, setManualOverride] = useState(false);
  const [animating, setAnimating] = useState(false);

  // ✅ Toggle theme
  const toggleTheme = () => {
    setAnimating(true);
    setManualOverride(true);
    setTheme(prev => (prev === "light" ? "dark" : "light"));
    setTimeout(() => setAnimating(false), 700);
  };

  // 1️⃣ Check saved/system preference
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

  // 2️⃣ Apply theme
  useEffect(() => {
    document.body.classList.remove("light-theme", "dark-theme");
    document.body.classList.add(theme === "light" ? "light-theme" : "dark-theme");

    if (manualOverride) {
      localStorage.setItem("theme", theme);
    } else {
      localStorage.removeItem("theme");
    }
  }, [theme, manualOverride]);

  // 3️⃣ System changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e) => {
      if (!manualOverride) {
        setTheme(e.matches ? "dark" : "light");
      }
    };
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handler);
    } else {
      mediaQuery.addListener(handler);
    }
    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handler);
      } else {
        mediaQuery.removeListener(handler);
      }
    };
  }, [manualOverride]);

  return (
    <HashRouter>
      {animating && <div className="theme-transition-overlay"></div>}
      <Header toggleTheme={toggleTheme} theme={theme} />

      {/* 👀 Route watcher here */}
      <ThemeWatcher setTheme={setTheme} manualOverride={manualOverride} />

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
