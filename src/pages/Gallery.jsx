// src/components/Gallery.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { RiArrowLeftWideLine, RiArrowRightWideFill } from "react-icons/ri";
import HomeSlider from "../components/HomeSlider";

// Import your background image
import backgroundImage from "/bg-img.jpg"; // Update this path

// Gallery content images
import stampImage from "/stamp/stamp-11.png"; // Path to your stamp image
import logoImage from "/lion-logo.png"; // Path to your logo image

// Slider images
import img1 from "/home-bg1.jpg";
import img2 from "/home-bg2.jpg";
import img3 from "/home-bg3.jpg";

function Gallery() {
  // Slider variables and state
  const sliderImages = [img1, img2, img3];
  const sliderQuotes = [
    "Thrilling High-altitude Passes with Expert Guides.",
    "The hum of your bike engine as you conquer Khardung LA.",
    "A shared laugh with friends under the starry skies of Spiti.",
  ];

  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  // Auto-play slider every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="gallery-container p-8 min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Gallery Title */}
      <h1 className="text-4xl font-bold mb-4 text-white">GALLERY</h1>
      <p className="text-xl mb-8 text-white">
        A Picture is Worth a Thousand Adventures
      </p>
      <p className="mb-4 text-white">
        Explore our gallery featuring glowing sunsets over Pangong Lake, joyful
        group shots in Spiti, and the sheer thrill of biking through the
        Himalayas.
      </p>

      {/* Gallery Images Section */}
      <div className="flex gap-8">
        <div className="image-container relative">
          <img
            src={stampImage}
            alt="Ladakh"
            className="w-64 h-64 object-cover rounded-md border-4 border-black"
          />
          <img
            src={logoImage}
            alt="Rev & Roar Logo"
            className="absolute top-2 right-2 w-16 h-16"
          />
          <p className="text-center mt-2 text-white">Ladakh</p>
        </div>
        <div className="image-container relative">
          <img
            src={stampImage}
            alt="Spiti"
            className="w-64 h-64 object-cover rounded-md border-4 border-black"
          />
          <img
            src={logoImage}
            alt="Rev & Roar Logo"
            className="absolute top-2 right-2 w-16 h-16"
          />
          <p className="text-center mt-2 text-white">Spiti</p>
        </div>
      </div>

      {/* Testimonials */}
      <div className="testimonials mt-12 text-white">
        <h2 className="text-2xl font-semibold mb-4">TESTIMONIALS</h2>
        <div className="testimonial mb-6">
          <div className="flex items-center gap-4">
            <img
              src={logoImage}
              alt="User 1"
              className="w-12 h-12 rounded-full border-4 border-black"
            />
            <p>
              "This trip was the best decision of my life! Riding through Ladakh
              with Rev & Roar felt like living a dream. Their team made every
              moment unforgettable!"
            </p>
          </div>
          <p className="text-center text-lg font-semibold">NEHA SHARMA</p>
          <p className="text-center">Loving the bike trip</p>
        </div>
        <div className="testimonial mb-6">
          <div className="flex items-center gap-4">
            <img
              src={logoImage}
              alt="User 2"
              className="w-12 h-12 rounded-full border-4 border-black"
            />
            <p>
              "As a corporate group, we were blown away by their professionalism
              and attention to detail. From tempo rides to adventure-packed
              days, every detail was perfect!"
            </p>
          </div>
          <p className="text-center text-lg font-semibold">RAHUL KAPOOR</p>
          <p className="text-center">Loving the bike trip</p>
        </div>
        <div className="testimonial mb-6">
          <div className="flex items-center gap-4">
            <img
              src={logoImage}
              alt="User 3"
              className="w-12 h-12 rounded-full border-4 border-black"
            />
            <p>
              "This trip was the best decision of my life! Riding through Ladakh
              with Rev & Roar felt like living a dream. Their team made every
              moment unforgettable!"
            </p>
          </div>
          <p className="text-center text-lg font-semibold">NEHA SHARMA</p>
          <p className="text-center">Loving the bike trip</p>
        </div>
      </div>

      {/* Image Slider Section */}
      <HomeSlider />
    </div>
  );
}

export default Gallery;
