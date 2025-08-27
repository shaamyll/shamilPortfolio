import React from "react";
import html from "../Images/html.png";
import css from "../Images/css.png";
import react from "../Images/physics.png";
import boot from "../Images/boot.png";
import js from "../Images/js.png";
import ts from "../Images/ts.png";
import ang from "../Images/ang.png";
import node from "../Images/nodejs.png";
import ex from "../Images/express.png";
import db from "../Images/mongo.png";
import './Skill.css'
const skills = [
  { img: html, name: "HTML" },
  { img: css, name: "CSS" },
  { img: boot, name: "Bootstrap" },
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDML5CFq70Y9FJ52YnyCjfdyUA3g9B6is_jA&s", name: "Tailwind" },
  { img: js, name: "JavaScript" },
  { img: ts, name: "TypeScript" },
  
  { img: react, name: "React" },
  { img: ang, name: "Angular" },
  { img: node, name: "Node.js" },
  { img: ex, name: "Express.js" },
  { img: db, name: "MongoDB" },

    { img: "https://img.icons8.com/color/512/git.png", name: "Git" },
  { img: "https://w7.pngwing.com/pngs/28/245/png-transparent-postman-hd-logo-thumbnail.png  ", name: "Postman" },
  { img: "https://static-00.iconduck.com/assets.00/twilio-icon-512x512-bm2sbpa4.png", name: "Twilio API" },
  { img: "https://w7.pngwing.com/pngs/88/578/png-transparent-razorpay-logo-thumbnail-tech-companies-thumbnail.png", name: "Razorpay" },
  { img: "https://www.svgrepo.com/show/354513/vercel-icon.svg", name: "vercel" },
    { img: "https://pbs.twimg.com/profile_images/1735429515541938176/zOO1N7Su_400x400.jpg", name: "Render" },
  { img: "https://static-00.iconduck.com/assets.00/netlify-icon-2045x2048-j2yz3d5y.png", name: "Netlify" },


];

// Split skills into two groups
const firstRow = skills.slice(0, 6);
const secondRow = skills.slice(6, 10);
const thirdRow = skills.slice(11, 17);


const Skill = () => {
  return (
    <div
    className="pt-5"
    id="skill-section"
    style={{ paddingBottom:"60px"}}
    >
      <center>
      <h1 id="heading" className="text-4xl">Techstack</h1> <br /> <br />
      </center>
     {/* Second Marquee (Right to Left) */}
     <div
        id="skillsBox"
      >
        <div
        id="scrollRight"
        >
          {[...secondRow, ...secondRow,...secondRow,...secondRow].map((skill, index) => (
            <div
            id="box"
                          key={index}
    
            >
              <img
                src={skill.img}
                alt={skill.name}
  
              />
              <span id="skname"> {skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* First Marquee (Left to Right) */}
      <div id="skillsBox" >
        <div id="scrollLeft" >
          {[...firstRow, ...firstRow,...firstRow,...firstRow].map((skill, index) => (
            <div id="box"
            className=" mt-5"
              key={index}>
              <img
                src={skill.img}
                alt={skill.name}
              />
              <span id="skname">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

 

   <div
   className="mt-5"
        id="skillsBox"
      >
        <div
        id="scrollRight"
        >
          {[...thirdRow, ...thirdRow,...thirdRow,...thirdRow].map((skill, index) => (
            <div
            id="box"
                          key={index}
    
            >
              <img
                src={skill.img}
                alt={skill.name}
  
              />
              <span id="skname"> {skill.name}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Skill;