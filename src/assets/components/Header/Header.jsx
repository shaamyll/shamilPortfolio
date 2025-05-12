import React, { useState, useEffect } from 'react';
import {
  MDBNavbar,
} from 'mdb-react-ui-kit';

import './Header.css';


function Header() {

  const [activeLink, setActiveLink] = useState("home")

  return (
    <div>
      <div>
        <MDBNavbar
          className="mt-3 border-bottom "
          id="nav"
        >
          <a href="#main" onClick={() => setActiveLink("home")} className={activeLink === "home" ? "active-link" : ""}>Home</a>
          <a href="#about-full" onClick={() => setActiveLink("skills")} className={activeLink === "skills" ? "active-link" : ""}>About</a>
          <a href='#skill-section' onClick={() => setActiveLink("Techstack")} className={activeLink === "Techstack" ? "active-link" : ""}>Techstack</a>

          <a href='#work-section' onClick={() => setActiveLink("project")} className={activeLink === "project" ? "active-link" : ""}>Projects</a>
        </MDBNavbar>

      </div>

    </div>
  );
}

export default Header;
