import React from "react";
import 'boxicons';
import '../Styles/Home.css';
import profilePic from '../assets/me.png'; // <-- use your actual image file

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-container">

        {/* LEFT: Text content */}
        <div className="home-content">
          <h1>
            Hey, I'm <span className="highlight">Mayuri Rajesh Sharma</span>
          </h1>

          <div className="text-animate">
            <h3>Full Stack Developer | Software Engineer</h3>
          </div>

          <p className="intro-text">
          Passionate and dedicated Full Stack Web Developer with expertise in building dynamic, scalable web applications. I thrive on creating efficient, user-friendly solutions with modern technologies
          </p>

          <div className="btn-box">
            <a href="tel:+919503719201" className="btn">Hire Me</a>
            <a href="#contact" className="btn secondary">Let's Talk</a>
          </div>

          <div className="home-sci">
            <a href="https://wa.me/qr/ZWIEBHKDE2P6M1" target="_blank" aria-label="WhatsApp" className="icon-link">
              <box-icon type="logo" name="whatsapp" color="#25D366" size="lg"></box-icon>
            </a>
            <a href="https://github.com/Smayuraa" target="_blank" aria-label="GitHub" className="icon-link">
              <box-icon name="github" type="logo" color="#ffffff" size="lg"></box-icon>
            </a>
            <a href="https://www.linkedin.com/in/sharma-mayuri-abc12/" target="_blank" aria-label="LinkedIn" className="icon-link">
              <box-icon name="linkedin-square" type="logo" color="#0077b5" size="lg"></box-icon>
            </a>
          </div>
        </div>

        {/* RIGHT: Profile Image */}
        <div className="home-image">
          <img 
            srcSet={`${profilePic}?w=500`} 
            sizes="(max-width: 768px) 250px, 300px" 
            src={profilePic} 
            alt="Mayuri Rajesh Sharma - Full Stack Developer" 
            loading="lazy"
          />
        </div>

      </div>
    </section>
  );
};

export default Home;
