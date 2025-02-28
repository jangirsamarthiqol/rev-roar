// src/pages/AboutUs.jsx
import React from "react";
import bgImg from "/bg-img.jpg";
import logo from "/Logo_022.png";

// Stamp images for the top "Picture this" section
import stampImg1 from "/stamp/stamp-10.png";
import stampImg2 from "/stamp/stamp-10.png";
import stampImg3 from "/stamp/stamp-10.png";

// Stamps for "OUR ADVENTURES"
import stampBike from "/stamp/stamp-10.png";
import stampTempo from "/stamp/stamp-10.png";
import stampCorporate from "/stamp/stamp-10.png";

// Images for the "Destinations We Call Home" section
import ladakhImg from "/pexels-julia-volk-5204921.jpg";
import spitiImg from "/pexels-vikashkr50-18646435.jpg";

import ContactUs from "../components/ContactUs";

function AboutUs() {
  return (
    <div
      className="min-h-screen bg-cover bg-center pt-16 md:pt-20 text-gray-800"
      style={{
        backgroundImage: `url(${bgImg})`,
        fontFamily: "'Varietta Variable', sans-serif",
      }}
    >
      {/* Header: ABOUT + Logo */}
      <div className="flex items-center justify-start px-4 md:px-10 lg:px-16 py-6 md:py-10">
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold mr-4">
          ABOUT
        </h1>
        <img
          className="h-16 md:h-32 lg:h-40 object-contain"
          src={logo}
          alt="Rev & Roar Logo"
        />
      </div>

      {/* Intro Container */}
      <div className="px-4 md:px-10 lg:px-16 py-6 md:py-10 backdrop-blur-sm rounded-lg mx-4 md:mx-10 lg:mx-20 shadow-lg">
        {/* Intro Text */}
        <p className="text-xl md:text-2xl mb-6 leading-relaxed font-medium">
          At Rev & Roar, we don't just plan trips—
          <em className="font-semibold text-[#FF4C00]"> we craft life-changing experiences.</em> Picture this:
        </p>

        {/* Stamp Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="flex flex-col items-center bg-opacity-70 p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
            <img
              src={stampImg1}
              alt="Stamp 1"
              className="w-32 h-32 md:w-40 md:h-40 mb-4 object-cover border-4 border-[#FF4C00]"
            />
            <p className="text-lg md:text-xl text-center text-gray-800 font-medium">
              The hum of your bike engine as you conquer Khardung La.
            </p>
          </div>
          <div className="flex flex-col items-center bg-opacity-70 p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
            <img
              src={stampImg2}
              alt="Stamp 2"
              className="w-32 h-32 md:w-40 md:h-40 mb-4 object-cover border-4 border-[#FF4C00]"
            />
            <p className="text-lg md:text-xl text-center text-gray-800 font-medium">
              A shared laugh with friends under the starry skies of Spiti.
            </p>
          </div>
          <div className="flex flex-col items-center bg-opacity-70 p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
            <img
              src={stampImg3}
              alt="Stamp 3"
              className="w-32 h-32 md:w-40 md:h-40 mb-4 object-cover border-4 border-[#FF4C00]"
            />
            <p className="text-lg md:text-xl text-center text-gray-800 font-medium">
              Thrilling high-altitude passes with expert guides.
            </p>
          </div>
        </div>

        {/* Additional Paragraph */}
        <p className="text-xl md:text-2xl leading-relaxed">
          We specialize in curating personalized adventures to Ladakh and Spiti
          that are exciting, safe, and full of stories you'll cherish forever.
          Whether you're a solo traveler, a group of friends, a college gang, or
          a corporate team, we ensure every journey is as unique as you are.
        </p>
      </div>

      {/* OUR ADVENTURES Section */}
      <div className="mt-12 md:mt-20 px-4 md:px-10 lg:px-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 inline-block pb-2 border-b-4 border-[#FF4C00]">OUR ADVENTURES</h2>

        {/* Bike Trips */}
        <div className="flex flex-col md:flex-row items-center gap-6 mb-10 backdrop-blur-sm p-6 rounded-lg shadow-md">
          <img
            src={stampBike}
            alt="Bike Trips Stamp"
            className="w-28 h-28 md:w-32 md:h-32 object-cover flex-shrink-0 border-4 border-[#FF4C00]"
          />
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-3 text-[#FF4C00]">
              Bike Trips
            </h3>
            <ul className="list-disc list-inside text-lg md:text-xl text-gray-800 leading-relaxed space-y-2">
              <li>Explore Ladakh or Spiti on a Royal Enfield or Himalayan.</li>
              <li>Safety first! We've got expert guides and a backup vehicle.</li>
              <li>
                AMS prevention stops and detailed briefings because your health
                matters.
              </li>
            </ul>
          </div>
        </div>

        {/* Tempo Traveler Trips */}
        <div className="flex flex-col md:flex-row items-center gap-6 mb-10 backdrop-blur-sm p-6 rounded-lg shadow-md">
          <img
            src={stampTempo}
            alt="Tempo Traveler Stamp"
            className="w-28 h-28 md:w-32 md:h-32 object-cover flex-shrink-0 border-4 border-[#FF4C00]"
          />
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-3 text-[#FF4C00]">
              Tempo Traveler Trips
            </h3>
            <ul className="list-disc list-inside text-lg md:text-xl text-gray-800 leading-relaxed space-y-2">
              <li>
                Perfect for families, friends, or groups who want to explore the
                mountains without the hassle.
              </li>
              <li>
                Chill with your crew while we handle the rough terrains.
              </li>
            </ul>
          </div>
        </div>

        {/* Corporate & College Tours */}
        <div className="flex flex-col md:flex-row items-center gap-6 backdrop-blur-sm p-6 rounded-lg shadow-md">
          <img
            src={stampCorporate}
            alt="Corporate & College Stamp"
            className="w-28 h-28 md:w-32 md:h-32 object-cover flex-shrink-0 border-4 border-[#FF4C00]"
          />
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-3 text-[#FF4C00]">
              Corporate &amp; College Tours
            </h3>
            <ul className="list-disc list-inside text-lg md:text-xl text-gray-800 leading-relaxed space-y-2">
              <li>
                Boost team spirit with fun challenges and bonding experiences.
              </li>
              <li>Safe, well-organized itineraries for large groups.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* DESTINATIONS WE CALL HOME Section */}
      <div className="mt-12 md:mt-20 px-4 md:px-10 lg:px-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 inline-block pb-2 border-b-4 border-[#FF4C00] text-white">
          DESTINATIONS WE CALL HOME
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Ladakh Card */}
          <div className="relative w-full md:w-1/2 h-80 md:h-96 overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <img
              src={ladakhImg}
              alt="Ladakh"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold">
                Ladakh
              </h3>
              <p className="text-white text-lg md:text-xl mt-3 max-w-md">
                A remote wonderland with crystal-clear skies, ancient monasteries,
                and landscapes that belong in a dream...
              </p>
              <button className="mt-4 bg-[#FF4C00] text-white py-2 px-4 rounded-md w-max hover:bg-[#E64400] transition-colors duration-300">
                Explore Ladakh
              </button>
            </div>
          </div>

          {/* Spiti Card */}
          <div className="relative w-full md:w-1/2 h-80 md:h-96 overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <img
              src={spitiImg}
              alt="Spiti"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold">
                Spiti
              </h3>
              <p className="text-white text-lg md:text-xl mt-3 max-w-md">
                Think Pangong Tso's magical hue, the thrill of Khardung La, and the
                warm smiles of Nubra Valley...
              </p>
              <button className="mt-4 bg-[#FF4C00] text-white py-2 px-4 rounded-md w-max hover:bg-[#E64400] transition-colors duration-300">
                Explore Spiti
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* SAFETY & SUPPORT Section */}
      <div className="mt-12 md:mt-20 px-4 md:px-10 lg:px-16 pb-10">
        <div className="backdrop-blur-sm p-6 md:p-10 rounded-lg shadow-lg">
          <p className="italic text-xl md:text-2xl text-gray-800 mb-6 border-l-4 border-[#FF4C00] pl-4">
            "It's not just the destination—it's how you get there. With Rev & Roar,
            every mile is a memory."
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#FF4C00]">SAFETY &amp; SUPPORT</h2>
          <p className="text-xl md:text-2xl text-gray-800 mb-6">
            Adventure doesn't have to mean taking unnecessary risks.
          </p>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-6 h-6 mt-1 rounded bg-[#FF4C00] flex items-center justify-center text-white">✓</div>
              <div>
                <strong className="text-xl md:text-2xl">Backup Vehicles:</strong>
                <p className="text-lg md:text-xl text-gray-800">Always there to carry your luggage or assist in emergencies.</p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-6 h-6 mt-1 rounded bg-[#FF4C00] flex items-center justify-center text-white">✓</div>
              <div>
                <strong className="text-xl md:text-2xl">AMS Prevention:</strong>
                <p className="text-lg md:text-xl text-gray-800">Dedicated acclimatization days and expert guidance to keep you healthy.</p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-6 h-6 mt-1 rounded bg-[#FF4C00] flex items-center justify-center text-white">✓</div>
              <div>
                <strong className="text-xl md:text-2xl">Trained Team:</strong>
                <p className="text-lg md:text-xl text-gray-800">Guides equipped with first aid and local knowledge.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <ContactUs />
    </div>
  );
}

export default AboutUs;
