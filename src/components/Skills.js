import React from "react";
import "../styles/Skills.css";

const skillsData = ["JavaScript", "React", "Node.js", "CSS", "HTML"];

const Skills = () => {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <ul className="skills-list">
        {skillsData.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
