import React from "react";
import { Link } from "react-router-dom";
import resume from "../assets/Mayuri_Rajesh_Sharma_Resume.pdf";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-dark full-width-navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">SHARMA.</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto text-center">
              <li className="nav-item">
                <a className="nav-link active" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#education">Education</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">Projects</a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="#free">Freelance</a>
              </li> */}
              <li className="nav-item">
                <a className="nav-link btnn" href={resume} target="_blank" rel="noopener noreferrer">
                  CV
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
