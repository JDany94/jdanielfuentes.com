import React from "react";

const Home = () => {
  return (
    <div className="ContentContainer">
      <pre className="CodeBlock">
        <span className="CustomGrey">{"{"}</span>
        <br />
        <span className="CustomBlue">  name:</span><span className="CustomYellow"> "José Daniel Fuentes Marra"</span>
        <span className="CustomGrey">,</span>
        <br />
        <span className="CustomBlue">  age:</span><span className="CustomGreen"> 30</span>
        <span className="CustomGrey">,</span>
        <br />
        <span className="CustomBlue">  job:</span><span className="CustomYellow"> "Full stack developer"</span>
        <span className="CustomGrey">,</span>
        <br />
        <span className="CustomBlue">  country:</span><span className="CustomYellow"> "Spain"</span>
        <span className="CustomGrey">,</span>
        <br />
        <span className="CustomBlue">  email:</span><span className="CustomYellow"> "jdanielfuentes82@gmail.com"</span> 
        <br />
        <span className="CustomGrey">{"}"}</span>
      </pre>
    </div>
  );
};

export default Home;
