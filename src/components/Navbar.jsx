import { useState } from 'react';
import { Link } from 'react-scroll';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (item) => {
    setActiveSection(item);
    if (isOpen) toggleMenu();
  };

  return (
    <nav className="fixed top-0 w-full custom-nav-bg backdrop-blur-md  z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Link to="home" smooth={true} 
          duration={1000} 
          className="cursor-pointer"
          onClick={() => setActiveSection('home')}>
          <motion.img
              src="/pradip.png"
              alt="Pradip Bade"
              className="h-9 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: 0, duration: 3, ease: "linear" }}
            />
            {/* <img src="/pradip.png" alt="Pradip Bade" className="h-9 rounded-full hover:opacity-80 transition-opacity" /> */}
          </Link>
        </div>
        <div className="hidden md:flex gap-6">
          {['home', 'about', 'experience', 'contact'].map((item) => (
            <Link
              key={item}
              to={item==='experience' ? 'works' : item}
              smooth={true}
              duration={1000}
              onClick={() => handleClick(item)}
              className={`cursor-pointer font-bold text-sm hover:text-2xl transform hover:scale-125 transition-all duration-300 ${activeSection === item ? 'border-b-2 text-white' : ''
                }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
        </div>


        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-secondary focus:outline-none">
            {isOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-primary/90 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-3 flex flex-col gap-4">
            {['home', 'about', 'experience', 'contact'].map((item) => (
              <Link
                key={item}
                to={item}
                smooth={true}
                duration={1000}
                onClick={() => handleClick(item)}
                className={`cursor-pointer font-bold text-sm hover:text-base transform transition-all duration-300 ${activeSection === item ? 'border-b-2 text-white' : ''
                  }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}