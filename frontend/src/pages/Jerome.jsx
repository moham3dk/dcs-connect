import React from 'react';
import Display from '../components/Display';
import Header from '../components/Header';
import extracurricularData from '../data/extracurriculars/jerome_extracurriculars.json';

const Jerome = () => {
  return (
    <>
      <Header schoolName="JEROME" link={'https://google.com'} />
      <Display schoolName="JEROME" extracurricularData={extracurricularData} pageIdentifier={1} />
    </>
  );
};

export default Jerome;
