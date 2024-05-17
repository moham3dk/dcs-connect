import React from 'react';
import Display from '../components/Display';
import Header from '../components/Header';
import extracurricularData from '../data/extracurriculars/scioto_extracurriculars.json';

const Scioto = () => {
  return (
    <>
      <Header schoolName="SCIOTO" link={'https://google.com'} />
      <Display schoolName="SCIOTO" extracurricularData={extracurricularData} />
    </>
  );
};

export default Scioto;
