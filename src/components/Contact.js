import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText("jdanielfuentes82@gmail.com");
    alert("Correo copiado al portapapeles!");
  };

  return (
    <div className="ContentContainer">
      <div className="BackBlock">
        <h2 className="big-title">Contact</h2>
        <br />
        <p className="CustomYellow">
          I'm currently open to new opportunities, and my inbox is always open.
          <br />
          Whether you have a question or just want to reach out, I'll do my best
          to get back to you promptly.
        </p>
        <br />
        <br />
        <div>
          <p className="pContact">
            <FaEnvelope className="icon"/>{" "}
            <button onClick={copyToClipboard} className="email">
              jdanielfuentes82@gmail.com
            </button>
          </p>
          <br />
          <p className="pContact">
            <FaLinkedin className="icon"/>{" "}
            <a
              href="https://www.linkedin.com/in/jos%C3%A9-daniel-fuentes-45a099173"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              LinkedIn
            </a>
          </p>
          <br />
          <p className="pContact">
            <FaGithub className="icon"/>{" "}
            <a
              href="https://github.com/JDany94"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              GitHub
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
