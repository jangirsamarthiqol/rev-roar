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

      {/* Logo: Absolute positioning with responsive spacing and animated effect */}
      <div className="absolute top-4 left-4 md:top-20 md:left-20">
        <motion.img
          className="h-32 md:h-96"
          src="/logo black.png"
          alt="Logo"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
        />
      </div>

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
