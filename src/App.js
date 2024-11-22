import React from 'react';
import Home from './home.js';
import MyDeziner from './pages/mydeziner.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mydeziner" element={<MyDeziner />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;


// $ git remote add origin https://github.com/saichittala/React-Portfolio.git

// "homepage": "https://saichittala.github.io/React-Portfolio",

// "predeploy": "npm run build",
// "deploy": "gh-pages -d build",
