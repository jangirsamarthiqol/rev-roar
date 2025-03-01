/* eslint-disable no-unused-vars */
// src/components/Home.jsx
import React from "react";
import { motion } from "framer-motion";
import HomeSlider from "../components/HomeSLider";
import ContactUs from "../components/ContactUs";
import TourPage from "../components/TourPage";

function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <img
        className="w-full h-screen object-cover"
        src="/bg-image-1.jpg"
        alt="Background"
      />
      <img
        className="absolute top-20 left-20 h-130"
        src="/Logo_022.png"
        alt="Logo"
      />

      {/* Main Content */}
      <div className="relative z-10">
        <HomeSlider />
        <TourPage />
        <ContactUs />
      </div>
    </div>
  );
}

export default Home;
