const Home = () => {
  return (
    <div className="flex flex-1 justify-center items-center p-3">
      <pre className="bg-black/70 px-5 py-5 md:px-8 md:py-6 rounded-3xl text-base md:text-3xl text-white w-full max-w-fit whitespace-pre-wrap wrap-break-word">
        <span className="text-[#D4D4D4]">{"{"}</span>
        <br />
        <span className="text-[#9CDCFE]"> name:</span>
        <span className="text-[#CE9178]"> "José Daniel Fuentes Marra"</span>
        <span className="text-[#D4D4D4]">,</span>
        <br />
        <span className="text-[#9CDCFE]"> role:</span>
        <span className="text-[#CE9178]"> "Full Stack Developer"</span>
        <span className="text-[#D4D4D4]">,</span>
        <br />
        <span className="text-[#9CDCFE]"> country:</span>
        <span className="text-[#CE9178]"> "Spain"</span>
        <span className="text-[#D4D4D4]">,</span>
        <br />
        <span className="text-[#9CDCFE]"> email:</span>
        <span className="text-[#CE9178]"> "jdanielfuentes82@gmail.com"</span>
        <br />
        <span className="text-[#D4D4D4]">{"}"}</span>
      </pre>
    </div>
  );
};

export default Home;
