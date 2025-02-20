// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Location from './components/Location';
import Gallery from './components/Gallery';
import Enquiry from './components/Enquiry';
import AboutUs from './components/AboutUs';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/location" element={<Location />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/enquiry" element={<Enquiry />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
