import React from "react";
import { FaGithub, FaGlobe, FaLinkedin } from "react-icons/fa"; // Importing icons from react-icons

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 text-center">
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Check me out:</h2>
      </div>
      <div className="flex justify-center space-x-4 mb-4">
        <a
          href="https://github.com/The-0mnipotent"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition-colors"
        >
          <FaGithub className="text-2xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/contact-arpit-singh/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition-colors"
        >
          <FaLinkedin className="text-2xl" />
        </a>
        <a
          href="https://arpit-singh.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition-colors"
        >
          <FaGlobe className="text-2xl" />
        </a>
      </div>
      <div>
        <p className="text-sm">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
