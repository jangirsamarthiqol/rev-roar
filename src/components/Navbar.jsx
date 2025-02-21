import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/location"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            Location
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/gallery"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/enquiry"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            Enquiry
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about-us"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            About Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
