import { FaHome, FaUser, FaEnvelope } from "react-icons/fa";

interface BottomNavProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const menuItems = [
  { id: "home", label: "Home", icon: FaHome },
  { id: "about", label: "About", icon: FaUser },
  { id: "contact", label: "Contact", icon: FaEnvelope },
];

const BottomNav = ({ activeSection, setActiveSection }: BottomNavProps) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-md border-t border-white/10 flex justify-around items-center h-16 z-50">
      {menuItems.map(({ id, label, icon: Icon }) => {
        const isActive = activeSection === id;
        return (
          <button
            key={id}
            onClick={() => setActiveSection(id)}
            className={`flex flex-col items-center gap-1 text-xs transition-all duration-300 bg-transparent border-none cursor-pointer
              ${isActive ? "text-[#CE9178]" : "text-[#D4D4D4]"}`}
          >
            <Icon
              className={`text-xl transition-transform duration-300 ${isActive ? "scale-125" : ""}`}
            />
            <span>{label}</span>
          </button>
        );
      })}
    </nav>
  );
};

export default BottomNav;
