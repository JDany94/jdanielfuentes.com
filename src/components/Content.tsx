import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

interface ContentProps {
  activeSection: string;
}

const Content = ({ activeSection }: ContentProps) => {
  const renderContent = () => {
    switch (activeSection) {
      case "home":
        return <Home />;
      case "about":
        return <About />;
      case "contact":
        return <Contact />;
      default:
        return <div>Welcome! Please select a section.</div>;
    }
  };

  return (
    <div className="flex flex-1 flex-col h-full overflow-y-auto pb-16 md:pb-0">
      {renderContent()}
    </div>
  );
};

export default Content;
