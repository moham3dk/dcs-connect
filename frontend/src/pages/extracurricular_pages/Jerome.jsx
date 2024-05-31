import React from 'react';
import extracurricularData from '../../data/extracurriculars/jerome.json';
import ExtracurricularPage from '../../components/ExtracurricularPage';
import jeromeLogo from '../../data/images/jerome_logo.png';
const Jerome = () => {
  return (
    <ExtracurricularPage extracurricularData={extracurricularData} schoolName="JEROME" link={'https://google.com'} logo={jeromeLogo} />
  );
};

export default Jerome;
