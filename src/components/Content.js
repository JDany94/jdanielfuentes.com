import React from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

const Content = ({ activeSection }) => {
  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <div>Welcome! Please select a section.</div>;
    }
  };

  return <>{renderContent()}</>;
};

export default Content;
