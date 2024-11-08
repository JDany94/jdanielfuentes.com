import React from "react";
import '../App.css';

function Portfolio() {
  return (
    <section className="portfolio-section">
      <h2>Portafolio</h2>
      <div className="portfolio-projects">
        <div className="portfolio-project">
          <h3>Proyecto 1</h3>
          <p>Descripción breve del proyecto.</p>
        </div>
        <div className="portfolio-project">
          <h3>Proyecto 2</h3>
          <p>Descripción breve del proyecto.</p>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
