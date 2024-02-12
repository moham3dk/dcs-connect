import React from 'react';

import Header from './components/Header';
import Display from './components/Display';
import extracurricularData from './data/extracurriculars.json';

const App = () => {
  return (
    <>
      {/*It's only one page so we can render everything here :D*/}
      <Header />
      <Display extracurricularData={extracurricularData} />
    </>
  );
};

export default App;
