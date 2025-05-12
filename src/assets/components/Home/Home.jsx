import React, { useEffect, useState } from 'react';
import '../Home/Home.css'
import dev from '../Images/shamil.png'
import { IoCall } from "react-icons/io5";
import { TbMailFilled } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import 'animate.css';

function Home() {
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


      const [currentIndex, setCurrentIndex] = useState(0);
const phrases = [
    "Full Stack developer specializing in MERN stack",
    "Expertise in JavaScript, React, Node.js and MongoDB",
    "Building responsive and scalable web applications",
    "Creating modern UI with React and Tailwind CSS",
];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }, 3000); // Change every 3 seconds

        return () => clearInterval(interval); // cleanup
    }, []);

    return (
        <div>

            <div
                id='main'
                style={backgroundStyle} onMouseMove={handleMouseMove}
            >

                <div className="container " >
                    <div id='home' className="row mt-5  flex justify-center mx-auto" >

                        <div id='first' className="col-12 col-md-5 mt-5 " >
                            <h4 className='fw-bold fs-2 ' id='gm'>Hi! , I'm</h4>
                            <h1 className='animate__animated animate__fadeInDown' id='surname'>SHAMIL<span className="blinking-dot"></span></h1>
                            <br />
                            <h5 style={{height:"60px"}}>{phrases[currentIndex]}</h5>
                            
                            <center>
                                <h5 id='gm'>Connect with me</h5> <br />
                                <div className='flex justify-center items-center gap-6'>
                                   <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"> <h2 ><FaLinkedin  id='logo'  className="text-white hover:text-[#77faff] hover:scale-110 transition-transform duration-300"/></h2></a>

                                <a href="https://github.com/shaamyll">
                                        <h2><FaGithub id='logo'  className="text-white hover:text-[#77faff] hover:scale-110 transition-transform duration-300"/></h2></a>


                                   <a href="https://www.instagram.com/shaamyll">
                                   <h2 ><SiInstagram id='logo'  className="text-white hover:text-[#77faff] hover:scale-110 transition-transform duration-300"/></h2>
                                   </a>

                                </div> <br />
                                <center><h5>OR</h5></center> <br />
                                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 text-white text-sm text-center">
                                    <div className="flex items-center gap-1">
                                        <IoCall className="text-lg text-white fill-white" />
                                        <span id='gm'>+91 9497225708</span>
                                    </div>
                                    <div className="flex items-center gap-1 ">
                                        <TbMailFilled className="text-lg text-white fill-white" />
                                        <span id='gm'>shamilpk708@gmail.com</span>
                                    </div>
                                </div> <br />

                            </center>
                        </div>

                        <div id='imgDiv' className="col-12 col-md-6 ">
                            <div className=''
                                id='sha'
                            >
                                <img id='shaa' className='mx-auto ' src={dev} />
                            </div>
                        </div>


                    </div>
                </div>





            </div>
        </div>



    )
}

export default Home;