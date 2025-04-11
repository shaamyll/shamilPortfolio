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

const skills = [
  { img: html, name: "HTML" },
  { img: css, name: "CSS" },
  { img: boot, name: "Bootstrap" },
  { img: js, name: "JavaScript" },
  { img: ts, name: "TypeScript" },
  { img: react, name: "React" },
  { img: ang, name: "Angular" },
  { img: node, name: "Node.js" },
  { img: ex, name: "Express.js" },
  { img: db, name: "MongoDB" },
];

// Split skills into two groups
const firstRow = skills.slice(0, 5);
const secondRow = skills.slice(5, 10);

const Skill = () => {
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingTop:"50px",
        paddingBottom:"50px"
      }}
    >


      {/* First Marquee (Left to Right) */}
      <div
        style={{
          width: "100%",
          overflow: "hidden",
          whiteSpace: "nowrap",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "50px",
            width: "max-content",
            animation: "scrollLeft 30s linear infinite",
          }}
        >
          {[...firstRow, ...firstRow,...firstRow,...firstRow].map((skill, index) => (
            <div 
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px",
                minWidth: "150px",
              }}
            >
              <img
                src={skill.img}
                alt={skill.name}
                style={{ width: "50px", height: "50px", marginBottom: "5px" }}
              />
              <span className="fs-4">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Second Marquee (Right to Left) */}
      <div
        style={{
          width: "100%",
          overflow: "hidden",
          whiteSpace: "nowrap",
          position: "relative",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "50px",
            width: "max-content",
            animation: "scrollRight 30s linear infinite",
          }}
        >
          {[...secondRow, ...secondRow,...secondRow,...secondRow].map((skill, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px",
                minWidth: "150px",
              }}
            >
              <img
                src={skill.img}
                alt={skill.name}
                style={{ width: "50px", height: "50px", marginBottom: "5px" }}
              />
              <span className="fs-4"> {skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Inline Keyframes for Animations */}
      <style>
        {`
          @keyframes scrollLeft {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          @keyframes scrollRight {
            from { transform: translateX(-50%); }
            to { transform: translateX(0); }
          }
        `}
      </style>
    </div>
  );
};

export default Skill;
