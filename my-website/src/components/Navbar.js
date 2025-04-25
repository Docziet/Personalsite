// src/components/Navbar.js

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white dark:bg-gray-900 px-6 py-4 shadow-md fixed w-full z-50">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">
          Okereke David Chidozie
        </h1>
        <div className="flex items-center space-x-4">
          <DarkModeToggle />
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? (
                <X className="w-6 h-6 text-gray-800 dark:text-white" />
              ) : (
                <Menu className="w-6 h-6 text-gray-800 dark:text-white" />
              )}
            </button>
          </div>
        </div>
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          <li>
            <a href="#about" className="hover:text-blue-600">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-600">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-blue-600">
              Skills
            </a>
          </li>
          <li>
            <a href="#testimonials" className="hover:text-blue-600">
              Testimonials
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-600">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <ul className="md:hidden bg-white dark:bg-gray-900 px-4 py-6 space-y-4 shadow-lg">
          <li>
            <a href="#about" onClick={toggleMenu}>
              About
            </a>
          </li>
          <li>
            <a href="#projects" onClick={toggleMenu}>
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" onClick={toggleMenu}>
              Skills
            </a>
          </li>
          <li>
            <a href="#testimonials" onClick={toggleMenu}>
              Testimonials
            </a>
          </li>
          <li>
            <a href="#contact" onClick={toggleMenu}>
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
