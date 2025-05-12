import React, { useState } from 'react'
import Home from '../components/Home/Home'
import Skill from '../components/Skill/Skill'
import Work from '../components/Work/Work'
import About from '../components/About/About'
import Contact from '../components/Contact/Contact'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

function Potfolio() {

  return (
    <div>
        <Header/>
        <Home/>
        <About/>  
        <Work/>
        {/* <Contact/> */}
        <Footer/>
    </div>
  )
}

export default Potfolio