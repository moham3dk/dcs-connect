import React from 'react';
import Display from '../components/Display';
import extracurricularData from '../data/scioto.json';
import schoolLogo from '../assets/scioto_logo.png';

const Scioto = () => {
  return (
    <Display
      schoolName="Scioto"
      schoolLogo={schoolLogo}
      extracurricularData={extracurricularData}
      formLink={'https://forms.gle/TCyx9ivaZzZsUEMm8'}
    />
  );
};

export default Scioto;
