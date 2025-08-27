import React, { useState } from "react";
import dm1 from "../Images/dm1.png";
import zn from "../Images/zn.png";
import pb from "../Images/pb.png";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

function Work() {

  const projects = [
    {
      id: 1,
      number: "01",
      title: "DRIVE-MATE",
      techStack: "React.js,JavaScript,Node.js,Express.js,MongoDB,Bootstrap,Bcrypt,Twilio API,Responsive design",
      description: "A platform connecting car owners with drivers for seamless transportation solutions, Integrated secure authentication using JWT (JSON Web Tokens) and implemented password hashing using bcrypt for enhanced security,Implemented OTP-based login authentication using Twilio API to enhance user security during registration.",
      link: "https://drivemate-psi.vercel.app/",
      github:"https://github.com/shaamyll/drivemate-backend.git",
      image: dm1
    },
    {
      id: 2,
      number: "02",
      title: "ZEST-NEST",
      techStack: "Angular.js,JavaScript,TypeScript,Node.js,Express.js,MongoDB,Bootstrap,Responsive,Bcrypt",
      description: "ZestNest is an intuitive and visually engaging recipe application designed to help users discover and explore a variety of dishes from different cuisines. Built using Angular for the frontend and Node.js, Express, and MongoDB for the backend, the app provides a seamless experience for browsing categorized recipes with detailed ingredients and cooking steps. The platform features a responsive layout for all devices and offers smooth navigation for users passionate about cooking.",
      link: "https://zest-nest.vercel.app/",
      github:"https://github.com/shaamyll/ZestNest.git",
      image: zn
    },
    {
      id: 3,
      number: "03",
      title: "PLAYBUZZ",
      techStack: "React.js,JavaScript,Node.js,Express.js,MongoDB,Bootstrap,Responsive design",
      description: "PlayBuzz is a social media platform designed for fun and engaging content sharing, focusing on entertainment and user interaction. It utilizes React Context API for efficient state management, ensuring seamless user experience across the application.",
      link: "https://media-app-shamil.netlify.app/",
      github:"https://github.com/shaamyll/media-app.git",
      image: pb
    },
    {
      id: 4,
      number: "04",
      title: "ECHO_POST",
      techStack: "React.js,JavaScript,Node.js,Express.js,MongoDB,Bootstrap,Responsive design,Tailwind CSS",
      description: "Echopost is a modern blogging platform built to facilitate content creation and user interaction. It features a clean, responsive UI developed with the MERN stack and leverages React Context API for state management. The platform supports CRUD operations, authentication, and rich-text editing, offering a smooth and intuitive writing and reading experience.",
      link: "https://blog-echopost.netlify.app/",
      github:"https://github.com/shaamyll/Echo-post-fullcode.git",
      image: "https://img.freepik.com/free-vector/blogging-fun-content-creation-online-streaming-video-blog-young-girl-making-selfie-social-network-sharing-feedback-self-promotion-strategy-vector-isolated-concept-metaphor-illustration_335657-855.jpg"
    },
    {
      id: 5,
      number: "03",
      title: "PROJECT-FAIR",
      techStack: "React.js,JavaScript,Node.js,Express.js,MongoDB,Bootstrap,Responsive design",
      description: "Project Fair is a dynamic web platform designed for developers and tech enthusiasts to upload, share, and discover innovative projects. It allows users to showcase their work, explore others' contributions, and connect with a community of like-minded creators. The application features secure user authentication, responsive design, and an intuitive interface that encourages collaboration and knowledge sharing.",
      link: "",
      github:"https://github.com/shaamyll/projectfair-frontend.git",
      image: "https://media.istockphoto.com/id/1443114875/vector/brainstorming-team-concept-business-people-discussing-idea-on-board-meeting-in-office.jpg?s=612x612&w=0&k=20&c=c3JmOoWVX-TQykCXY8a1jMEYuB-td5DTMYHO9msBIuM="
    },
    {
      id: 6,
      number: "03",
      title: "REDUX-CART",
      techStack: "React.js,JavaScript,Redux,MongoDB,Bootstrap,Responsive design",
      description: "Redux Cart is a responsive e-commerce application that showcases efficient state management using Redux. It allows users to browse products, add them to a cart, update quantities, and manage cart state globally. The app features seamless user interaction, dynamic product rendering, and persistent cart data handling, providing a smooth and scalable shopping experience.",
      link: "",
      github:"https://github.com/shaamyll/redux-cart.git",
      image: "https://miro.medium.com/v2/resize:fit:800/1*c0JXNVxVnTlOuQCnDqA6CA.png"
    }
  ];

  return (
   <div id="work-section" className="py-20 bg-gray-50">
      <div className="flex flex-col items-center">
        {/* Section Heading */}
        <h1 className="text-4xl font-extrabold text-indigo-600 mb-12 drop-shadow-sm">
          My Projects
        </h1>

        {/* Grid layout with motion animations */}
        <div className="grid grid-cols-12 gap-8 max-w-[1200px] w-full px-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Work;
