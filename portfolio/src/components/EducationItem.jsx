import React from "react";

const EducationItem = ({ years, title, description }) => {
  return (
    <div className="education-content">
      <div className="content">
        <div className="years">
          <i className="bx bxs-calendar"></i>
          {years}
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default EducationItem;
