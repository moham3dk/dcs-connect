import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Scioto from './pages/Scioto';
import Jerome from './pages/Jerome';
import Coffman from './pages/Coffman';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/scioto" element={<Scioto />} />
        <Route path="/jerome" element={<Jerome />} />
        <Route path="/coffman" element={<Coffman />} />
      </Routes>
    </Router>
  );
};

export default App;
