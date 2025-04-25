import React from "react";
import { Linkedin, Github, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 text-center text-sm">
      <div className="space-y-4">
        <div className="flex justify-center gap-6">
          <a
            href="https://www.linkedin.com/in/davidokereke/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 flex items-center gap-2"
          >
            <Linkedin className="w-5 h-5" /> LinkedIn
          </a>
          <a
            href="https://github.com/Docziet"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 flex items-center gap-2"
          >
            <Github className="w-5 h-5" /> GitHub
          </a>
          <a
            href="https://www.facebook.com/D.okedav/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 flex items-center gap-2"
          >
            <Facebook className="w-5 h-5" /> Facebook
          </a>
        </div>
        <p>
          &copy; {new Date().getFullYear()} Okereke David Chidozie. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
