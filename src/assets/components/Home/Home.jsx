import React, { useEffect, useState } from 'react';
import dev from '../Images/shamil.png';
import { IoCall } from "react-icons/io5";
import { TbMailFilled } from "react-icons/tb";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";

function Home() {
    const [coords, setCoords] = useState({ x: 50, y: 50 });
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const phrases = [
        "Full Stack developer specializing in MERN stack",
        "Expertise in JavaScript, React, Node.js and MongoDB",
        "Building responsive and scalable web applications",
        "Creating modern UI with React and Tailwind CSS",
    ];

    const handleMouseMove = (e) => {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        setCoords({ x, y });
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [phrases.length]);

    const backgroundStyle = {
        background: `radial-gradient(circle at ${coords.x}% ${coords.y}%, #1e1772 0%, #010212 100%)`,
        transition: 'background 0.1s ease',
    };

    return (
        <div 
            id="main"
            className="min-h-screen flex items-center justify-center p-4 md:p-8 relative overflow-hidden"
            style={backgroundStyle}
            onMouseMove={handleMouseMove}
        >
            <div className="container mx-auto z-10">
                <div className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16">
  
  {/* Left side - Text content */}
  <div className="text-center md:text-left max-w-xl font-halvicta">
    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
      Hi, I'm <span className="text-gradient bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-halvicta">Shamil</span>
    </h1>

    <h2 className="text-lg md:text-2xl text-gray-300 mb-8 transition-all duration-500 font-halvicta">
      Full Stack developer specializing in MERN stack
    </h2>

    <p className="text-gray-300 mb-6">Connect with me</p>


    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start text-gray-300">
      <div className="flex items-center gap-2"><i className="fas fa-phone"></i> +91 9497225708</div>
      <div className="flex items-center gap-2"><i className="fas fa-envelope"></i> shamilpk708@gmail.com</div>
    </div>
  </div>

  {/* Right side - Image */}
  <div className="mt-12 md:mt-0">
    <img 
      src={dev} 
      alt="Shamil" 
      className="w-64 h-80 md:w-80 md:h-80 object-cover rounded-2xl"
    />
  </div>
</div>

                
                {/* Social Icons */}
                <div className="fixed left-6 top-1/2 transform -translate-y-1/2 hidden md:flex flex-col gap-6 z-20">
                    <a 
                        href="https://github.com/shaamyll" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white transition-colors duration-300 transform hover:scale-125"
                        aria-label="GitHub"
                    >
                        <FaGithub className="w-6 h-6" />
                    </a>
                    <a 
                        href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white transition-colors duration-300 transform hover:scale-125"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin className="w-6 h-6" />
                    </a>
                    <a 
                        href="https://www.instagram.com/shaamyll?igshid=MWJqMmdleGxqcW02YQ%3D%3D&utm_source=qr" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white transition-colors duration-300 transform hover:scale-125"
                        aria-label="Instagram"
                    >
                        <SiInstagram className="w-6 h-6" />
                    </a>
                    <a 
                        href="mailto:shamilpk708@gmail.com"
                        className="text-gray-300 hover:text-white transition-colors duration-300 transform hover:scale-125"
                        aria-label="Email"
                    >
                        <TbMailFilled className="w-6 h-6" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Home;