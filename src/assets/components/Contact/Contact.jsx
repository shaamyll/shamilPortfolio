import React, { useState } from 'react'
import { GoArrowUpRight } from "react-icons/go";
import { CgNotes } from "react-icons/cg";
import './Contact.css'

function Contact() {

      const [coords, setCoords] = useState({ x: 50, y: 50 });
  
      const handleMouseMove = (e) => {
          const x = (e.clientX / window.innerWidth) * 100;
          const y = (e.clientY / window.innerHeight) * 100;
          setCoords({ x, y });
      };
  
      const backgroundStyle = {
  
          background: `radial-gradient(circle at ${coords.x}% ${coords.y}%, #1e1772  0%, rgb(1, 2, 18) 100%)`,
          transition: 'background 0.1s ease',
      };
  
  return (
    <div style={backgroundStyle} onMouseMove={handleMouseMove} className='p-5 '  id='contact'>
      <h1 >Contact</h1>
      <div className="row mt-md-4">
        <div className="col-12 col-md-5">
          <h5 className='text-muted'>Email</h5>
          <h4>shamilpk708@gmail.com</h4>
          <br />
          <h5 className='text-muted'>Location</h5>
          <h4>Kannur, Kerala</h4>
        </div>
        <div className="col-12 col-md-4">
          <h4 className='text-muted'>Social</h4> <br />
          <a href="https://github.com/shaamyll"> 
            <h4 className='border-bottom w-50 flex items-center gap-2 fs-4'>Github<GoArrowUpRight /></h4>
          </a>
          <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"> 
            <h4 className='border-bottom w-50 flex items-center gap-2'>Linkedin<GoArrowUpRight /></h4>
          </a>
          <a href="https://www.instagram.com/shaamyll"> 
            <h4 className='border-bottom w-50 flex items-center gap-2'>Instagram<GoArrowUpRight /></h4>
          </a>
        </div>
        <div className="col-12 col-md-3">
          <h5 className='text-muted'>Designed and Developed By</h5>
          <h4 className='fw-bold'>Muhammed Shamil</h4>
          <a
            href="https://drive.google.com/file/d/1sqMF3_3PkMSE6EUDkCOyo20w0tqrNCn8/view?usp=drive_link"
            className="d-flex justify-content-center mt-5 text-decoration-none"
          >
            <h4 id="resume" className="d-flex align-items-center gap-2 m-0 text-white">
              RESUME <CgNotes />
            </h4>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
