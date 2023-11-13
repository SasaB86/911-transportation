import React, { useRef } from "react";
import carImage from "../images/car.png";

const Fleet = () => {
  const fleetRef = useRef();
  return (
    <section ref={fleetRef} id="fleet" className="bg-[#efefef] py-8 md:py-12">
      <div className="container w-9/12 mx-auto text-center px-12">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12 mx-auto ">
          <span className="hidden md:line-left"></span>
          <span className="text-between-lines border-b-4 border-[#d41c30] md:border-none">
            FLEET
          </span>
          <span className="hidden md:line-right"></span>
        </h2>
        <div className="py-8 mb-14">
          <p className="text-center text-md md:text-lg md:px-12 px-8 mb-4">
            Introducing the ultimate luxury vehicle from 911 Transportation's
            limo service, designed to provide an unparalleled experience in
            elegance, security, and performance.{" "}
          </p>
          <p className="text-center text-md md:text-lg md:px-12 px-8 mb-4">
            Our SUV offers an imposing exterior, presenting an aura of prestige
            and strength.
          </p>{" "}
          <p className="text-center text-md md:text-lg md:px-12 px-8 mb-4">
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
            <h2 className="text-lg md:text-3xl font-bold mb-4">
              Ford Expedition XLT Max
            </h2>
            <ul>
              <li>• Number of Passengers: 6</li>
              <li>• Year 2024</li>
              <li>• 6 passengers maximum (with luggage)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fleet;
