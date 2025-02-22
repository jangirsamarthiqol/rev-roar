import React, { useState } from "react";
import { motion } from "framer-motion";
import img1 from "/home-bg1.jpg";
import img2 from "/home-bg2.jpg";

import { RiArrowLeftWideLine, RiArrowRightWideFill } from "react-icons/ri";

const images = [img1, img2];
const quotes = [
  "Thrilling High-altitude Passes with Expert Guides.",
  "The hum of your bike engine as you conquer Khardung LA.",
];

const TourPage = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black flex items-center justify-center">
      <div className="relative w-full h-full flex items-center">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-10 z-10 text-white text-5xl cursor-pointer"
        >
          <RiArrowLeftWideLine />
        </button>

        {/* Sliding Images with Framer Motion */}
        <div className="w-full h-full overflow-hidden relative">
          <motion.div
            className="flex w-full h-full"
            animate={{ x: `-${index * 100}%` }}
            transition={{
              type: "spring",
              stiffness: 60,
              // duration: 0.6,
              // ease: "easeInOut",
            }}
          >
            {images.map((img, i) => (
              <div key={i} className="w-full h-screen flex-shrink-0 relative">
                <img
                  className="w-full h-full object-cover"
                  src={img}
                  alt={`Slide ${i}`}
                />
                {/* Centered Quote & Arrows */}
                {i === index && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 p-6">
                    <div className="flex items-center">
                      <p className="text-white text-3xl font-semibold text-center">
                        {quotes[i]}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-10 z-10 text-white text-5xl cursor-pointer"
        >
          <RiArrowRightWideFill />
        </button>
      </div>
    </div>
  );
};

export default TourPage;
