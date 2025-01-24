import React from "react";
import 'boxicons'


const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h1>Hey, I'm <span>Mayuri Rajesh Sharma</span></h1>
        <div className="text-animate">
          <h3>Full Stack Developer</h3>
        </div>
        <p>
        A self-driven and detail-oriented individual with a strong foundation in software development<br></br> and a passion for building innovative solutions. Skilled in full-stack 
        development and problem-solving,<br /> aiming to deliver impactful results through technical expertise. 
        </p>
        <div className="btn-box">
          <a href="tel:+919503719201" className="btn">Hire Me</a>
          <a href="contact.jsx" className="btn">Let's Talk</a>
        </div>
      </div>

      <div className="home-sci">
        <a href="https://wa.me/qr/ZWIEBHKDE2P6M1">
          {/* <i className="bx bxl-whatsapp"></i> */}
          <box-icon type='logo' name='whatsapp'></box-icon>
        </a>
        <a href="https://github.com/Smayuraa">
        <box-icon name='github' type='logo' ></box-icon>
        </a>
        <a href="https://www.linkedin.com/in/sharma-mayuri-abc12/">
        <box-icon name='linkedin-square' type='logo' ></box-icon>
        </a>
      </div>
    </section>
  );
};

export default Home;
