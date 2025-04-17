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
      <br />
      <div className="about-content">
        <h3><strong>Hey, I'm Mayuri Rajesh Sharma</strong></h3>
        <p>
        A passionate and dedicated Computer Engineering student with a strong foundation in <b>Java, Data Structures & Algorithms</b>, and <b>Full Stack Web Development</b>. I love building real-world applications and have hands-on experience through projects and internships. I'm also a competitive programmer, constantly learning and challenging myself. My goal is to become a skilled Software Engineer and contribute to impactful tech solutions. Let's connect and build something amazing together!
        </p>
        <div className="btn-box btns">
          <a href="#" className="btnn">Read More</a>
        </div>
      </div>
    </section>
  );
};

export default About;
