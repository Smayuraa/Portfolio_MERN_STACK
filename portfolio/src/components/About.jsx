import React from "react";
import me from "../assets/about.png";
import "../Styles/About.css"; // Make sure this is linked

const About = () => {
  return (
    <section className="about-section" id="about">
      <h2 className="heading">
        About <span>Me</span>
      </h2>

      <div className="about-container">
        <div className="about-image">
          <img src={me} alt="Mayuri Sharma" className="profile-pic" />
        </div>

        <div className="about-text">
          <h3>Hey, I'm <span>Mayuri Rajesh Sharma</span></h3>
          <p>
            A passionate and dedicated Computer Engineering student with a strong foundation in
            <b> Java, Data Structures & Algorithms</b>, and <b> Full Stack Web Development</b>. I
            love building real-world applications and have hands-on experience through projects and
            internships. I'm also a competitive programmer, constantly learning and challenging
            myself. My goal is to become a skilled Software Engineer and contribute to impactful
            tech solutions. Let’s connect and build something amazing together!
          </p>
          <a href="#contact" className="btnn">Let’s Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
