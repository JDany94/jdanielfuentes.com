import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import BottomNav from "./components/BottomNav";

const App = () => {
  const [activeSection, setActiveSection] = useState<string>("home");

  return (
    <div className="flex h-screen overflow-hidden text-white">
      <div className="hidden md:block">
        <Sidebar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
      </div>

      <Content activeSection={activeSection} />

      <div className="block md:hidden">
        <BottomNav
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
      </div>
    </div>
  );
};

export default App;
