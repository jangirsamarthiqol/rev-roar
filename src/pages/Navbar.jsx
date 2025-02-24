import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar fixed top-0 z-10 w-full">
      <div className="flex justify-between mx-50">
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
    </nav>
  );
}

export default Navbar;
