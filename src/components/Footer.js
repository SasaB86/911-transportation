import React from "react";
import { FaGoogle, FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { Link } from "react-scroll";

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
            <FaGoogle
              size={24}
              className="bg-white text-black p-1 rounded-sm"
            />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61552493008860"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4"
          >
            <FaFacebookSquare size={28} />
          </a>
          <a
            href="https://www.instagram.com/911transportation/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagramSquare size={28} />
          </a>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col md:flex-row mb-4 md:mb-0">
          <Link
            className="text-sm md:text-base mr-4 uppercase cursor-pointer hover:text-gray-500 scroll-smooth"
            to="home"
            smooth={true}
            offset={-100}
            duration={400}
          >
            Home
          </Link>
          <Link
            className="text-sm md:text-base mr-4 uppercase cursor-pointer hover:text-gray-500 scroll-smooth"
            to="about"
            smooth={true}
            offset={-100}
            duration={400}
          >
            About Us
          </Link>
          <Link
            className="text-sm md:text-base mr-4 uppercase cursor-pointer hover:text-gray-500 scroll-smooth"
            to="fleet"
            smooth={true}
            offset={-100}
            duration={400}
          >
            Fleet
          </Link>
          <Link
            className="text-sm md:text-base mr-4 uppercase cursor-pointer hover:text-gray-500 scroll-smooth"
            to="services"
            smooth={true}
            offset={-100}
            duration={400}
          >
            Services
          </Link>

          <Link
            className="text-sm md:text-base mr-4 uppercase cursor-pointer hover:text-gray-500 scroll-smooth"
            to="contact"
            smooth={true}
            offset={-100}
            duration={400}
          >
            Contact
          </Link>
        </div>
        {/* Copyright Text */}
        <div className="text-gray-500 text-sm">
          &copy; 2023 911 transportation | All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
