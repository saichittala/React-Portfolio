import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

// Import your components
import Header from './components/header.jsx';
import Home from './home.js';
import MyDeziner from './pages/mydeziner.js';
import CustomFurnish from './pages/customfurnish.js';
import About from './pages/about.js';
import Contact from './pages/contact.js';
import Works from './pages/works.js';

// You'll need components for Works and Contact for the links to work.
// These can be simple placeholders for now.


function App() {
  return (
    <HashRouter>
      {/* The Header is now here, so it will appear on every page */}
      <Header />

      <Routes>
        {/* Your existing routes */}
        <Route path="/" element={<Home />} />
        <Route path="/mydeziner" element={<MyDeziner />} />
        <Route path="/customfurnish" element={<CustomFurnish />} />
        <Route path="/about" element={<About />} />

        {/* Added routes to match the header links */}
        <Route path="/works" element={<Works />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
