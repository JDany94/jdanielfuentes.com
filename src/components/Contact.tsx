import { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("jdanielfuentes82@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-1 justify-center items-center p-3">
      <div className="bg-black/70 px-6 py-6 md:px-8 rounded-3xl text-white max-w-3xl w-full space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-[#9CDCFE]">
          Contacto
        </h2>

        <p className="text-xl text-[#CE9178] leading-relaxed">
          Actualmente estoy abierto a nuevas oportunidades y mis redes siempre
          están abiertas.
        </p>

        <div className="space-y-4">
          {/* Email */}
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-3xl shrink-0" />
            <button
              onClick={copyToClipboard}
              className="text-[#B5CEA8] text-lg bg-transparent border-none cursor-pointer hover:text-[#9CDCFE] transition-colors duration-300 text-left break-all"
            >
              {copied ? "¡Copiado!" : "jdanielfuentes82@gmail.com"}
            </button>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center gap-4">
            <FaLinkedin className="text-3xl shrink-0" />
            <a
              href="https://www.linkedin.com/in/jos%C3%A9-daniel-fuentes-45a099173"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#B5CEA8] text-lg no-underline hover:text-[#9CDCFE] transition-colors duration-300"
            >
              LinkedIn
            </a>
          </div>

          {/* GitHub */}
          <div className="flex items-center gap-4">
            <FaGithub className="text-3xl shrink-0" />
            <a
              href="https://github.com/JDany94"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#B5CEA8] text-lg no-underline hover:text-[#9CDCFE] transition-colors duration-300"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
