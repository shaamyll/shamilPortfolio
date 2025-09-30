import React, { useEffect, useState } from 'react';
import dev from '../Images/shamil.png';
import { TbMailFilled } from "react-icons/tb";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { motion } from "framer-motion";
import TextType from '../UI/TextType';

function Home() {
    const [coords, setCoords] = useState({ x: 50, y: 50 });

    const handleMouseMove = (e) => {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        setCoords({ x, y });
    };

    const backgroundStyle = {
        background: `radial-gradient(circle at ${coords.x}% ${coords.y}%, #1e1772 0%, #010212 100%)`,
        transition: 'background 0.1s ease',
    };

    return (
        <div
            id="main"
            className=" flex items-center justify-center pt-36 relative overflow-hidden"
            style={backgroundStyle}
            onMouseMove={handleMouseMove}
        >
            <div className="container mx-auto z-10">
                <div className=" flex flex-col md:flex-row items-center justify-between px-6 md:px-16">

                    {/* Left side - Text content */}
                    <div className="text-center md:text-left max-w-xl font-halvicta ms-10">
                        <h1 className="text-xl md:text-3xl font-bold text-white mb-4 leading-tight">
                            Hi, I'm <br />
                            <span style={{ fontFamily: '"Audiowide", sans-serif' }} className="block text-6xl md:text-8xl lg:text-8xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-halvicta">
                                SHAMIL
                            </span>
                        </h1>


                        <TextType
                            text={["Full Stack developer specializing in MERN stack",
                                "Expertise in JavaScript, React, Node.js and MongoDB",
                                "Building responsive and scalable web applications",
                                "Creating modern UI with React and Tailwind CSS",]}
                            typingSpeed={75}
                            pauseDuration={1500}
                            showCursor={true}
                            cursorCharacter="|"
                            cursorClassName='white'
                            className='text-xl'
                        />

                        <p className="text-gray-300 my-4">Connect with me</p>


                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center text-gray-300">
                            <div className="flex items-center gap-2"><i className="fas fa-phone"></i> +91 9497225708</div>
                            <div className="flex items-center gap-2"><i className="fas fa-envelope"></i> shamilpk708@gmail.com</div>
                        </div>
                    </div>

                    {/* Right side - Image */}

                    {/* Right side - Image */}
                    <motion.div
                        className="h-full flex items-end"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <img
                            src={dev}
                            alt="Shamil"
                            className="w-auto h-[40vh] md:h-[70vh] max-h-[800px] max-w-[80vw] md:max-w-[500px] object-contain object-bottom"
                        />
                    </motion.div>
                </div>


                {/* Social Icons */}
                <motion.div
                    className="fixed right-6 bottom-6 flex flex-col gap-6 z-20 mb-10
                        bg-gradient-to-b from-[#1e1772] to-[#010212] p-2 rounded-2xl shadow-lg backdrop-blur-md"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <a href="https://github.com/shaamyll" target="_blank" rel="noopener noreferrer"
                        className="text-gray-200 hover:text-white transition-transform duration-300 hover:scale-125"
                        aria-label="GitHub">
                        <FaGithub className="w-6 h-6" />
                    </a>
                    <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
                        target="_blank" rel="noopener noreferrer"
                        className="text-gray-200 hover:text-white transition-transform duration-300 hover:scale-125"
                        aria-label="LinkedIn">
                        <FaLinkedin className="w-6 h-6" />
                    </a>
                    <a href="https://www.instagram.com/shaamyll?igshid=MWJqMmdleGxqcW02YQ%3D%3D&utm_source=qr"
                        target="_blank" rel="noopener noreferrer"
                        className="text-gray-200 hover:text-white transition-transform duration-300 hover:scale-125"
                        aria-label="Instagram">
                        <SiInstagram className="w-6 h-6" />
                    </a>
                    <a href="mailto:shamilpk708@gmail.com"
                        className="text-gray-200 hover:text-white transition-transform duration-300 hover:scale-125"
                        aria-label="Email">
                        <TbMailFilled className="w-6 h-6" />
                    </a>
                </motion.div>
            </div>
        </div>
    )
}

export default Home;