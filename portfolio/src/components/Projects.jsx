// src/components/Projects.js
import React from "react";
import emp from "../assets/emp.png";
import hotel from "../assets/hotel.avif";
import lastNight from "../assets/LNE.png";
import gamifiedCoding from "../assets/gamified.jpg";
import "../Styles/Projects.css";

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div id="slides">
        <div id="slide">
          <div id="img">
            <img src={emp} alt="Project Screenshot" />
          </div>
          <div id="content">
            <p className="projectTitle">Employee Management System</p>
            <p className="description">
              An Employee Management System built with React to manage and organize employee data.
            </p>
            <br />
            <a
              href="https://emptrack.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              View Demo
            </a>
          </div>
        </div>

        <div id="slide">
          <div id="img">
            <img src={hotel} alt="Project Screenshot" />
          </div>
          <div id="content">
            <p className="projectTitle">Adventure Abode</p>
            <p className="description">
              Contributed to an open-source project focusing on creating engaging user experiences in a travel-based platform.
            </p>
            <br />
            <a
              href="https://adventureabode.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              View Demo
            </a>
          </div>
        </div>

        <div id="slide">
          <div id="img">
            <img src={lastNight} alt="Project Screenshot" />
          </div>
          <div id="content">
            <p className="projectTitle">Last Night Engineering</p>
            <p className="description">
              A project focused on real-time problem-solving with engineering solutions, incorporating various design challenges and innovative approaches.
            </p>
            <br />
            <a
              href="https://last-night-engineering.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              View Demo
            </a>
          </div>
        </div>

        <div id="slide">
          <div id="img">
            <img src={gamifiedCoding} alt="Project Screenshot" />
          </div>
          <div id="content">
            <p className="projectTitle">Gamified Coding Platform</p>
            <p className="description">
              A platform designed to provide an engaging and competitive coding environment through real-time battles, interactive mini-games, and a reward system.
            </p>
            <br />
            <a
              href="https://gamifiedcodingplatform.com"
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              View Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
