import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import "../Styles/EductionItem.css"; // Importing the CSS file

const timelineData = {
  education: [
    {
      year: "2004–2018",
      title: "School - Adarsh Vidya Mandir",
      description:
        "I completed my school education at Adarsh Vidya Mandir, where I developed a strong academic foundation and a passion for learning."
    },
    {
      year: "2019–2021",
      title: "Diploma In Engineering - Dr. Dy Patil University",
      description:
        "Pursued my Diploma in Engineering at DY Patil School of Engineering and Technology, Ambi, Pune."
    },
    {
      year: "2022–2025",
      title: "B.Tech in Computer Engineering",
      description:
        "Currently pursuing my Bachelor's degree with knowledge in web dev, DSA, and more."
    }
  ],
  experience: [
    {
      year: "2024",
      title: "Full Stack Developer : Apna College",
      description:
        "Learned to build full-stack web applications with React, Node.js, Express.js, and MongoDB."
    },
    {
      year: "2023",
      title: "Responsive Web Design: freeCodeCamp",
      description:
        "Learned to build adaptable websites using HTML, CSS, and media queries."
    },
    {
      year: "2023",
      title: "Java Internship: InternPe",
      description:
        "Completed a Java internship with real-world assignments and mini-projects."
    }
  ]
};

const TimelineItem = ({ year, title, description }) => (
  <div className="timeline-item">
    <div className="timeline-year">
      <FaCalendarAlt className="calendar-icon" />
      <span>{year}</span>
    </div>
    <h3 className="timeline-title">{title}</h3>
    <p className="timeline-description">{description}</p>
  </div>
);

const TimelineSection = ({ title, data }) => (
  <div className="timeline-section">
    <h2 className="section-heading">{title}</h2>
    {data.map((item, idx) => (
      <TimelineItem key={idx} {...item} />
    ))}
  </div>
);

export default function EducationItem() {
  return (
    <section id="education">
      <div className="timeline-container" id="education">
      <TimelineSection title="Education" data={timelineData.education} />
      <TimelineSection title="Experience" data={timelineData.experience} />
    </div>
    </section>
  );
}
