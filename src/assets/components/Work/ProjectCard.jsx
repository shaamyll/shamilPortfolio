import { Card, CardHeader, CardBody, Image, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@heroui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import dm1 from "../Images/dm1.png";
import zn from "../Images/zn.png";
import pb from "../Images/pb.png";

function ProjectCard() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isHovered, setIsHovered] = useState(false);

  const projects = [
    {
      id: 1,
      number: "01",
      title: "DRIVE-MATE",
      techStack: "React.js,JavaScript,Node.js,Express.js,MongoDB,Bootstrap,Bcrypt,Twilio API,Responsive design",
      description: "A platform connecting car owners with drivers for seamless transportation solutions, Integrated secure authentication using JWT (JSON Web Tokens) and implemented password hashing using bcrypt for enhanced security,Implemented OTP-based login authentication using Twilio API to enhance user security during registration.",
      link: "https://drivemate-psi.vercel.app/",
      github: "https://github.com/shaamyll/drivemate-backend.git",
      image: dm1
    },
    {
      id: 2,
      number: "02",
      title: "ZEST-NEST",
      techStack: "Angular.js,JavaScript,TypeScript,Node.js,Express.js,MongoDB,Bootstrap,Responsive,Bcrypt",
      description: "ZestNest is an intuitive and visually engaging recipe application designed to help users discover and explore a variety of dishes from different cuisines. Built using Angular for the frontend and Node.js, Express, and MongoDB for the backend, the app provides a seamless experience for browsing categorized recipes with detailed ingredients and cooking steps. The platform features a responsive layout for all devices and offers smooth navigation for users passionate about cooking.",
      link: "https://zest-nest.vercel.app/",
      github: "https://github.com/shaamyll/ZestNest.git",
      image: zn
    },
    {
      id: 3,
      number: "03",
      title: "PLAYBUZZ",
      techStack: "React.js,JavaScript,Node.js,Express.js,MongoDB,Bootstrap,Responsive design",
      description: "PlayBuzz is a social media platform designed for fun and engaging content sharing, focusing on entertainment and user interaction. It utilizes React Context API for efficient state management, ensuring seamless user experience across the application.",
      link: "https://media-app-shamil.netlify.app/",
      github: "https://github.com/shaamyll/media-app.git",
      image: pb
    },
    {
      id: 4,
      number: "04",
      title: "ECHO_POST",
      techStack: "React.js,JavaScript,Node.js,Express.js,MongoDB,Bootstrap,Responsive design,Tailwind CSS",
      description: "Echopost is a modern blogging platform built to facilitate content creation and user interaction. It features a clean, responsive UI developed with the MERN stack and leverages React Context API for state management. The platform supports CRUD operations, authentication, and rich-text editing, offering a smooth and intuitive writing and reading experience.",
      link: "https://blog-echopost.netlify.app/",
      github: "https://github.com/shaamyll/Echo-post-fullcode.git",
      image: "https://img.freepik.com/free-vector/blogging-fun-content-creation-online-streaming-video-blog-young-girl-making-selfie-social-network-sharing-feedback-self-promotion-strategy-vector-isolated-concept-metaphor-illustration_335657-855.jpg"
    },
    {
      id: 5,
      number: "03",
      title: "PROJECT-FAIR",
      techStack: "React.js,JavaScript,Node.js,Express.js,MongoDB,Bootstrap,Responsive design",
      description: "Project Fair is a dynamic web platform designed for developers and tech enthusiasts to upload, share, and discover innovative projects. It allows users to showcase their work, explore others' contributions, and connect with a community of like-minded creators. The application features secure user authentication, responsive design, and an intuitive interface that encourages collaboration and knowledge sharing.",
      link: "",
      github: "https://github.com/shaamyll/projectfair-frontend.git",
      image: "https://media.istockphoto.com/id/1443114875/vector/brainstorming-team-concept-business-people-discussing-idea-on-board-meeting-in-office.jpg?s=612x612&w=0&k=20&c=c3JmOoWVX-TQykCXY8a1jMEYuB-td5DTMYHO9msBIuM="
    },
    {
      id: 6,
      number: "03",
      title: "REDUX-CART",
      techStack: "React.js,JavaScript,Redux,MongoDB,Bootstrap,Responsive design",
      description: "Redux Cart is a responsive e-commerce application that showcases efficient state management using Redux. It allows users to browse products, add them to a cart, update quantities, and manage cart state globally. The app features seamless user interaction, dynamic product rendering, and persistent cart data handling, providing a smooth and scalable shopping experience.",
      link: "",
      github: "https://github.com/shaamyll/redux-cart.git",
      image: "https://miro.medium.com/v2/resize:fit:800/1*c0JXNVxVnTlOuQCnDqA6CA.png"
    }
  ];


  return (
    <>
      <div id="work-section" className="flex flex-col items-center ">
        {/* Section Heading */}
        <h1 className="text-4xl font-extrabold mb-14 text-transparent bg-clip-text bg-gradient-to-b from-[#62e0e4] to-[#200260] ">
          My Projects
        </h1>

        {/* Grid layout with motion animations */}
        <div className="grid grid-cols-12 gap-8 max-w-[1200px] w-full px-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="col-span-12 sm:col-span-6 md:col-span-4"
            >
              <Card
                isPressable
                as="a"

                target="_blank"
                className="relative h-[220px] rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <CardHeader className="absolute z-10 top-3 left-3 flex-col items-start">
                  <h4 className="text-black font-bold text-lg drop-shadow-md ">
                    {project.title}
                  </h4>
                </CardHeader>
                <Image
                  removeWrapper
                  alt={project.title}
                  className="z-0 w-full h-full object-cover scale-100 hover:scale-105 transition-transform duration-500"
                  src={project.image}
                />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="5xl"
        backdrop="blur"
        className="dark:bg-gray-900"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-2xl font-bold">
                {project.title}
                <p className="text-sm font-normal text-gray-500">{project.techStack}</p>
              </ModalHeader>
              <ModalBody>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative rounded-xl overflow-hidden">
                    <Image
                      alt={project.title}
                      className="w-full h-auto object-cover rounded-xl"
                      src={project.image}
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold mb-2">Project Overview</h4>
                      <p className="text-gray-700 dark:text-gray-300">
                        {project.longDescription || project.description}
                      </p>
                    </div>

                    {project.features && (
                      <div className="mb-4">
                        <h4 className="text-lg font-semibold mb-2">Key Features</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                          {project.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="mt-auto pt-4">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.techStack.split(',').map((tech, index) => (
                          <span key={index} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-xs rounded-full">
                            {tech.trim()}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-3">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition flex-1 text-center"
                        >
                          Live Demo
                        </a>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition flex-1 text-center"
                        >
                          View Code
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}


export default ProjectCard;