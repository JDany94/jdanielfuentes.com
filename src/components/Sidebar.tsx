import { FaLinkedin, FaGithub } from "react-icons/fa";
import profileImg from "../assets/profileImg.jpg";

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const menuItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

const Sidebar = ({ activeSection, setActiveSection }: SidebarProps) => {
  return (
    <div className="flex flex-col items-center justify-between w-80 min-h-screen bg-black/40 pt-10 pb-5 shrink-0">
      <div className="flex flex-col items-center">
        <img
          src={profileImg}
          alt="Profile"
          className="w-62.5 h-62.5 rounded-full mb-8 border-[7px] border-[#9CDCFE]"
        />
        <h1 className="text-[#9CDCFE] text-3xl font-bold">Daniel Fuentes</h1>
        <nav className="flex flex-col items-center gap-9 mt-12">
          {menuItems.map(({ id, label }) => {
            const isActive = activeSection === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setActiveSection(id)}
                className={`text-2xl no-underline transition-all duration-300 hover:scale-125
                  ${
                    isActive
                      ? "font-bold text-[#CE9178]"
                      : "text-[#D4D4D4] hover:text-[#CE9178]"
                  }`}
              >
                {isActive ? "> " : ""}
                {label}
              </a>
            );
          })}
        </nav>
      </div>
      <div className="flex gap-6">
        <a
          href="https://github.com/JDany94"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#D4D4D4] text-6xl transition-all duration-300 hover:scale-125 hover:text-[#CE9178]"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/jos%C3%A9-daniel-fuentes-45a099173"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#D4D4D4] text-6xl transition-all duration-300 hover:scale-125 hover:text-[#CE9178]"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
