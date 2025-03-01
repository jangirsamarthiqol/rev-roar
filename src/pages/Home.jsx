// src/components/Home.jsx
import React from "react";
import HomeSlider from "../components/HomeSLider";
import ContactUs from "../components/ContactUs";
import TourPage from "../components/TourPage";

function Home() {
  return (
    <div className="h-full relative translate-y-15">
      <img
        className="w-full h-screen object-cover"
        src="/bg-image-1.jpg"
        alt="Background"
      />
      <img
        className="absolute top-20 left-20 h-90"
        src="/Logo_0222.png"
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
