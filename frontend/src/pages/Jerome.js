import React from 'react'
import Display from '../components/Display'
import extracurricularData from '../data/jerome.json'
import schoolLogo from '../assets/jerome_logo.png'

const Jerome = () => {
  return (
    <Display schoolName="Jerome" schoolLogo={schoolLogo} extracurricularData={extracurricularData} formLink={"https://google.com"} />
  )
}

export default Jerome