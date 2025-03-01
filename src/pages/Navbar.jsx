/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Helper function to determine active page
  const isActive = (path) => {
    return location.pathname === path;
  };

  // Get current page name for mobile header
  const getCurrentPageName = () => {
    switch(location.pathname) {
      case '/':
        return 'Home';
      case '/location':
        return 'Location';
      case '/gallery':
        return 'Gallery';
      case '/enquiry':
        return 'Enquiry';
      case '/about-us':
        return 'About Us';
      default:
        return 'Menu';
    }
  };

  return (
    <nav className="navbar fixed top-0 z-10 w-full transition-all duration-300">
      {/* Desktop Navigation - preserved original design with active highlights */}
      <div className="hidden md:flex justify-between mx-50 px-6">
        <Link
          to="/"
          className={`text-2xl rounded-xs text-white p-2 transition-colors duration-300 ${
            isActive('/') ? 'bg-[#FF4C00]' : 'hover:bg-[#FF4C00]/80'
          }`}
        >
          Home
        </Link>
        <Link
          to="/location"
          className={`text-2xl rounded-xs text-white p-2 transition-colors duration-300 ${
            isActive('/location') ? 'bg-[#FF4C00]' : 'hover:bg-[#FF4C00]/80'
          }`}
        >
          Location
        </Link>
        <Link
          to="/gallery"
          className={`text-2xl rounded-xs text-white p-2 transition-colors duration-300 ${
            isActive('/gallery') ? 'bg-[#FF4C00]' : 'hover:bg-[#FF4C00]/80'
          }`}
        >
          Gallery
        </Link>
        <Link
          to="/enquiry"
          className={`text-2xl rounded-xs text-white p-2 transition-colors duration-300 ${
            isActive('/enquiry') ? 'bg-[#FF4C00]' : 'hover:bg-[#FF4C00]/80'
          }`}
        >
          Enquiry
        </Link>
        <Link
          to="/about-us"
          className={`text-2xl rounded-xs text-white p-2 transition-colors duration-300 ${
            isActive('/about-us') ? 'bg-[#FF4C00]' : 'hover:bg-[#FF4C00]/80'
          }`}
        >
          About Us
        </Link>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex justify-between items-center p-4 bg-opacity-95">
        {/* Show current page name instead of always "Home" */}
        <span className="text-2xl text-white font-medium">
          {getCurrentPageName()}
        </span>

        {/* Mobile Menu Button with improved animation */}
        <button 
          className="text-white focus:outline-none p-1 rounded-full hover:bg-white/10 transition-colors"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown with improved animation and active indicators */}
      <div 
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col px-4 pt-2 pb-4 space-y-1 bg-opacity-95">
          <Link
            to="/"
            className={`text-2xl rounded-xs text-white p-2 ${
              isActive('/') ? 'bg-[#FF4C00]' : 'hover:bg-[#FF4C00]/80'
            }`}
          >
            Home
          </Link>
          <Link
            to="/location"
            className={`text-2xl rounded-xs text-white p-2 ${
              isActive('/location') ? 'bg-[#FF4C00]' : 'hover:bg-[#FF4C00]/80'
            }`}
          >
            Location
          </Link>
          <Link
            to="/gallery"
            className={`text-2xl rounded-xs text-white p-2 ${
              isActive('/gallery') ? 'bg-[#FF4C00]' : 'hover:bg-[#FF4C00]/80'
            }`}
          >
            Gallery
          </Link>
          <Link
            to="/enquiry"
            className={`text-2xl rounded-xs text-white p-2 ${
              isActive('/enquiry') ? 'bg-[#FF4C00]' : 'hover:bg-[#FF4C00]/80'
            }`}
          >
            Enquiry
          </Link>
          <Link
            to="/about-us"
            className={`text-2xl rounded-xs text-white p-2 ${
              isActive('/about-us') ? 'bg-[#FF4C00]' : 'hover:bg-[#FF4C00]/80'
            }`}
          >
            About Us
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;