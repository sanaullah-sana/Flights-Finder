import React from "react";
import { LuPlane } from "react-icons/lu";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white mt-12 w-full">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center">
        {/* Logo and Name */}
        <div className="flex items-center space-x-3 mb-4 md:mb-0">
          <LuPlane className="text-white text-2xl transform -rotate-45" />
          <span className="text-lg font-semibold">Flight Finder</span>
        </div>

        {/* Links */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a href="#" className="hover:text-blue-300 transition">Home</a>
          <a href="#" className="hover:text-blue-300 transition">About</a>
          <a href="#" className="hover:text-blue-300 transition">Contact</a>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-5">
          <a href="#" className="hover:text-blue-300 transition">
            <FaGithub size={20} />
          </a>
          <a href="#" className="hover:text-blue-300 transition">
            <FaLinkedin size={20} />
          </a>
          <a href="#" className="hover:text-blue-300 transition">
            <FaTwitter size={20} />
          </a>
        </div>
      </div>

      {/* Bottom text */}
      <div className="text-center bg-blue-950 py-3 text-sm">
        © {new Date().getFullYear()} Flight Finder. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
