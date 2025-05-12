import React, { useState } from 'react'
import '../About/About.css'
import mern from '../Images/mern.png'
import Skill from '../Skill/Skill'
import { PiReadCvLogoFill } from "react-icons/pi";
import ThreeScene from '../ThreeDModel/ThreeScene'
function About() {

  return (

    <div id='about-full' className='pt-lg-5 mt-5' >


      <center>
        <h1 id='heading'>About me</h1> <br />

      </center>

      <div className="row container mx-auto" id='about'>


        <div className="col-12 col-md-7 mx-auto " id='content'  >
          <h4 className=' font-bold'>Hi Iam  Muhammed Shamil pk,</h4> <br />
          <h5 className='font-medium'>Im a Full Stack Developer with a Bachelors degree in Computer Application and a 6 months of hands-on experience in developing dynamic web applications using MERN Stack. </h5> <br />
          <h5 className='leading-relaxed'>Expertise in MongoDB, Express.js,Angular.js,React.js and Node.js,with a solid understanding of web
            development fundamentals.</h5> <br />
      <div className='flex justify-center'>
              <a
              href="https://drive.google.com/file/d/1I3tUqxdQr-lDOAa5t7J_hb_z8Yv-pZKs/view?usp=drive_link"
              className="flex items-center text-decoration-none"
            >
              <div id="resume" className="flex items-center gap-1">
                <PiReadCvLogoFill  className=' text-lg fill-white'/>RESUME
              </div>
            </a>
      </div>
        </div>
        <div className="col-11 col-md-4 mx-auto" id='threed' >
          {/* <img src={mern} alt="" className=' mx-auto' /> */}
      <ThreeScene/>
        </div>
      </div>


    </div>


  )
}

export default About