import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Skills.css'; // custom CSS for colors

const skills = [
  { name: 'HTML', level: 99 },
  { name: 'CSS', level: 98 },
  { name: 'JavaScript', level: 97 },
  { name: 'React JS', level: 95 },
  { name: 'Node JS', level: 94 },
  { name: 'Express', level: 92 },
  { name: 'MongoDB', level: 91 },
  { name: 'Java', level: 96 },
  { name: 'Data Structures & Algorithms', level: 94 },
  { name: 'Full Stack Developer', level: 95 },
];

const Skills = () => {
  return (
    <div className="skills-container py-5" id="skills">
      <div className="text-center mb-4">
        <h1>
          My Work <span className="main-color">Skills</span>
        </h1>
        <br />
      </div>
      <div className="row">
        {skills.map((skill, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="skill-card p-3 h-100">
              <h5>{skill.name}</h5>
              <div className="progress custom-progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: `${skill.level}%` }}
                  aria-valuenow={skill.level}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <div className="text-end mt-2">{skill.level}%</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
