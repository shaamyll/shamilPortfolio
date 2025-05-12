import React, { useState } from 'react';
import './Work.css';
import dm1 from '../Images/dm1.png';
import zn from '../Images/zn.png'
import pb from '../Images/pb.png'
import Card from 'react-bootstrap/Card';

function Work() {
  // State to track which project is being hovered
  const [hoveredProject, setHoveredProject] = useState(null);

  // Project data
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
      number: "03",
      title: "PROJECT-FAIR",
      techStack: "React.js,JavaScript,Node.js,Express.js,MongoDB,Bootstrap,Responsive design",
      description: "Project Fair is a dynamic web platform designed for developers and tech enthusiasts to upload, share, and discover innovative projects. It allows users to showcase their work, explore others' contributions, and connect with a community of like-minded creators. The application features secure user authentication, responsive design, and an intuitive interface that encourages collaboration and knowledge sharing.",
      link: "",
      github:"https://github.com/shaamyll/projectfair-frontend.git",
      image: "https://media.istockphoto.com/id/1443114875/vector/brainstorming-team-concept-business-people-discussing-idea-on-board-meeting-in-office.jpg?s=612x612&w=0&k=20&c=c3JmOoWVX-TQykCXY8a1jMEYuB-td5DTMYHO9msBIuM="
    },
    {
      id: 4,
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
    <div id='work-section' className='pt-5 pb-5 mb-4'
 >
      <div className="container">
        <center>
 
            <h1 className='mb-4'id='heading' >Projects</h1>
     
        </center>

        <div className="flex flex-wrap justify-center gap-5 pt-5">
          {projects.map((project) => (



            <Card id='project' className="w-full md:w-1/3 p-2"  onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}>
              <div className="image-container">
                <Card.Img id='image' variant="top" src={project.image} className='rounded' />

                {hoveredProject === project.id && (
                  <div className="overlay-top">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="overlay-btn">View</a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="overlay-btn">GitHub</a>
                  </div>
                )}
              </div>
              <Card.Body id='pbody'>
                <Card.Title id='title' className='fw-bold'>{project.title} <br />
                  <span id='techstack' style={{ fontSize: "small" }}>{project.techStack}</span>
                </Card.Title>

                <Card.Text className='description-scroll'>


                  "{project.description}"
                </Card.Text>
              </Card.Body>
            </Card>


          ))}
        </div>
      </div>
    </div>
  );
}

export default Work;