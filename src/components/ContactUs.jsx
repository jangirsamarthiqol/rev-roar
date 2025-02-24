import React from "react";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

const ContactUs = () => {
  return (
    <div className="bg-[#333]">
      <div className="py-10 mx-35  text-white">
        <h4 className="text-8xl font-light">Contact Us</h4>
        <p className="text-3xl p-3">
          Ready to Rev & Roar? Let's make it happen!
        </p>
        <div className="text-3xl py-3 ml-10">
          <p>● Call Us: +91[Your Number]</p>
          <p>● Email: </p>
          <p>● WhatsApp: Tap the button below for instant queries</p>
        </div>
        <div className="flex gap-8 items-center ">
          <p className="text-3xl">
            Follow us on Instagram and Facebookto see what adventure looks like!
          </p>
          <div className="flex gap-3 text-7xl">
            <FaSquareInstagram />
            <FaFacebookSquare />
            <FaWhatsapp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
