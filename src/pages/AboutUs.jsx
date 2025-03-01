// src/pages/AboutUs.jsx
import React from "react";
import bgImg from "/bg-img.jpg";
import logo from "/Logo_022.png";

import img1 from "/home-bg1.jpg";
import img2 from "/home-bg2.jpg";
import img3 from "/home-bg3.jpg";

// Stamp images for the top "Picture this" section
import stampImg1 from "/stamp/stamp-11.png";

// Stamps for "OUR ADVENTURES"
import stampBike from "/adventure-img.jpg";
import stampTempo from "/adventure-img.jpg";
import stampCorporate from "/adventure-img.jpg";

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

const adventures = [
  {
    img: stampBike,
    img_tag: "Bike Trips",
    desc: "Feel the roar of the engine. Feel alive.",
    info: [
      "Explore Ladakh or Spiti on a Royal Enfield or Himalayan.",
      "Safety first! We’ve got expert guides and a backup vehicle at every step.",
      "AMS prevention stops and detailed briefings because your health matters.",
    ],
  },

  {
    img: stampTempo,
    img_tag: "Tempo Traveler Trips",
    desc: "Adventure is for everyone comfort included.",
    info: [
      "Perfect for families, friends, or groups who want to explore the mountains without the hassle.",
      "Chill with your crew while we handle the rough terrains.",
    ],
  },
  {
    img: stampCorporate,
    img_tag: "Corporate & College Tours",
    desc: " From icebreaker activities to adrenaline-pumping adventures.",
    info: [
      "Boost team spirit with fun challenges and bonding experiences.",
      "Safe, well-organized itineraries for large groups.",
    ],
  },
];

function AboutUs() {
  return (
    <div
      className="min-h-screen bg-cover bg-center pt-16 md:pt-36 text-gray-800"
      style={{
        backgroundImage: `url(${bgImg})`,
        fontFamily: "Varietta Variable, sans-serif",
      }}
    >
      {/* Header: ABOUT + Logo */}
      <div className="flex items-center justify-start px-4 md:px-11 lg:px-36 py-6 md:py-11">
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
          <em> we craft life-changing experiences.</em> Picture this:
        </p>

        {/* Stamp & Card Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {card_info.map((card, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center bg-opacity-70 transform hover:scale-105 transition-transform duration-300"
            >
              {/* Stamp Image (Background) */}
              <div className="relative">
                <img
                  src={stampImg1}
                  alt="Stamp 1"
                  className="w-full h-auto md:w-100 md:h-140 object-cover"
                />

                {/* Card Image and description (Over Stamp) */}
                <div className="absolute w-full h-full top-0 left-0 p-6 flex flex-col items-center">
                  <img
                    src={card.img}
                    alt={`Card ${index}`}
                    className="border-2 border-black w-16 h-16 md:w-[95%] md:h-[80%] object-cover"
                  />
                  <p className="text-2xl mx-5 my-7 h-[20%] md:text-2xl">
                    {card.desc}
                  </p>
                </div>
              </div>
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
      <div className="mt-12 md:mt-20 px-4 md:px-11 lg:px-36">
        <h2 className="text-4xl md:text-8xl font-bold mb-8 inline-block pb-2">
          OUR ADVENTURES
        </h2>

        {/* Bike Trips */}
        {adventures.map((adventure, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center gap-4 md:gap-8 mb-8"
          >
            {/* Stamp Image with Adventure Info Overlay */}
            <div className="relative">
              <img
                src={stampImg1}
                alt={adventure.img_tag}
                className="w-75 h-105 object-cover"
              />
              <div className="absolute flex flex-col items-center top-0 left-0 w-full h-full p-4">
                <img
                  className="w-[100%] h-[70%] object-cover border-2 border-black"
                  src={adventure.img}
                  alt=""
                />
                <div className="mt-2 h-[30%] w-[90%]">
                  <h3 className="text-2xl md:text-3xl font-bold ">
                    {adventure.img_tag}
                  </h3>
                  <p className="text-md md:text-sm">{adventure.desc}</p>
                </div>
              </div>
            </div>

            {/* Adventure Info */}
            <div className="p-4 md:p-6 w-full md:w-2/3">
              <ul className="space-y-4 ml-10">
                {adventure.info.map((info, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div>
                      <p className="text-lg md:text-3xl">
                        <span className="font-bold"> ●</span> {info}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Why Travel With us */}
      <div className="mt-12 md:mt-20 px-4 md:px-11 lg:px-36">
        <h3 className="text-5xl mb-5">Why Travel With Us</h3>
        <p className="text-3xl w-[65%]">
          We’re not just another travel company. We’re your partners in
          adventure. Here’s why our customers swear by us:
        </p>
        <p className="mt-4 text-3xl">
          <span className="block mb-2 pl-4">
            <strong>Safety First:</strong> Backup vehicles, AMS prevention
            stops, and experienced guides to handle every challenge.
          </span>
          <span className="block mb-2 pl-4">
            <strong>Customized Fun:</strong> Whether you’re a thrill-seeker or
            prefer relaxed exploration, we tailor trips to your vibe.
          </span>
          <span className="block mb-2 pl-4 w-[75%]">
            <strong>Local Expertise:</strong> We know these mountains like the
            back of our hand. Expect secret spots, authentic experiences, and
            insider stories.
          </span>
        </p>
      </div>

      {/* DESTINATIONS WE CALL HOME Section */}
      <div className="mt-12 md:mt-20">
        <h2 className="text-4xl md:text-7xl font-semibold mb-8 inline-block pb-2 px-4 md:px-11 lg:px-36">
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
          <div className="absolute bottom-0 left-0 right-0 flex gap-1 p-6 md:p-12">
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
          <div className="absolute top-0 right-0 flex gap-1 p-6 md:p-12">
            <p className="mt-4 w-1/4 text-white text-lg md:text-xl max-w-xl drop-shadow">
              A remote wonderland with crystal-clear skies, ancient monasteries,
              and landscapes that belong in a dream...
            </p>
            <h1 className="text-5xl text-right w-3/4 md:text-9xl font-bold text-white drop-shadow-lg">
              Spiti
            </h1>
          </div>
        </div>
      </div>

      {/* QUOTE */}
      <div className="flex justify-center items-center p-10 mt-20">
        <p className="italic text-xl md:text-4xl">
          "It's not just the destination—it's how you get there. With Rev &
          Roar, every mile is a memory."
        </p>
      </div>

      {/* SAFETY & SUPPORT Section */}
      <div className="mt-12 px-4 md:px-11 lg:px-16 pb-11 mb-10">
        <div className="backdrop-blur-sm p-6 md:p-11 rounded-lg">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 ">
            SAFETY &amp; SUPPORT
          </h2>
          <p className="text-xl md:text-3xl text-gray-800 mb-16">
            Adventure doesn't have to mean taking unnecessary risks.
          </p>
          <ul className="space-y-4 ml-10">
            <li className="flex items-start space-x-3">
              <div>
                <p className="text-xl md:text-2xl">
                  <span className="font-bold"> ●Backup Vehicles:</span> Always
                  there to carry your luggage or assist in emergencies.
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <div>
                <p className="text-xl md:text-2xl">
                  <span className="text-xl font-bold md:text-2xl">
                    ●AMS Prevention:
                  </span>{" "}
                  Dedicated acclimatization days and expert guidance to keep you
                  healthy.
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <div>
                <p className="text-xl md:text-2xl">
                  <span className="text-xl font-bold md:text-2xl">
                    ●Trained Team:
                  </span>{" "}
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
