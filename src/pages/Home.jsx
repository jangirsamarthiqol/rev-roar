// src/components/Home.jsx
import React from "react";
import HomeSlider from "../components/HomeSLider";
import ContactUs from "../components/ContactUs";
import TourPage from "../components/TourPage";

function Home() {
  return (
    <div className="h-full w-full relative">
      <img
        className="w-full h-screen object-cover"
        src="/bg-image-1.jpg"
        alt="Background"
      />
      <img
        className="absolute top-20 left-20 h-130"
        src="/Logo_022.png"
        alt="Logo"
      />

      {/* Slider Component */}
      <HomeSlider />
      <TourPage />
      <ContactUs />
    </div>
  );
}

export default Home;
