import React from "react";

const ExperienceItem = ({ years, title, description, link }) => {
  return (
    <div className="education-content">
      <div className="content">
        <div className="years">
          <i className="bx bxs-calendar"></i>
          {years}
        </div>
        <h3>{title}</h3>
        <p>
          {description}
          {link && (
            <>
              {" "}
              View my certificate{" "}
              <a style={{ color: "#00abf0" }} href={link}>here</a>.
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default ExperienceItem;
