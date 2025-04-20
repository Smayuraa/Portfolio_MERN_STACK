import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/EducationItem";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from './components/Contact';
// import freelance from './components/FreelancingSection'
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []); 

  return (
    <div>
      <Header />
      <Home />
      <About />
      <Education />
      <Skills />
      <Projects />
      {/* <freelance/> */}
      <Contact />
    </div>
  );
};

export default App;
