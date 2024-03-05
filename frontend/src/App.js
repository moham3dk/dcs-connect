import React from 'react';

import Header from './components/Header';
import Display from './components/Display';
import extracurricularData from './data/extracurriculars.json';

const App = () => {
  return (
    <>
      <Header />
      <Display extracurricularData={extracurricularData} />
    </>
  );
};

export default App;
