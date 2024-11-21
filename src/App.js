import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home.js';
import Ricoz from './ricoz.js';
import Mydeziner from './mydeziner.js';

function App() {
  return (
    <Router basename='React-Portfolio'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ricoz" element={<Ricoz />} />
        <Route path="/mydeziner" element={<Mydeziner />} />
      </Routes>
    </Router>

  );
}

export default App;
