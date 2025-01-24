import React from "react";
import me from "../assets/me.png";

const About = () => {
  return (
    <section className="about" id="about">
      <h2 className="heading">
        About <span>Me</span>
      </h2>
      <div className="about-img">
        <img src={me} alt="Mayuri Sharma" />
        <span className="circle-spin"></span>
      </div>
      <div className="about-content">
        <h3>Full Stack Developer</h3>
        <p>
        A self-driven and detail-oriented individual with a strong foundation in software development and a passion for building innovative solutions. Skilled in full-stack 
        development and problem-solving, aiming to deliver impactful results through technical expertise.
        </p>
        <div className="btn-box btns">
          <a href="#" className="btn">Read More</a>
        </div>
      </div>
    </section>
  );
};

export default About;
