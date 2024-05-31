import React from 'react';
import extracurricularData from '../../data/extracurriculars/scioto.json';
import ExtracurricularPage from '../../components/ExtracurricularPage';
import sciotoLogo from '../../data/images/scioto_logo.png';

const Scioto = () => {
  return (
    <ExtracurricularPage extracurricularData={extracurricularData} schoolName="SCIOTO" link={'https://google.com'} logo={sciotoLogo}/>
  );
};

export default Scioto;
