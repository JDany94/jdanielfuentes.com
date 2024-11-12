import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "../styles.css";

const Sidebar = ({ setActiveSection, activeSection }) => {
  return (
    <div className="sidebar-container">
      <div>
        <img src="/profile.jpg" alt="Profile" className="profile-image" />
        <h1 className="name">DANIEL FUENTES</h1>
        <nav className="menu">
          <a
            href="#home"
            className={`menu-item ${activeSection === 'home' ? 'active' : ''}`}
            onClick={() => setActiveSection('home')}
          >
            {activeSection === 'home' ? '> ' : ''}Home
          </a>
          <a
            href="#about"
            className={`menu-item ${activeSection === 'about' ? 'active' : ''}`}
            onClick={() => setActiveSection('about')}
          >
            {activeSection === 'about' ? '> ' : ''}About
          </a>
          <a
            href="#contact"
            className={`menu-item ${activeSection === 'contact' ? 'active' : ''}`}
            onClick={() => setActiveSection('contact')}
          >
            {activeSection === 'contact' ? '> ' : ''}Contact
          </a>
        </nav>
      </div>
      <div className="social-links">
        <a
          href="https://github.com/JDany94"
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/jos%C3%A9-daniel-fuentes-45a099173"
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
