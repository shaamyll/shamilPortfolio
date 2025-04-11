import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBBtn,
  MDBIcon,
} from 'mdb-react-ui-kit';
import './Footer.css'
import { GoArrowUpRight } from "react-icons/go";

function Footer({ darkMode }) {
  return (
    <div className='' style={{ backgroundColor:'black'}}>
      {/* <h1>Contact</h1> */}
      {/* <div className="row">
        <div className="col-4 p-5">
        <h5>Email</h5>
        <h5>shamilpk708@gmail.com</h5> 
        <br />
        <h5>Location</h5>
        <h5>Kannur,Kerala</h5>
        </div>
        <div className="col-4 p-5">
          <h5>Social</h5> <br />

          <a href=""> <h5 className='border-bottom w-25'>Linkedin<GoArrowUpRight /></h5> </a>
        </div>
        <div className="col-4 p-5">
         <h5> Designed and Developed </h5>
         <h5>by Muhammed Shamil</h5>
        </div>
      </div> */}


      
    </div>
  );
}

export default Footer;
