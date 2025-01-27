import React, { useState } from "react";
import axios from 'axios';

import emp from "../assets/emp.png"
import hotel from "../assets/hotel.avif"

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
    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_LINK}/api/contact`, formData);
      alert(response.data.message);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      alert('Failed to submit the form');
      console.error(error);
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
            <p className="description">Contributed to an open-source project focusing on creating engaging user experiences in a travel-based platform   </p>
            <br />
            <a href="https://adventureabode.onrender.com/" target="_blank" rel="noopener noreferrer" className="button">View Demo</a>
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
      
   </>
  );
};

export default Projects;
