import React, { useState } from "react";
import { motion } from "framer-motion";
import img1 from "/home-bg1.jpg";
import img2 from "/home-bg2.jpg";
import img3 from "/home-bg3.jpg";

import { RiArrowLeftWideLine, RiArrowRightWideFill } from "react-icons/ri";

const images = [img1, img2, img3];
const quotes = [
  "Thrilling High-altitude Passes with Expert Guides.",
  "The hum of your bike engine as you conquer Khardung LA.",
  "A shared laugh with friends under the starry skies of Spiti.",
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
    <div className="relative w-full h-[700px] overflow-hidden bg-black flex items-center justify-center">
      <div className="relative w-full h-full flex items-center">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-10 z-10 text-white text-5xl cursor-pointer"
        >
          <RiArrowLeftWideLine />
        </button>

        {/* Sliding Images with Framer Motion */}
        <div className="w-full overflow-hidden relative">
          <motion.div
            className="flex w-full h-full"
            animate={{ x: `-${index * 100}%` }}
            transition={{
              type: "spring",
              stiffness: 60,
            }}
          >
            {images.map((img, i) => (
              <div key={i} className="w-full flex-shrink-0 relative">
                <img
                  className="w-full h-full object-center"
                  src={img}
                  alt={`Slide ${i}`}
                />
                {/* Centered Quote & Arrows */}
                {i === index && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 p-6">
                    <p className="text-white text-2xl font-semibold text-center">
                      {quotes[i]}
                    </p>
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
