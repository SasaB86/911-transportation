import React from "react";
import carImage from "../images/suv-image.png";
import { FaStar } from "react-icons/fa";

const Fleet = () => {
  return (
    <section id="fleet" className="bg-[#efefef] py-8 md:py-12">
      <div className="container w-9/12 mx-auto text-center px-12">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12 mx-auto ">
          <span className="hidden md:line-left"></span>
          <span className="text-between-lines border-b-4 border-[#d41c30] md:border-none">
            FLEET
          </span>
          <span className="hidden md:line-right"></span>
        </h2>
        <div className="py-8 mb-14">
          <p className="text-center text-md md:text-[1rem] md:px-12 px-8 mb-4">
            Introducing the ultimate luxury vehicle from 911 Transportation's
            limo service, designed to provide an unparalleled experience in
            elegance, security, and performance.{" "}
          </p>
          <p className="text-center text-md md:text-[1rem] md:px-12 px-8 mb-4">
            Our SUV offers an imposing exterior, presenting an aura of prestige
            and strength.
          </p>{" "}
          <p className="text-center text-md md:text-[1rem] md:px-12 px-8 mb-4">
            Whether you're traveling for business or pleasure, our SUV provides
            an exclusive oasis where you can unwind, work, or engage in
            conversation.
          </p>
        </div>
        <div className="container w-[80%] mx-auto flex flex-col items-center md:justify-around md:flex-row md:items-center">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img src={carImage} alt="Fleet" className="w-full h-auto" />
          </div>
          <div className="md:w-1/2 md:pl-8 flex flex-col items-center text-left">
            <ul>
              <h2 className="text-lg md:text-3xl font-bold mb-4 text-left">
                Ford Expedition
              </h2>
              <li>
                <div className="flex items-center gap-2">
                  <FaStar className="h-2.5 w-2.5 text-[#d41c30]" /> Year 2024
                </div>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <FaStar className="h-2.5 w-2.5 text-[#d41c30]" /> 6 passengers
                  maximum (with luggage)
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fleet;
