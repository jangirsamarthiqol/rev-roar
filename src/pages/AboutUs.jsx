// src/components/AboutUs.jsx
import React from "react";
import bgImg from "../../public/bg-img.jpg"; // Move the image inside /src/assets/

function AboutUs() {
  
  return (
    <div
      className="w-screen h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImg})` }}
    ></div>
  );
}

export default AboutUs;
