import React from "react";
import { FaReact, FaNodeJs, FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "react-bootstrap";
import '../Styles/FreelancingSection.css'

const FreelancingSection = () => {
  return (
    <section className="freelancing-section text-center py-5" id="free">
      <h2 className="heading mb-4">
        Freelancing & Expertise
      </h2>
      <p className="mb-4">
        I am a passionate full-stack developer specializing in MERN stack. I offer freelancing services to build scalable and efficient web applications.
      </p>
      <div className="technologies mb-4">
        <span className="tech-icon"><FaReact size={40} color="#61dafb" title="React" /></span>
        <span className="tech-icon"><FaNodeJs size={40} color="#68A063" title="Node.js" /></span>
        <span className="tech-icon"><FaGithub size={40} color="#333" title="GitHub" /></span>
      </div>
      <div className="buttons">
        <Button 
          href="https://www.linkedin.com/in/your-linkedin-profile" 
          target="_blank" 
          className="btn btn-outline-primary mx-2"
        >
          <FaLinkedin size={20} className="me-2" /> LinkedIn
        </Button>
        <Button 
          href="https://github.com/your-github-profile" 
          target="_blank" 
          className="btn btn-outline-dark mx-2"
        >
          <FaGithub size={20} className="me-2" /> GitHub
        </Button>
      </div>
    </section>
  );
};

export default FreelancingSection;
