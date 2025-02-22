import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar ">
      <div className="flex justify-between mx-50 ">
        <div className="text-xl bg-orange-500 text-white p-2">Home</div>
        <div className="text-xl bg-orange-500 text-white p-2">Location</div>
        <div className="text-xl bg-orange-500 text-white p-2">Gallery</div>
        <div className="text-xl bg-orange-500 text-white p-2">Enquiry</div>
        <div className="text-xl bg-orange-500 text-white p-2">About Us</div>
      </div>
    </nav>
  );
}

export default Navbar;
