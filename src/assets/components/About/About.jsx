import React from 'react'
import '../About/About.css'
import mern from '../Images/mern.png'
function About() {
  return (

<div style={{backgroundColor:"black", paddingTop:"80px",paddingBottom:"80px"}}>


    <div className="row " id='about'>
      <div className="col-12 col-md-6 container p-md-3" >
        <h1>About me</h1> <br />
      <h4>Hi Iam  MUHAMMED  SHAMIL,</h4> <br />
      <h5>Im a Full Stack Developer with a Bachelors degree in Computer Application and a 6 months of hands-on experience in developing dynamic web applications using MERN Stack. </h5> <br />
      <h5>Expertise in MongoDB, Express.js,Angular.js,React.js and Node.js,with a solid understanding of web 
      development fundamentals.</h5> <br />
      <h1>Techstack</h1> <br />
      {/* <h4>ReactJs,Javascript,NodeJs,MongoDB</h4> */}
      </div>
      <div className="col-12 col-md-3 mt-lg-5 container text-center">
    <img src={mern} alt="" style={{width:"90%"}} />
      </div>
    </div>


    
</div>


  )
}

export default About