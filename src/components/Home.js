import React from "react";

const Home = () => {
  return (
    <div className="ContentContainer">
      <pre className="CodeBlock">
        <span className="green">{"{"}</span>
        <br />
        <span className="green">  name:</span> "José Daniel Fuentes Marra"
        <span className="green">,</span>
        <br />
        <span className="green">  age:</span> 30
        <span className="green">,</span>
        <br />
        <span className="green">  job:</span> "Full stack developer"
        <span className="green">,</span>
        <br />
        <span className="green">  country:</span> "Spain"
        <span className="green">,</span>
        <br />
        <span className="green">  email:</span> "jdanielfuentes82@gmail.com"
        <br />
        <span className="green">{"}"}</span>
      </pre>
    </div>
  );
};

export default Home;
