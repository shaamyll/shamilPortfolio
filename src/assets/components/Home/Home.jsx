    import React from 'react';
    import '../Home/Home.css'
    import image from '../Images/bg4.jpg';
    import dev from '../Images/shamil.png'
    import Skill from '../Skill/Skill';
    import { CiMobile3 } from "react-icons/ci";
    import { MdOutlineEmail } from "react-icons/md";
    import Work from '../Work/Work';
    import { BiBorderAll } from 'react-icons/bi';
    import devcofe from '../Images/devcoffe.png'

    function Home({darkMode}) {
    
        return (
            <div>

            <div
            className='main'
            style={{
            backgroundImage:`url(${image})`,
            }}
        >

        <div className="container " style={{marginTop:"180px"}}>
        <div id='home' className="row border-bottom" >

    <div className="col-12 col-md-5 ps-5 pt-5 " >
    <h2 className='fw-bold'>Hi! , I'm</h2>
    <h1  style={{fontSize:"3rem", fontWeight:"bolder"}}>MUHAMMED</h1>
    <h1 className='fw-bolder animate__animated animate__fadeInDown' style={{fontSize:"5rem"}}>SHAMIL</h1>
    <br />
    <h4> <CiMobile3 /> +91 9497225708 </h4>
    <h4> <MdOutlineEmail /> shamilpk708@gmail.com </h4>
    </div>

    <div className="col-12 col-md-7 text-center">
        <img id='shaa' className='animate__animated ' src={dev} alt="" style={{width:"70%"}} />
    </div>

    
    </div>
        </div>




            
            </div>
            </div>


            
        )
    }

    export default Home;