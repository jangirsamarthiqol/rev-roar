/* eslint-disable no-unused-vars */
// src/components/Home.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import HomeSlider from "../components/HomeSlider.jsx";
import ContactUs from "../components/ContactUs";
import TourPage from "../components/TourPage.jsx";

function Home() {
  // Removed modal state since it's no longer needed
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <img
        className="w-full h-screen object-cover"
        src="/bg-image-1.jpg"
        alt="Background"
      />

      {/* Animated Logo */}
      <div className="absolute top-4 left-4 md:top-40 md:left-20">
        <motion.img
          className="h-32 md:h-96"
          src="/logo black.png"
          alt="Logo"
          initial={{ clipPath: "inset(0 100% 0 100%)", opacity: 0 }}
          animate={{ clipPath: "inset(0 0 0 0)", opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <HomeSlider />
        <TourPage />
        <ContactUs />
      </div>

      {/* WhatsApp Button: Redirects directly to WhatsApp chat */}
      <div className="fixed bottom-4 right-4 z-20">
        <button
          onClick={() =>
            window.open("https://wa.me/8118823650", "_blank")
          }
          className="p-4 bg-green-500 rounded-full hover:bg-green-600 focus:outline-none"
        >
          <FaWhatsapp size={40} color="white" />
        </button>
      </div>
    </div>
  );
}

export default Home;
