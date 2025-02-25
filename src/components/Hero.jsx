import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaLinkedin, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { BsMouse } from "react-icons/bs"; // Import mouse icon
import AnimationHero from "./AnimationHero"; // Import the new component

export default function Hero() {
  const fullName = "PRADIP BADE";
  const [typedName, setTypedName] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullName.length) {
      const timeout = setTimeout(() => {
        setTypedName((prev) => prev + fullName[index]);
        setIndex((prev) => prev + 1);
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [index, fullName]);

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Particles Background */}
      <div className="absolute inset-0 -z-10">
        <AnimationHero />
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 text-center z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-white">
          Hi, I'm <span className="text-red-500">{typedName}</span>
        </h1>
        <p className="text-xl md:text-2xl mt-4 text-gray-400">
          Full Stack Developer, Web Developer
        </p>

        {/* Social & CV Buttons */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/pradipbade"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 border border-gray-500 text-white font-semibold rounded-xl hover:bg-gray-700 transition-colors"
          >
            <FaLinkedin className="text-xl" /> LinkedIn
          </a>
          <a
            href="https://github.com/pradipbade7"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 border border-gray-500 text-white font-semibold rounded-xl hover:bg-gray-700 transition-colors"
          >
            <FaGithub className="text-xl" /> GitHub
          </a>
          <a
            href="/Pradip_Bade_CV.pdf" // Update this with the correct path
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-500 transition-colors"
          >
            <FaExternalLinkAlt className="text-xl" /> My Resume
          </a>
        </div>

        {/* View My Work Button */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4">
          <Link to="works" smooth={true} duration={1000} className="z-10">
            <button className="px-6 py-3 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-500 transition-colors">
              View My Work
            </button>
          </Link>
        </div>

        {/* Mouse Scroll Down Button */}
        <div className="absolute bottom-5 md:bottom-10 inset-x-0 flex justify-center animate-bounce">
          <Link to="about" smooth={true} duration={800}>
            <div className="flex flex-col items-center cursor-pointer">
              <BsMouse className="text-3xl text-white" />
              <span className="text-white text-sm mt-2">Scroll Down</span>
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
}
