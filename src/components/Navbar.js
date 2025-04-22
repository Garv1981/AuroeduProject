import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg p-4">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <div className="navbar-left text-white">
          <h2 className="text-2xl font-extrabold tracking-wide">
            Voting Sytem
          </h2>
        </div>
        {/* Navbar for desktop */}
        <div className="hidden md:flex navbar-right space-x-6">
          <Link
            to="/"
            className="text-white hover:text-yellow-300 transition-all duration-300 font-medium"
          >
            Home
          </Link>
          <Link
            to="/create"
            className="text-white hover:text-yellow-300 transition-all duration-300 font-medium"
          >
            Create Proposal
          </Link>
          <Link
            to="/history"
            className="text-white hover:text-yellow-300 transition-all duration-300 font-medium"
          >
            Voting History
          </Link>
        </div>
        {/* Hamburger icon for mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col bg-white rounded-lg shadow-lg p-4 mt-3 space-y-3">
          <Link
            to="/"
            className="text-gray-800 hover:text-indigo-600 transition-all duration-300 font-medium"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/create"
            className="text-gray-800 hover:text-indigo-600 transition-all duration-300 font-medium"
            onClick={toggleMenu}
          >
            Create Proposal
          </Link>
          <Link
            to="/history"
            className="text-gray-800 hover:text-indigo-600 transition-all duration-300 font-medium"
            onClick={toggleMenu}
          >
            Voting History
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
