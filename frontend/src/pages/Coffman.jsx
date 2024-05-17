import React from 'react'
import Display from '../components/Display'
import Header from '../components/Header'
import extracurricularData from '../data/extracurriculars/coffman_extracurriculars.json'

const Coffman = () => {
  return (
    <>
      <Header schoolName="COFFMAN" link={"https://google.com"}/>
      <Display schoolName="COFFMAN" extracurricularData={extracurricularData}/>
    </>
  )
}

export default Coffman