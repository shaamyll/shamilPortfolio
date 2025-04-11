import React, { useState, useEffect } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBCollapse,
  MDBBtn
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import './Header.css';
import { TiThMenu } from "react-icons/ti";

function Header() {
  const [openBasic, setOpenBasic] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Function to update screen width on resize
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <div>
        {/* Navbar for large screens */}
        <MDBNavbar 
          className="w-25 hide-nav d-lg-flex container mt-3 border-bottom" 
          id="nav" 
          expand="lg" 
          light 
          style={{ padding: '0px', height: '45px' }}
        >
          <MDBContainer fluid>
            <MDBCollapse navbar open={openBasic} className="d-lg-flex justify-content-center">
              <MDBNavbarNav className="container d-none  d-lg-flex align-items-center" style={{ borderRadius: "40px", height: "40px", color: "black" }}>
              <a href="/" className="me-lg-5 ms-5"><li>HOME</li></a>
                <a href='/work' className="me-lg-5"><li>WORK</li></a>
                <Link to={'/contact'} className="me-lg-5"><li>CONTACT</li></Link>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>

        {/* Full-screen Mobile Menu */}
        {openBasic && (
          <div className="mobile-menu d-lg-flex">
            <button className="close-btn" onClick={() => setOpenBasic(false)}>
              <MDBIcon icon="times" fas />
            </button>

            <div className="menu-items">
              <Link to="/" onClick={() => setOpenBasic(false)}>Home</Link>
              <Link to="/contact" onClick={() => setOpenBasic(false)}>Contact</Link>
              <Link to="/work" onClick={() => setOpenBasic(false)}>Work</Link>
            </div>
          </div>
        )}
      </div>

      {/* Toggler for Mobile Screens */}
      {!openBasic && (
        <div
          className="d-lg-none border-0 shadow-none p-0 toggler"
          style={{
            color: "white",
            position: "fixed",
            top:"2rem",
            zIndex: 1000,
            right:"2rem",
          }}
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"  
          onClick={() => setOpenBasic(!openBasic)}
        >
         <TiThMenu className='fs-1'  />
        </div>
      )}
    </div>
  );
}

export default Header;
