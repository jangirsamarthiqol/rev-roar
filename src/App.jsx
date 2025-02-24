import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Enquiry from "./pages/Enquiry";
import AboutUs from "./pages/AboutUs";
import Location from "./pages/Location";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/enquiry" element={<Enquiry />} />
        <Route path="/location" element={<Location />} />
      </Routes>
    </>
  );
}

export default App;
