import React, { useEffect, useState } from 'react';
import dev from '../Images/shamil.png';
import { TbMailFilled } from "react-icons/tb";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { motion } from "framer-motion";
import TextType from '../UI/TextType';
import PixelBlast from '../UI/PixelBlast';
import { Phone, Mail } from 'lucide-react';
import PageLoader from '../UI/PageLoader';

function Home() {
      const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate minimal load time (or wait for assets)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200); // Show loader for at least 1.2s

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <PageLoader />;
  }
    return (
        <div
            id="main"
            className="relative w-full flex items-center justify-center pt-15 bg-[#010212]"
        >
            {/* PixelBlast Background Only */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <PixelBlast
                    variant="circle"
                    pixelSize={6}
                    color="#B19EEF"
                    patternScale={3}
                    patternDensity={1.2}
                    pixelSizeJitter={0.5}
                    enableRipples
                    rippleSpeed={0.4}
                    rippleThickness={0.12}
                    rippleIntensityScale={1.5}
                    liquid
                    liquidStrength={0.12}
                    liquidRadius={1.2}
                    liquidWobbleSpeed={5}
                    speed={0.6}
                    edgeFade={0.25}
                    transparent
                />
            </div>

            {/* Content */}
            <div className="container mx-auto z-10 relative">
                <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16">

                    {/* Left: Text */}
                    <div className="text-center md:text-left max-w-xl font-halvicta ms-10">
                        <h1 className="text-xl md:text-3xl font-bold text-white mb-4 leading-tight">
                            Hi, I'm <br />
                            <span
                                style={{ fontFamily: '"Audiowide", sans-serif' }}
                                className="block text-6xl md:text-8xl lg:text-8xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
                            >
                                SHAMIL
                            </span>
                        </h1>

                        <TextType
                            text={[
                                "Full Stack developer specializing in MERN stack",
                                "Expertise in JavaScript, React, Node.js and MongoDB",
                                "Building responsive and scalable web applications",
                                "Creating modern UI with React and Tailwind CSS",
                            ]}
                            typingSpeed={75}
                            pauseDuration={1500}
                            showCursor={true}
                            cursorCharacter="_"
                            cursorClassName="text-white font-xl"
                            className="text-xl"
                        />

                        <p className="text-gray-300 my-4">Connect with me</p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center text-gray-300">
                            <div className="flex items-center gap-2 font-bold">
                                <Phone className="w-4 h-4 " />
                                +91 9497225708
                            </div>
                            <div className="flex items-center gap-2 font-semibold">
                                <Mail className="w-4 h-4" />
                                shamilpk708@gmail.com
                            </div>
                        </div>
                    </div>

                    <img
                        src={dev}
                        alt="Shamil"
                        className="w-auto h-[60vh] md:h-[85vh] max-h-[800px] max-w-[80vw] md:max-w-[500px] object-contain object-bottom"
                    />
                </div>
            </div>

            {/* Social Icons */}
            <motion.div
                className="fixed right-6 bottom-6 flex flex-col gap-6 z-20 mb-10
                    bg-gradient-to-b from-[#1e1772] to-[#010212] p-2 rounded-2xl shadow-lg backdrop-blur-md border border-gray-800"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
            >
                <a
                    href="https://github.com/shaamyll"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-200 hover:text-white transition-transform duration-300 hover:scale-125"
                    aria-label="GitHub"
                >
                    <FaGithub className="w-6 h-6" />
                </a>
                <a
                    href="https://www.linkedin.com/in/shaamyll/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-200 hover:text-white transition-transform duration-300 hover:scale-125"
                    aria-label="LinkedIn"
                >
                    <FaLinkedin className="w-6 h-6" />
                </a>
                <a
                    href="https://www.instagram.com/shaamyll"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-200 hover:text-white transition-transform duration-300 hover:scale-125"
                    aria-label="Instagram"
                >
                    <SiInstagram className="w-6 h-6" />
                </a>
                <a
                    href="mailto:shamilpk708@gmail.com"
                    className="text-gray-200 hover:text-white transition-transform duration-300 hover:scale-125"
                    aria-label="Email"
                >
                    <TbMailFilled className="w-6 h-6" />
                </a>
            </motion.div>
        </div>
    );
}

export default Home;