
// export default Navbar;
import { Link, Links } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi"
import ChatBotWidget from "./ChatBotWidget";


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  

  return (
    <nav className="w-full border-b border-gray-200 top-0 z-50 bg-white ">
      <div className="flex justify-between items-center px-4 py-3 md:hidden">
        <div className="flex items-center gap-1">
          <span className="font-extrabold text-4xl text-black">R</span>
          <span className="font-extrabold text-4xl text-gray-500">W.</span>
        </div>

        <div className="flex items-center gap-4">
          <motion.button
            onClick={() => setShowChat(!showChat)}
            className="flex items-center space-x-2 bg-black text-white px-3 py-2 rounded-3xl shadow-md hover:bg-gray-800 transition text-sm"
            whileHover={{ scale: 1.05 }}
          >
            <span>Let’s Talk</span>
            <FiArrowUpRight className="text-white" />
          </motion.button>
         

          <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          className="absolute text-centertop-16 right-0 w-[150px] h-[380px] bg-white shadow-lg p-6 flex flex-col space-y-6 md:hidden"
        >
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>
            Projects
          </a>
          <a href="#services" onClick={() => setMenuOpen(false)}>
            Services
          </a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>
            Skills
          </a>
          <a href="#resume" onClick={() => setMenuOpen(false)}>
            Resume
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </motion.div>
      )}

      <div className="hidden md:flex justify-between items-center px-10 py-6">
        <div
          className="flex items-center 
                        shadow-md rounded-full px-5 py-2 font-medium hover:bg-green-200 transition"
        >
          <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
          Available for New Project
        </div>

        <ul className="flex space-x-8 font-medium">
          <Link onClick={() => setMenuOpen(false)} to="/">
            Home
          </Link>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <motion.button
         
          className="flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-3xl shadow-md hover:bg-gray-800 transition"
          whileHover={{ scale: 1.05 }}
        >
          <span>Let’s Talk</span>
          <FiArrowUpRight className="text-white" />
        </motion.button>
       
      </div>
    </nav>
  );
}

export default Navbar;
