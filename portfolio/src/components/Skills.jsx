import React from "react";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="heading">
        My <span>Skills</span>
      </h2>
      <div className="skills-row">
        <div className="skills-column">
          <h3 className="title">Frontend Skills</h3>
          <div className="skills-box">
            <div className="skills-content">
              <div className="progress">
                <h3>HTML <span>90%</span></h3>
                <div className="bar"><span></span></div>
              </div>
              <div className="progress">
                <h3>CSS <span>85%</span></h3>
                <div className="bar"><span></span></div>
              </div>
              <div className="progress">
                <h3>JAVASCRIPT <span>80%</span></h3>
                <div className="bar"><span></span></div>
              </div>
              <div className="progress">
                <h3>React Js <span>85%</span></h3>
                <div className="bar"><span></span></div>
              </div>
              <div className="progress">
                <h3>TAILWIND CSS<span>70%</span></h3>
                <div className="bar"><span></span></div>
              </div>
            </div>
          </div>
        </div>

      
        <div className="skills-column">
          <h3 className="title">Backend Skills</h3>
          <div className="skills-box">
            <div className="skills-content">
              <div className="progress">
                <h3>NODE JS <span>80%</span></h3>
                <div className="bar"><span></span></div>
              </div>
              <div className="progress">
                <h3>EXPRESS JS <span>80%</span></h3>
                <div className="bar"><span></span></div>
              </div>
              <div className="progress">
                <h3>MONGODB<span>85%</span></h3>
                <div className="bar"><span></span></div>
              </div>
              <div className="progress">
                <h3>EJS<span>85%</span></h3>
                <div className="bar"><span></span></div>
              </div>
              <div className="progress">
                <h3>GITHUB<span>60%</span></h3>
                <div className="bar"><span></span></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="skills-column">
        <br />
          <h3 className="title"> Skills</h3>
          <div className="skills-box">
            <div className="skills-content">
              <div className="progress">
                <h3>Java <span>80%</span></h3>
                <div className="bar"><span></span></div>
              </div>
              <div className="progress">
                <h3>DATA STRUCTURE AND ALGORITHM<span>85%</span></h3>
                <div className="bar"><span></span></div>
              </div>
            </div>
          </div>
        </div>

    </section>
  );
};

export default Skills;
