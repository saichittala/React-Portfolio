import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './home.js';
import Ricoz from './ricoz.js';
import MyDeziner from './pages/mydeziner.js';

const repoName = process.env.REACT_APP_REPO_NAME || '/default-repo';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ricoz" element={<Ricoz />} />
        <Route path="/mydeziner" element={<MyDeziner />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
