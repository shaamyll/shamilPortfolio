import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
import { CgNotes } from "react-icons/cg";
import './Contact.css'

function Contact() {
  return (
       <div className='p-5' id='contact' style={{ backgroundColor:'black', paddingTop:"80px"}}>
         <h1>Contact</h1>
         <div className="row">
           <div className="col-12 col-md-5 p-5">
           <h5>Email</h5>
           <h4>shamilpk708@gmail.com</h4> 
           <br />
           <h5>Location</h5>
           <h4>Kannur,Kerala</h4>
           </div>
           <div className="col-12 col-md-3 p-3">
             <h4>Social</h4> <br />
             <a href="https://github.com/shaamyll"> <h4 className='border-bottom w-50'>Github<GoArrowUpRight /></h4> </a>

             <a href="www.linkedin.com/in/muhammed-shamil-pk"> <h4 className='border-bottom w-50'>Linkedin<GoArrowUpRight /></h4> </a>

             <a href="https://www.instagram.com/shaamyll"> <h4 className='border-bottom w-50'>Instagram<GoArrowUpRight /></h4> </a>

           </div>
           <div className="col-12 col-md-3 p-4 ">
            <h5> Designed and Developed </h5>
            <h4>by <span className='fw-bold' style={{color:"gray"}}>Muhammed Shamil</span></h4>
            <a href="file:///C:/Users/VICTUS/OneDrive/Desktop/DOCUMENTS/MUHAMMED-SHAMIL-P-K-CV.pdf"><h4 className='mt-5'>RESUME <CgNotes className='mb-1'/></h4></a>
           </div>
         </div>
   
   
         
       </div>
  )
}

export default Contact