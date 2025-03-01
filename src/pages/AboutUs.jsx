// src/pages/AboutUs.jsx
import React from "react";
import bgImg from "/bg-img.jpg";
import logo from "/Logo_022.png";

import img1 from "/home-bg1.jpg";
import img2 from "/home-bg2.jpg";
import img3 from "/home-bg3.jpg";

// Stamp images for the top "Picture this" section
import stampImg1 from "/stamp/stamp-11.png";
import stampImg2 from "/stamp/stamp-11.png";
import stampImg3 from "/stamp/stamp-11.png";

// Stamps for "OUR ADVENTURES"
import stampBike from "/stamp/stamp-11.png";
import stampTempo from "/stamp/stamp-11.png";
import stampCorporate from "/stamp/stamp-11.png";

// Images for the "Destinations We Call Home" section
import ladakhImg from "/pexels-julia-volk-5204921.jpg";
import spitiImg from "/pexels-vikashkr50-18646435.jpg";

import ContactUs from "../components/ContactUs";

const card_info = [
  {
    img: img1,
    desc: "The hum of your bike engine as you conquer Khardung LA.",
  },
  {
    img: img2,
    desc: "A shared laugh with friends under the starry skies of Spiti.",
  },
  { img: img3, desc: "Thrilling High-altitude Passes with Expert Guides." },
];

function AboutUs() {
  return (
    <div
      className="min-h-screen bg-cover bg-center pt-16 md:pt-20 text-gray-800"
      style={{
        backgroundImage: `url(${bgImg})`,
        fontFamily: "Varietta Variable, sans-serif",
      }}
    >
      {/* Header: ABOUT + Logo */}
      <div className="flex items-center justify-start px-4 md:px-11 lg:px-16 py-6 md:py-11">
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
      <div className="px-4 md:px-11 lg:px-16 py-6 md:py-11 backdrop-blur-sm rounded-lg mx-4 md:mx-11 lg:mx-20">
        {/* Intro Text */}
        <p className="text-xl md:text-2xl mb-6 leading-relaxed font-medium">
          At Rev & Roar, we don't just plan trips—
          <em className="font-semibold text-[#FF4C00]">
            {" "}
            we craft life-changing experiences.
          </em>{" "}
          Picture this:
        </p>

        {/* Stamp & Card Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 ">
          {card_info.map((card, index) => (
            <div
              key={index}
              className="relative border flex flex-col items-center bg-opacity-70 transform hover:scale-105 transition-transform duration-300"
            >
              {/* Stamp Image (Background) */}
              <img
                src={stampImg1}
                alt="Stamp 1"
                className="w-32 h-32 md:w-90 md:h-126 object-cover"
              />

              {/* Card Image (Over Stamp) */}
              <img
                src={card.img}
                alt={`Card ${index}`}
                className="absolute  transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 object-cover"
              />
            </div>
          ))}
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
      <div className="mt-12 md:mt-20 px-4 md:px-11 lg:px-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 inline-block pb-2">
          OUR ADVENTURES
        </h2>

        {/* Bike Trips */}
        <div className="flex flex-col md:flex-row items-center gap-6 mb-11 backdrop-blur-sm p-6 rounded-lg ">
          <img
            src={stampBike}
            alt="Bike Trips Stamp"
            className="w-28 h-28 md:w-60 md:h-84 object-cover flex-shrink-0"
          />
          <div>
            <ul className="list-disc list-inside text-lg md:text-xl text-gray-800 leading-relaxed space-y-2">
              <li>Explore Ladakh or Spiti on a Royal Enfield or Himalayan.</li>
              <li>
                Safety first! We've got expert guides and a backup vehicle.
              </li>
              <li>
                AMS prevention stops and detailed briefings because your health
                matters.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Why Travel With us */}
      <div className="mt-12 md:mt-20 px-4 md:px-11 lg:px-20">
        <h3 className="text-5xl mb-5">Why Travel With Us</h3>
        <p className="text-3xl w-[45%]">
          We’re not just another travel company. We’re your partners in
          adventure. Here’s why our customers swear by us:
        </p>
        <p className="mt-4 text-3xl">
          <span className="block mb-2 pl-4">
            • <strong>Safety First:</strong> Backup vehicles, AMS prevention
            stops, and experienced guides to handle every challenge.
          </span>
          <span className="block mb-2 pl-4">
            • <strong>Customized Fun:</strong> Whether you’re a thrill-seeker or
            prefer relaxed exploration, we tailor trips to your vibe.
          </span>
          <span className="block mb-2 pl-4 w-[75%]">
            • <strong>Local Expertise:</strong> We know these mountains like the
            back of our hand. Expect secret spots, authentic experiences, and
            insider stories.
          </span>
        </p>
      </div>

      {/* DESTINATIONS WE CALL HOME Section */}
      <div className="mt-12 md:mt-20">
        <h2 className="text-4xl md:text-7xl font-semibold mb-8 inline-block pb-2 px-4 md:px-11 lg:px-16">
          DESTINATIONS WE CALL HOME
        </h2>
        {/* Ladakh Section */}
        <div className="relative w-full h-[80vh] md:h-[70vh] overflow-hidden">
          {/* Background Image */}
          <img
            src={ladakhImg}
            alt="Ladakh"
            className="absolute inset-0 w-screen h-full object-cover"
          />
          {/* Content Overlay at Bottom */}
          <div className="absolute bottom-0 left-0 right-0 z-10 flex gap-1 p-6 md:p-12">
            <h1 className="text-5xl w-3/4 md:text-9xl font-bold text-white drop-shadow-lg">
              Ladakh
            </h1>
            <p className="mt-4 w-1/4 text-white text-lg md:text-xl max-w-xl drop-shadow">
              Think Pangong Tso's magical hue, the thrill of Khardung La, and
              the warm smiles of Nubra Valley...
            </p>
          </div>
        </div>

        {/* Spiti Section */}
        <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
          {/* Background Image */}
          <img
            src={spitiImg}
            alt="Spiti"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Content Overlay at Top */}
          <div className="absolute top-0 right-0  z-10 flex gap-1 p-6 md:p-12">
            <p className="mt-4 w-1/4 text-white text-lg md:text-xl max-w-xl drop-shadow">
              A remote wonderland with crystal-clear skies, ancient monasteries,
              and landscapes that belong in a dream...
            </p>
            <h1 className="text-5xl text-t w-3/4 md:text-9xl font-bold text-white drop-shadow-lg">
              Spiti
            </h1>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center p-10 mt-20">
        <p className="italic text-xl md:text-4xl">
          "It's not just the destination—it's how you get there. With Rev &
          Roar, every mile is a memory."
        </p>
      </div>

      {/* SAFETY & SUPPORT Section */}
      <div className="mt-12 px-4 md:px-11 lg:px-16 pb-11">
        <div className="backdrop-blur-sm p-6 md:p-11 rounded-lg">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 ">
            SAFETY &amp; SUPPORT
          </h2>
          <p className="text-xl md:text-3xl text-gray-800 mb-6">
            Adventure doesn't have to mean taking unnecessary risks.
          </p>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3">
              <div>
                <strong className="text-xl md:text-2xl">
                  Backup Vehicles:
                </strong>
                <p className="text-lg md:text-xl text-gray-800">
                  Always there to carry your luggage or assist in emergencies.
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <div>
                <strong className="text-xl md:text-2xl">AMS Prevention:</strong>
                <p className="text-lg md:text-xl text-gray-800">
                  Dedicated acclimatization days and expert guidance to keep you
                  healthy.
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <div>
                <strong className="text-xl md:text-2xl">Trained Team:</strong>
                <p className="text-lg md:text-xl text-gray-800">
                  Guides equipped with first aid and local knowledge.
                </p>
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
