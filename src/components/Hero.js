import React from "react";
import backgroundImage from "../images/background.png";

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center">
      <div className="absolute inset-0">
        {/* Background image */}
        <img
          src={backgroundImage}
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
        <div>
          <h1 className="font-montserrat text-xl md:text-4xl font-light">
            911 TRANSPORTATION
          </h1>
          <h1 className="font-montserrat text-xl md:text-4xl font-light">
            LIVERY SERVICES
          </h1>
        </div>
        <div className="bg-[#0060ff] h-1 w-[100px] md:w-[150px] my-4"></div>
        <button className="bg-[#d41c30] text-white font-light md:font-bold md:px-9 md:py-3 px-5 py-2  hover:bg-[#e5142b]">
          GET A QUOTE
        </button>
      </div>
    </section>
  );
};

export default Hero;
