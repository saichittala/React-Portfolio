import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home.js';
import Ricoz from './ricoz.js'

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/ricoz" element={<Ricoz/>} />
      </Routes>
    </Router>
  );
}

export default App;
