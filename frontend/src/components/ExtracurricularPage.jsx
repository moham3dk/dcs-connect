import React from 'react'
import Header from './Header'
import Display from './Display'

const ExtracurricularPage = ({extracurricularData, schoolName, link, logo}) => {
  return (
    <>
    <Header schoolName={schoolName} link={link} logo={logo} />
    <Display extracurricularData={extracurricularData} schoolName={schoolName} />
    </>
  )
}

export default ExtracurricularPage