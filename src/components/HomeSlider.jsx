import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import img1 from "/home-bg1.jpg";
import img2 from "/home-bg2.jpg";
import img3 from "/home-bg3.jpg";
import { RiArrowLeftWideLine, RiArrowRightWideFill } from "react-icons/ri";

const images = [img1, img2, img3];
const quotes = [
  "Thrilling High-altitude Passes with Expert Guides.",
  "The hum of your bike engine as you conquer Khardung La.",
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

  // Auto-play every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[400px] sm:h-[500px] md:h-[700px] overflow-hidden bg-black flex items-center justify-center">
      <div className="relative w-full h-full flex items-center">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-3 sm:left-10 z-10 text-white text-3xl sm:text-5xl cursor-pointer hover:scale-110 transition-transform duration-300"
        >
          <RiArrowLeftWideLine />
        </button>

        {/* Sliding Images */}
        <div className="w-full h-full overflow-hidden relative">
          <motion.div
            className="flex h-full"
            animate={{ x: `-${index * 100}%` }}
            transition={{ type: "spring", stiffness: 60 }}
          >
            {images.map((img, i) => (
              <div key={i} className="w-full flex-shrink-0 relative">
                <img
                  src={img}
                  alt={`Slide ${i}`}
                  className="w-full h-full object-cover"
                />
                {i === index && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 p-4">
                    <p className="text-white text-base sm:text-2xl md:text-3xl font-semibold text-center px-2">
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
          className="absolute right-3 sm:right-10 z-10 text-white text-3xl sm:text-5xl cursor-pointer hover:scale-110 transition-transform duration-300"
        >
          <RiArrowRightWideFill />
        </button>
      </div>

      {/* Slider Dots */}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
              i === index ? "bg-white" : "bg-white/50"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default TourPage;
