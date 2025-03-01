/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

const ContactUs = () => {
  return (
    <div
      className="bg-[#333] py-8 px-4"
      style={{ fontFamily: "Varietta Variable" }}
    >
      <div className="container mx-auto text-white text-left">
        <h4 className="text-4xl md:text-8xl font-light">Contact Us</h4>
        <p className="text-xl md:text-3xl my-4">
          Ready to Rev & Roar? Let's make it happen!
        </p>
        <div className="text-lg md:text-3xl py-3 md:py-6 ml-0">
          <p>● Call Us: +91 8118823650</p>
          <p>● Email: samarth8947@gmail.com</p>
          <p>● WhatsApp: Tap the button below for instant queries</p>
        </div>
        <div className="flex flex-col md:flex-row items-start gap-4 md:gap-8">
          <p className="text-lg md:text-3xl">
            Follow us on Instagram and Facebook to see what adventure looks
            like!
          </p>
          <div className="flex gap-3 text-4xl md:text-7xl">
            <a
              href="https://instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareInstagram />
            </a>
            <a
              href="https://facebook.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookSquare />
            </a>
            <a
              href="https://wa.me/8118823650"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
