import React from 'react';
import extracurricularData from '../../data/extracurriculars/coffman.json';
import ExtracurricularPage from '../../components/ExtracurricularPage';
import coffmanLogo from '../../data/images/coffman_logo.png';
const Coffman = () => {
  return (
    <ExtracurricularPage extracurricularData={extracurricularData} schoolName="COFFMAN" link={'https://google.com'} logo={coffmanLogo} />
  );
};

export default Coffman;
