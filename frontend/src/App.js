import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Scioto from './pages/extracurricular_pages/Scioto';
import Jerome from './pages/extracurricular_pages/Jerome';
import Coffman from './pages/extracurricular_pages/Coffman';

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
