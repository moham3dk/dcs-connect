import React from 'react';
import Display from '../components/Display';
import extracurricularData from '../data/jerome.json';
import schoolLogo from '../assets/jerome_logo.png';

const Jerome = () => {
  return (
    <Display
      schoolName="Jerome"
      schoolLogo={schoolLogo}
      extracurricularData={extracurricularData}
      formLink={'https://forms.gle/pwXErVYVZjMF14TH8'}
    />
  );
};

export default Jerome;
