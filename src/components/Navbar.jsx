import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <nav className="bg-gray-800 fixed top-0 left-0 w-full z-10 flex justify-between items-center px-4 py-4">
        <button
          onClick={toggleSidebar}
          className="text-white text-2xl focus:outline-none md:hidden"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
        <div className="hidden md:flex items-center space-x-4">
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="text-white text-lg font-semibold hover:text-gray-400 focus:outline-none flex items-center"
            >
              Menu <FaChevronDown className="ml-2" />
            </button>
            {isDropdownOpen && (
              <div
                className="absolute mt-2 w-48 bg-white rounded-md shadow-lg z-20"
                style={{ left: '50%', transform: 'translateX(-50%) translateX(50px)' }} // Adjusted here for slight right shift
              >
                <Link to="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={toggleDropdown}>Accueil</Link>
                <Link to="/moncv" className="block px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={toggleDropdown}>Mon CV</Link>
                <Link to="/mesprojets" className="block px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={toggleDropdown}>Mes projets</Link>
              </div>
            )}
          </div>
        </div>
      </nav>

      <div
        className={`fixed top-0 left-0 w-64 bg-gray-800 h-full z-20 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <button
          onClick={toggleSidebar}
          className="text-white text-2xl focus:outline-none absolute top-4 right-4"
        >
          <FaTimes />
        </button>
        <div className="flex flex-col items-start mt-16 space-y-4 pl-4">
          <Link
            to="/"
            className="text-white text-lg font-semibold hover:text-gray-400"
            onClick={toggleSidebar}
          >
            Accueil
          </Link>
          <Link
            to="/moncv"
            className="text-white text-lg font-semibold hover:text-gray-400"
            onClick={toggleSidebar}
          >
            Mon CV
          </Link>
          <Link
            to="/mesprojets"
            className="text-white text-lg font-semibold hover:text-gray-400"
            onClick={toggleSidebar}
          >
            Mes projets
          </Link>
        </div>
      </div>
    </>
  );
}
