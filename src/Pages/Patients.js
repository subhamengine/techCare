import React from 'react'
import Header from '../components/Header'
import MainSection from '../components/MainSection'

const Patients = () => {
  return (
    <div className='bg-[#F6F7F8] w-[100vw] h-[100vh] flex flex-col items-center p-[2rem] gap-[2rem]'>
      <Header/>
      <MainSection/>
    </div>
  )
}

export default Patients