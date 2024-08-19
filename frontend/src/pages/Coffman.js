import React from 'react';
import Display from '../components/Display';
import extracurricularData from '../data/coffman.json';
import schoolLogo from '../assets/coffman_logo.png';

const Coffman = () => {
  return (
    <div>
      <Display
        schoolName="Coffman"
        schoolLogo={schoolLogo}
        extracurricularData={extracurricularData}
        formLink={'https://forms.gle/qs4qq7wJe7SpdP3g6'}
      />
    </div>
  );
};

export default Coffman;
