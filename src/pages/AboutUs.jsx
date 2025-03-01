// src/components/AboutUs.jsx
import React from "react";
import bgImg from "../../public/bg-img.jpg";
import logo from "../../public/Logo_0222.png";
import img1 from "/home-bg1.jpg";
import img2 from "/home-bg2.jpg";
import img3 from "/home-bg3.jpg";
import card_bg from "/card-bg.png";

function AboutUs() {
  const about_card = [
    {
      img: img1,
      desc: "The hum of your bike engine as you conquer Khardung La.",
    },
    {
      img: img2,
      desc: "A shared laugh with friends under the starry skies of Spiti.",
    },
    { img: img3, desc: "Thrilling High-altitude Passes with Expert Guides." },
  ];

  return (
    <div
      className="translate-y-15 w-full h-full bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="flex ml-14 p-4 mb-4">
        <h1 className="text-9xl">ABOUT</h1>
        <img className="h-30" src={logo} alt="" />
      </div>
      <div>
        <p className="text-3xl px-20">
          At Rev & Roar, we don’t just plan trips—we craft life-changing
          experiences.
        </p>
        <p className="text-3xl px-20">Picture This:</p>
      </div>
      <div className="tour-cards flex justify-center gap-10">
        {about_card.map((card, index) => (
          <div
            key={index}
            className="tour-card p-10 md:w-65 relative"
            style={{
              backgroundImage: `url(${card_bg})`,
              backgroundSize: "cover",
              backgroundPosition: "cover",
            }}
          >
            <img
              src={card.img}
              alt="tour"
              className="w-full h-48 object-cover "
            />
            <p className="text-md md:text-lg font-semibold text-center mt-4">
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutUs;
