import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Sanjan B M. All rights reserved.</p>
      <p>Follow me on social media: [Social Links]</p>
    </footer>
  );
};

export default Footer;
