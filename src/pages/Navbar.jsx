/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar fixed top-0 z-10 w-full">
      {/* Desktop Navigation - preserved original design */}
      <div className="hidden md:flex justify-between mx-50">
        <Link
          to="/"
          className="text-2xl hover:bg-[#FF4C00] rounded-xs text-white p-2"
        >
          Home
        </Link>
        <Link
          to="/location"
          className="text-2xl hover:bg-[#FF4C00] rounded-xs text-white p-2"
        >
          Location
        </Link>
        <Link
          to="/gallery"
          className="text-2xl hover:bg-[#FF4C00] rounded-xs text-white p-2"
        >
          Gallery
        </Link>
        <Link
          to="/enquiry"
          className="text-2xl hover:bg-[#FF4C00] rounded-xs text-white p-2"
        >
          Enquiry
        </Link>
        <Link
          to="/about-us"
          className="text-2xl hover:bg-[#FF4C00] rounded-xs text-white p-2"
        >
          About Us
        </Link>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex justify-between items-center p-4">
        {/* Logo or first menu item for mobile */}
        <Link to="/" className="text-2xl text-white">
          Home
        </Link>

        {/* Mobile Menu Button */}
        <button 
          className="text-white focus:outline-none" 
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="flex flex-col px-4 pt-2 pb-4 space-y-1">
            <Link
              to="/location"
              className="text-2xl hover:bg-[#FF4C00] rounded-xs text-white p-2"
              onClick={toggleMenu}
            >
              Location
            </Link>
            <Link
              to="/gallery"
              className="text-2xl hover:bg-[#FF4C00] rounded-xs text-white p-2"
              onClick={toggleMenu}
            >
              Gallery
            </Link>
            <Link
              to="/enquiry"
              className="text-2xl hover:bg-[#FF4C00] rounded-xs text-white p-2"
              onClick={toggleMenu}
            >
              Enquiry
            </Link>
            <Link
              to="/about-us"
              className="text-2xl hover:bg-[#FF4C00] rounded-xs text-white p-2"
              onClick={toggleMenu}
            >
              About Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;