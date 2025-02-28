// src/components/Location.jsx
import React from "react";

// Import images from assets folder
import stampImg from "../assets/lion-logo.png";
import ladakhImg from "/pexels-julia-volk-5204921.jpg";
import spitiImg from "/pexels-vikashkr50-18646435.jpg";
// Instead of importing from public, use the public URL if bg-img.jpg is in /public
const bgImg = "/bg-img.jpg";
// Import logo if needed (adjust path as necessary)
import logo from "/logo black.png";

function Location() {
  return (
    <section className="w-full">
      {/* Top Header Section */}
      <div className="relative flex items-center justify-between px-4 md:px-8 py-6">
        <h2 className="text-xl md:text-3xl font-bold uppercase tracking-wide">
          DESTINATIONS WE CALL HOME
        </h2>
        <div className="flex items-center space-x-3">
          <img
            src={stampImg}
            alt="Stamp"
            className="w-10 h-10 object-contain"
          />
          <h2 className="text-xl md:text-3xl font-bold uppercase tracking-wide">
            REV & ROAR
          </h2>
        </div>
      </div>

      <div
        className="w-full h-full bg-cover bg-center pt-16 md:pt-20"
        style={{
          backgroundImage: `url(${bgImg})`,
          fontFamily: "'Varietta Variable', sans-serif",
        }}
      >
        <div
          className="flex items-center justify-start p-4 md:p-10 lg:p-15"
          style={{ fontFamily: "'Varietta Variable', sans-serif" }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-9xl">
            DESTINATIONS WE CALL HOME
          </h1>
          <img
            className="h-16 md:h-32 lg:h-50 -ml-2 md:-ml-4"
            src={logo}
            alt="Logo"
          />
        </div>
      </div>

      {/* Ladakh Section */}
      <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        {/* Background Image */}
        <img
          src={ladakhImg}
          alt="Ladakh"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0  bg-opacity-30" />

        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col justify-center h-full p-6 md:p-12">
          <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg">
            Ladakh
          </h1>
          <p className="mt-4 text-white text-lg md:text-xl max-w-xl drop-shadow">
            Think Pangong Tso's magical hue, the thrill of Khardung La, and the
            warm smiles of Nubra Valley...
          </p>
        </div>

        {/* Stamp in the corner (optional) */}
        <img
          src={stampImg}
          alt="Stamp"
          className="absolute bottom-4 left-4 w-16 h-16 object-contain"
        />
      </div>

      {/* Spiti Section */}
      <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden mt-8">
        {/* Background Image */}
        <img
          src={spitiImg}
          alt="Spiti"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0  bg-opacity-30" />

        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col justify-center h-full p-6 md:p-12">
          <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg">
            Spiti
          </h1>
          <p className="mt-4 text-white text-lg md:text-xl max-w-xl drop-shadow">
            A remote wonderland with crystal-clear skies, ancient monasteries,
            and landscapes that belong in a dream...
          </p>
        </div>

        {/* Stamp in the corner (optional) */}
        <img
          src={stampImg}
          alt="Stamp"
          className="absolute bottom-4 right-4 w-16 h-16 object-contain"
        />
      </div>
    </section>
  );
}

export default Location;
