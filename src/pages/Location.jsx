// src/components/Location.jsx
import React from "react";
import { motion } from "framer-motion";

// Import images from assets/public folder
// import stampImg from "../assets/lion-logo.png";
import ladakhImg from "/pexels-julia-volk-5204921.jpg";
import spitiImg from "/pexels-vikashkr50-18646435.jpg";
const bgImg = "/bg-img.jpg"; // If in /public folder
import logo from "/logo black.png"; // Adjust path if needed
import ContactUs from "../components/ContactUs";

function Location() {
  return (
    <section className="w-full">
      {/* Top Header Section */}
      <div
        className="w-full h-full bg-cover bg-center pt-16 md:pt-20"
        style={{
          backgroundImage: `url(${bgImg})`,
          fontFamily: "'Varietta Variable', sans-serif",
        }}
      >
        <div className="grid grid-cols-2 items-center justify-center p-4 md:p-10 lg:p-15 mx-48">
          {/* Animated Heading: Slides in from LEFT */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-[90px] text-right font-sans leading-[90px] tracking-[0px]"
            initial={{ clipPath: "inset(0 100% 0 100%)", opacity: 0, x: -100 }}
            animate={{ clipPath: "inset(0 0 0 0)", opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            DESTINATIONS WE CALL HOME
          </motion.h1>

          {/* Animated Logo: Slides in from RIGHT */}
          <motion.img
            className="h-16 md:h-32 lg:h-50"
            src={logo}
            alt="Logo"
            initial={{ clipPath: "inset(0 100% 0 100%)", opacity: 0, x: 100 }}
            animate={{ clipPath: "inset(0 0 0 0)", opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        </div>
      </div>

      {/* Ladakh Section */}
      <div className="relative w-full h-[80vh] md:h-[70vh] overflow-hidden">
        <img
          src={ladakhImg}
          alt="Ladakh"
          className="absolute inset-0 w-screen h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 z-10 flex gap-1 p-6 md:p-12">
          <h1 className="text-5xl w-3/4 md:text-9xl font-bold text-white drop-shadow-lg">
            Ladakh
          </h1>
          <p className="mt-4 w-1/4 text-white text-lg md:text-xl max-w-xl drop-shadow">
            Think Pangong Tso's magical hue, the thrill of Khardung La, and the warm
            smiles of Nubra Valley...
          </p>
        </div>
      </div>

      {/* Spiti Section */}
      <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        <img
          src={spitiImg}
          alt="Spiti"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute top-0 right-0 z-10 flex gap-1 p-6 md:p-12">
          <p className="mt-4 w-1/4 text-white text-lg md:text-xl max-w-xl drop-shadow">
            A remote wonderland with crystal-clear skies, ancient monasteries, and
            landscapes that belong in a dream...
          </p>
          <h1 className="text-5xl text-right w-3/4 md:text-9xl font-bold text-white drop-shadow-lg">
            Spiti
          </h1>
        </div>
      </div>

      <ContactUs />
    </section>
  );
}

export default Location;
