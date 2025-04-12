import React from 'react'
import Home from '../components/Home/Home'
import Skill from '../components/Skill/Skill'
import Work from '../components/Work/Work'
import About from '../components/About/About'
import Contact from '../components/Contact/Contact'
import Header from '../components/Header/Header'

function Potfolio() {
  return (
    <div>
      <Header/>
        <Home/>
        <About/>
        <Skill/>
        <Work/>
        <Contact/>

    </div>
  )
}

export default Potfolio