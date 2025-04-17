import React, { useState } from "react";
import axios from 'axios';

import emp from "../assets/emp.png";
import hotel from "../assets/hotel.avif";
import lastNight from "../assets/LNE.png"; // Add image for Last Night Engineering
import gamifiedCoding from "../assets/gamified.jpg"; // Add image for Gamified Coding Platform
import '../Styles/Projects.css'

const Projects = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting:', formData); // Debugging
    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_LINK}/contact`, formData);
      console.log('Response:', response.data); // Debugging
      alert(response.data.message);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      alert('Failed to submit the form');
      console.error('Error:', error); // Detailed error
    }
  };

  return (
    <>
      <section className="projects" id="projects">
        <div id="slides">
          <div id="slide">
            <div id="img">
              <img src={emp} alt="Project Screenshot" />
            </div>
            <div id="content">
              <p className="projectTitle">Employee Management System</p>
              <p className="description">An Employee Management System built with React to manage and organize employee data.</p>
              <br />
              <a href="https://emptrack.netlify.app/" target="_blank" rel="noopener noreferrer" className="button">View Demo</a>
            </div>
          </div>

          <div id="slide">
            <div id="img">
              <img src={hotel} alt="Project Screenshot" />
            </div>
            <div id="content">
              <p className="projectTitle">Adventure Abode</p>
              <p className="description">Contributed to an open-source project focusing on creating engaging user experiences in a travel-based platform</p>
              <br />
              <a href="https://adventureabode.onrender.com/" target="_blank" rel="noopener noreferrer" className="button">View Demo</a>
            </div>
          </div>

          {/* Last Night Engineering Project */}
          <div id="slide">
            <div id="img">
              <img src={lastNight} alt="Project Screenshot" />
            </div>
            <div id="content">
              <p className="projectTitle">Last Night Engineering</p>
              <p className="description">A project focused on real-time problem-solving with engineering solutions, incorporating various design challenges and innovative approaches.</p>
              <br />
              <a href="https://lastnightengineering.com" target="_blank" rel="noopener noreferrer" className="button">View Demo</a>
            </div>
          </div>

          {/* Gamified Coding Platform Project */}
          <div id="slide">
            <div id="img">
              <img src={gamifiedCoding} alt="Project Screenshot" />
            </div>
            <div id="content">
              <p className="projectTitle">Gamified Coding Platform</p>
              <p className="description">A platform designed to provide an engaging and competitive coding environment through real-time battles, interactive mini-games, and a reward system.</p>
              <br />
              <a href="https://gamifiedcodingplatform.com" target="_blank" rel="noopener noreferrer" className="button">View Demo</a>
            </div>
          </div>
        </div>
      </section>
      
      <section className="contact" id="contact">
        <div className="contact-form-container">
          <h2 className="contact-form-title">Contact Us</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-textarea"
                required
              ></textarea>
            </div>
            <button type="submit" className="form-button">
              Submit
            </button>
          </form>
        </div>
      </section>
      <footer className="footer text-center py-4">
  <p>&copy; {new Date().getFullYear()} Mayuri Sharma. All Rights Reserved.</p>
</footer>

    </>
  );
};

export default Projects;
