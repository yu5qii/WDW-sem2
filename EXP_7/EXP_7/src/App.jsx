import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { StudentInformation } from './Components/StudentInformation'

function App() {

  return (
    <>
      <StudentInformation 
      name1={'Rahul Sharma'} name2={'Anita Verma'} name3={'Rohan Gupta'}
      course1={'Computer Science'} course2={'Information Technology'} course3={'Electronics'}
      marks1={85} marks2={92} marks3={78}>

      </StudentInformation>
    </>
  )
}


export default App
