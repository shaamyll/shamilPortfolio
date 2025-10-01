import ThreeScene from '../ThreeDModel/ThreeScene';
import { PiReadCvLogoFill } from "react-icons/pi";
import { Button } from "@heroui/react";
import VariableProximity from '../UI/VariableProximity';

function About() {
  return (
    <section id="about-full" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 style={{ fontFamily: '"Audiowide", sans-serif' }} className=" text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#62e0e4] to-[#200260] bg-clip-text text-transparent">
            About Me
          </h1>
        </div>

        {/* Main content */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 max-w-6xl mx-auto">
          {/* Left: Text content */}
          <div className="flex-1 text-center md:text-left space-y-6">
            <h2 className="text-xl  font-semibold">
              Hi, I'm Muhammed Shamil PK
            </h2>

            <VariableProximity
              label={'I m a passionate Full Stack Developer with a Bachelors degree in Computer Application and months of hands-on experience in developing dynamic web applications using the MERN Stack'}
              className={'variable-proximity-demo'}
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              radius={100}
              falloff='linear'
            />
            <p className="text-black ">
              My expertise spans across MongoDB, Express.js, React.js, and Node.js, with a strong foundation in
              web development principles and best practices. I love creating efficient, scalable, and
              user-friendly applications that solve real-world problems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              <a
                href="https://drive.google.com/file/d/1I3tUqxdQr-lDOAa5t7J_hb_z8Yv-pZKs/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button
                  className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 
                             text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 
                             transition-all duration-300 transform"
                >
                  <PiReadCvLogoFill className="text-lg group-hover:animate-bounce" />
                  <span>View Resume</span>
                </Button>
              </a>
              <Button
                href="#contact"
                className="px-6 py-3 border-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 
                           font-semibold rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-300"
              >
                Contact Me
              </Button>
            </div>
          </div>

          {/* Right: 3D Scene */}
          <div className="flex-1 w-full max-w-md">
            <div className="relative group">
              <div className="absolute "></div>
              <div className="relative h-96">
                <ThreeScene />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
