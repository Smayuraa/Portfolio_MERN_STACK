import React from "react";
import "../Styles/Skills.css"; // Import the custom CSS file

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h1 className="heading text-center">
        My <span>Skills</span>
      </h1>

      <div className="container">
        <div className="row">
          {/* Frontend Skills Column */}
          <div className="col-md-6">
            <h3 className="title">Frontend Skills</h3>
            <div className="skills-box">
              <div className="skills-content">
                <div className="progress">
                  <h3>HTML <span>90%</span></h3>
                  <div className="progress-bar bg-primary" role="progressbar" style={{ width: "90%" }}></div>
                </div>
                <div className="progress">
                  <h3>CSS <span>85%</span></h3>
                  <div className="progress-bar bg-secondary" role="progressbar" style={{ width: "85%" }}></div>
                </div>
                <div className="progress">
                  <h3>JavaScript <span>80%</span></h3>
                  <div className="progress-bar bg-warning" role="progressbar" style={{ width: "80%" }}></div>
                </div>
                <div className="progress">
                  <h3>React.js <span>85%</span></h3>
                  <div className="progress-bar bg-info" role="progressbar" style={{ width: "85%" }}></div>
                </div>
                <div className="progress">
                  <h3>Tailwind CSS <span>75%</span></h3>
                  <div className="progress-bar bg-success" role="progressbar" style={{ width: "75%" }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Backend Skills Column */}
          <div className="col-md-6">
            <h3 className="title">Backend Skills</h3>
            <div className="skills-box">
              <div className="skills-content">
                <div className="progress">
                  <h3>Node.js <span>80%</span></h3>
                  <div className="progress-bar bg-primary" role="progressbar" style={{ width: "80%" }}></div>
                </div>
                <div className="progress">
                  <h3>Express.js <span>80%</span></h3>
                  <div className="progress-bar bg-secondary" role="progressbar" style={{ width: "80%" }}></div>
                </div>
                <div className="progress">
                  <h3>MongoDB <span>85%</span></h3>
                  <div className="progress-bar bg-warning" role="progressbar" style={{ width: "85%" }}></div>
                </div>
                <div className="progress">
                  <h3>EJS <span>85%</span></h3>
                  <div className="progress-bar bg-info" role="progressbar" style={{ width: "85%" }}></div>
                </div>
                <div className="progress">
                  <h3>GitHub <span>70%</span></h3>
                  <div className="progress-bar bg-success" role="progressbar" style={{ width: "70%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Skills Column */}
        <div className="col-md-12">
          <h3 className="title">Other Skills</h3>
          <div className="skills-box">
            <div className="skills-content">
              <div className="progress">
                <h3>Java <span>80%</span></h3>
                <div className="progress-bar bg-primary" role="progressbar" style={{ width: "80%" }}></div>
              </div>
              <div className="progress">
                <h3>Data Structures & Algorithms <span>85%</span></h3>
                <div className="progress-bar bg-secondary" role="progressbar" style={{ width: "85%" }}></div>
              </div>
              <div className="progress">
                <h3>JavaScript Algorithms <span>80%</span></h3>
                <div className="progress-bar bg-warning" role="progressbar" style={{ width: "80%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
