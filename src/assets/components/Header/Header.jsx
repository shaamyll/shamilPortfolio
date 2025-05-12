import React, { useState, useEffect } from 'react';
import {
  MDBNavbar,
} from 'mdb-react-ui-kit';

import './Header.css';


function Header() {

  const [activeLink,setActiveLink] = useState("home")

  return (
    <div>
      <div>
        <MDBNavbar 
          className="mt-4 border-bottom " 
          id="nav" 
        >
              <a href="#main" onClick={()=>setActiveLink("home")} className={activeLink==="home"?"active-link":""}>Home</a>
              <a href="#about-full" onClick={()=>setActiveLink("skills")} className={activeLink==="skills"?"active-link":""}>About</a>
                <a href='#work-section' onClick={()=>setActiveLink("project")} className={activeLink==="project"?"active-link":""}>Projects</a>
                <a href='#contact' onClick={()=>setActiveLink("contact")} className={activeLink==="contact"?"active-link":""}>Contact</a>
        </MDBNavbar>

      </div>

    </div>
  );
}

export default Header;
