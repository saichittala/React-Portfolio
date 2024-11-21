import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home';
import Ricoz from './ricoz';
import MyDeziner from './mydeziner';

const repoName = process.env.REACT_APP_REPO_NAME || '/default-repo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ricoz" element={<Ricoz />} />
        <Route path="/mydeziner" element={<MyDeziner />} />
      </Routes>
    </Router>

  );
}

export default App;


    // <Router basename="{process.env.PUBLIC_URL}">
