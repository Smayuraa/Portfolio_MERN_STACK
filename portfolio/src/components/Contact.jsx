import React, { useState } from "react";
import axios from "axios";
import '../Styles/Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
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
      const response = await axios.post(
        `https://mayuri-sharma-portfolio.onrender.com/contact`,
        formData
      );
      alert(response.data.message);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      alert("Failed to submit the form");
      console.error("Error:", error);
    }
  };

  return (
    <section
      className="py-5"
      id="contact"
      style={{
        backgroundColor: "#112E42",
        color: "#ffffff",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
      }}
    >
      <div className="container d-flex justify-content-center align-items-center">
        <div
          className="p-4 rounded shadow-lg glass-effect"
          style={{
            background: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(10px)",
            width: "100%",
            maxWidth: "600px",
            border: "1px solid rgba(255,255,255,0.1)"
          }}
        >
          <h2 className="text-center mb-4" style={{ fontWeight: "bold", letterSpacing: "1px" }}>
            Contact <span style={{ color: "#00ABF0" }}>Us</span>
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                className="form-control form-control-lg bg-dark text-white border-0"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control form-control-lg bg-dark text-white border-0"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="example@mail.com"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                className="form-control bg-dark text-white border-0"
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Write your message here..."
              ></textarea>
            </div>
            <div className="d-grid">
              <button
                type="submit"
                className="btn"
                style={{
                  backgroundColor: "#00ffcc",
                  color: "#000",
                  fontWeight: "bold",
                  transition: "0.3s ease-in-out"
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = "#00bfa6"}
                onMouseLeave={(e) => e.target.style.backgroundColor = "#00ffcc"}
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      <footer className="text-center mt-5 py-3" style={{ borderTop: "1px solid #00ffcc" }}>
        <p className="mb-0" style={{ color: "#00ffcc" }}>
          &copy; {new Date().getFullYear()} Mayuri Sharma. Designed with 💙
        </p>
      </footer>
    </section>
  );
};

export default Contact;
