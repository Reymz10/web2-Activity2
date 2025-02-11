import { useState } from 'react'
import Header from './assets/Components/Header'
import Contact from './assets/Components/Contact'
import Skills from './assets/Components/Skills'
import WorkExp from './assets/Components/WorkExp'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='h-100vh'>
    <Header name="Viñas, Reymond L."/>
      <Contact email="vinasreymond911@gmail.com " phone="09319340080" address="Taysan, Legazpi, Albay"/>
      <Skills skill1="JavaScript" skill2="Java" skill3="React"  skill4="Html"  Skill5="C++"/>
      <WorkExp date="2020-2024" date2="2019-2016"/>
    </div>
       
    </>
  )
}

export default App
