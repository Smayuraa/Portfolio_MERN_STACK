import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/EducationItem";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import "./App.css"

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Education />
      <Skills />
      <Projects />
      {/* <Contact/> */}
    </div>
  );
};

export default App;
