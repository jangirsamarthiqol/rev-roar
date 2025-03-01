/* eslint-disable no-unused-vars */
import React from "react";

// Example image imports (replace with your own)
import ladakhImg from "/stamp/stamp-10.png";
import spitiImg from "/stamp/stamp-10.png";
import enrollStamp from "../assets/lion-logo.png";
/* eslint-disable no-unused-vars */

const TourPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      {/* Page Heading */}
      <h1 className="text-center text-4xl md:text-5xl font-bold mb-12">
        Roaring Tour Packages
      </h1>

      {/* Cards Container */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Ladakh Card */}
        <div className="flex flex-col items-center text-center space-y-3">
          <img
            src={ladakhImg}
            alt="Ladakh Stamp"
            className="w-full max-w-sm object-contain"
          />
          <div className="mt-4">
            <p className="text-xl font-semibold">Date - 10th Jan - 21st Jan</p>
            <p className="text-xl font-semibold">Price - 30,900/-</p>
          </div>
        </div>

        {/* Spiti Card */}
        <div className="flex flex-col items-center text-center space-y-3">
          <img
            src={spitiImg}
            alt="Spiti Stamp"
            className="w-full max-w-sm object-contain"
          />
          <div className="mt-4">
            <p className="text-xl font-semibold">Date - 21st Jan - 5th Fri</p>
            <p className="text-xl font-semibold">Price - 30,900/-</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourPage;
