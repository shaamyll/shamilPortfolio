import Home from '../components/Home/Home'
import About from '../components/About/About'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Skill from '../components/Skill/Skill'
import ProjectCard from '../components/Work/ProjectCard'


function Potfolio() {

  return (
    <div>
        <Header/>
        <Home/>
        <About/>  
        <Skill/>
        <ProjectCard/>
        <Footer/>
    </div>
  )
}

export default Potfolio