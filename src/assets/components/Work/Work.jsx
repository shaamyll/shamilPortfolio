import React, { useState } from 'react';
import './Work.css';
import dm1 from '../Images/dm1.png';
import zn from '../Images/zn.png'
import pb from '../Images/pb.png'

function Work() {
  // State to track which project is being hovered
  const [hoveredProject, setHoveredProject] = useState(null);

  // Project data
  const projects = [
    {
      id: 1,
      number: "01",
      title: "DRIVE-MATE",
      techStack: "React.js, JavaScript, Node.js, Express.js, MongoDB, HTML, CSS, Bootstrap, Responsive design,bcrypt,Twilio API",
      description: "A platform connecting car owners with drivers for seamless transportation solutions, Integrated secure authentication using JWT (JSON Web Tokens) and implemented password hashing using bcrypt for enhanced security,Implemented OTP-based login authentication using Twilio API to enhance user security during registration.",
      link: "https://drivemate.netlify.app/",
      image: dm1
    },
    {
      id: 2,
      number: "02",
      title: "ZEST-NEST",
      techStack: "Angular.js, JavaScript, TypeScript, Node.js, Express.js, MongoDB, HTML, CSS, Bootstrap, Responsive design",
      description: "A modern food delivery application with real-time order tracking and multiple cuisine options.",
      link: "https://zest-nest.vercel.app/",
      image: zn
    },
    {
      id: 3,
      number: "03",
      title: "PLAYBUZZ",
      techStack: "React.js, JavaScript, Node.js, Express.js, MongoDB, HTML, CSS, Bootstrap, Responsive design",
      description: "A social media platform focused on entertainment and interactive content sharing.",
      link: "https://media-app-shamil.netlify.app/",
      image: pb
    }
  ];

  return (
    <div id="main" style={{ backgroundColor: "black",  paddingTop: "80px", paddingBottom: "80px" }}>
      <div className="container">
        <center>
          <h1 style={{ color: "white", fontSize: "2.5rem", fontWeight: "bolder", marginBottom: "3rem" }}>Projects</h1>
        </center>

        <div className="projects-container">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="project-card mb-5 shadow rounded overflow-hidden"
            >
              <div className="row align-items-center p-2">
                <div className="col-12 col-md-1 text-md-start">
                  <p className="project-number">{project.number}</p>
                </div>
                <div className="col-12 col-md-9 text-md-start">
                  <p className="fs-3 fw-bold text-white mb-0">
                    {project.title}
                  </p>
                </div>
                <div className="col-12 col-md-2 text-end">
                  {/* <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-success px-4 py-2">Live Link</button>
                  </a> */}
                </div>
              </div>
              
              <div 
                className="project-image-container position-relative"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className={`project-image ${hoveredProject === project.id ? 'blur' : ''}`}
                />
                
                {hoveredProject === project.id && (
                  <div className="project-details-overlay">
                    <h3 className="mb-4">{project.title}</h3>
                    <p className="mb-4 tech-stack">{project.techStack}</p>
                    <p className="project-description">{project.description}</p>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <button className="btn btn-outline-light mt-3">Visit Project</button>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Work;