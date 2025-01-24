import React from "react";
import { Link } from "react-router-dom";
import resume from "../assets/Company Resume.pdf"



const Header = () => {
  return (
    <header className="header">
      <a href="#" className="logo">SHARMA.</a>
      <box-icon name="menu" id="menu-icon"></box-icon>
      <nav className="navbar">
        <a href="#home" className="active">Home</a>
        <a href="#about">About</a>
        <a href="#education">Education</a>
        <a href="#skills">Skills</a>
        <a href="#projects" className="btn">Projects</a>
        <a href={resume} className="btn">CV</a> 
        <a href="#contact" className="btn">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
