import React, { useState } from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-24">

        {/* Logo */}
        <div className="flex-shrink-0">
          <img className="h-24 w-24" src={logo} alt="not available" />
        </div>

        {/* Menu for larger screens */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="relative group">
            <button className="text-gray-700 hover:text-gray-900 font-semibold flex items-center justify-center">About Us<span className="material-symbols-outlined">
              keyboard_arrow_down
            </span></button>
            {/* Dropdown items */}
            <div className="absolute hidden group-hover:block mt-2 w-32 bg-white shadow-md rounded-md">
            </div>
          </div>
          <div className="relative group">
            <button className="text-gray-700 hover:text-gray-900 font-semibold flex items-center justify-center">Our Gallery
            </button>
            <div className="absolute hidden group-hover:block mt-2 w-32 bg-white shadow-md rounded-md">
            </div>
          </div>
          <div className="relative group">
            <button className="text-gray-700 hover:text-gray-900 font-semibold flex items-center justify-center">Join Us <span className="material-symbols-outlined">
              keyboard_arrow_down
            </span></button>
            <div className="absolute hidden group-hover:block mt-2 w-32 bg-white shadow-md rounded-md">
            </div>
          </div>
          <a href="#" className="px-4 py-2 text-black bg-[#FFA0A0] rounded-md hover:bg-[#FFA0A0]">
            Eternal Merch Store
          </a>
        </div>

        {/* Hamburger Menu for smaller screens */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="text-gray-700 block px-3 py-2 rounded-md text-base font-semibold">About Us</a>
            <a href="#" className="text-gray-700 block px-3 py-2 rounded-md text-base font-semibold">Our Work</a>
            <a href="#" className="text-gray-700 block px-3 py-2 rounded-md text-base font-semibold">Partner With Us</a>
            <a href="#" className="bg-[#FFA0A0] text-black block px-3 py-2 rounded-md text-base font-semibold">Eternal Merch Store</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
