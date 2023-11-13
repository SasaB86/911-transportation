import React from "react";
import { FaGoogle, FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto flex flex-col items-center justify-center md:justify-between gap-10">
        {/* Social Icons */}
        <div className="flex  items-center mb-4 md:mb-0">
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4"
          >
            <FaGoogle size={24} />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61552493008860"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4"
          >
            <FaFacebookSquare size={24} />
          </a>
          <a
            href="https://www.instagram.com/911transportation/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagramSquare size={24} />
          </a>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col md:flex-row mb-4 md:mb-0">
          <a
            href="#home"
            className="text-sm md:text-base mr-4 uppercase cursor-pointer hover:text-gray-500 scroll-smooth"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-sm md:text-base mr-4 uppercase cursor-pointer hover:text-gray-500 scroll-smooth"
          >
            About Us
          </a>
          <a
            href="#fleet"
            className="text-sm md:text-base mr-4 uppercase cursor-pointer hover:text-gray-500 scroll-smooth"
          >
            Fleet
          </a>
          <a
            href="#services"
            className="text-sm md:text-base mr-4 uppercase cursor-pointer hover:text-gray-500 scroll-smooth"
          >
            Services
          </a>

          <a
            href="#contact"
            className="text-sm md:text-base uppercase cursor-pointer hover:text-gray-500 scroll-smooth"
          >
            Contact Us
          </a>
        </div>

        {/* Copyright Text */}
        <div className="text-gray-500 text-sm">
          &copy; 2021 911 transportation | All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
