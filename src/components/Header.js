import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <header>
      <h1>Your Name</h1>
      <nav>
        <ul>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#hire-me">Hire Me</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
