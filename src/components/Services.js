import React, { useRef } from "react";
import airportService from "../images/service1.png";
import businessService from "../images/service2.png";
import weddingService from "../images/service3.png";
import promService from "../images/service4.png";

const Services = () => {
  const servicesRef = useRef();
  return (
    <section ref={servicesRef} id="services" className="bg-[#efefef] py-12">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 mx-auto">
        <span className="hidden md:line-left"></span>
        <span className="text-between-lines">SERVICES</span>
        <span className="hidden md:line-right"></span>
      </h2>
      <div className="container w-[80%] mx-auto flex flex-col items-center justify-center">
        {/* Service 1 */}
        <div className="service-container flex flex-col md:flex-row justify-around items-center text-left overflow-visible">
          <div className="z-10">
            <img
              src={airportService}
              alt="Airport Services"
              className="w-26 h-26  object-contain md:object-cover rounded-full  ring-offset-4 ring ring-[#0060ff] mb-4 md:mb-0 md:mr-0 md:h-52 md:w-52"
            />
          </div>
          <div className="w-1/2 my-4">
            <h3 className="text-lg font-bold mb-2">AIRPORT SERVICES</h3>
            <p className="my-2">
              Elevate Your Airport Experience with 911 Transportation:
              Unparalleled Limo Services for Seamless Journeys.
            </p>

            <p className="my-2">
              Our airport services redefine the standard of luxury
              transportation.
            </p>

            <p className="my-2">
              We bring together the attributes of safety, reliability, and
              professionalism to offer you an unparalleled journey to or from
              the airport.
            </p>
          </div>
        </div>

        {/* Service 2 */}
        <div className="service-container flex flex-col md:flex-row justify-around items-center text-left overflow-visible">
          <div className="w-1/2 my-4">
            <h3 className="text-lg font-bold mb-2">BUSINESS & CORPORATE</h3>
            <p className="my-2">
              At 911 Transportation we are specialize in delivering exceptional
              limo services tailored to meet the unique requirements of business
              and corporate travelers.
            </p>
            <p className="my-2">
              Let us elevate your business and corporate travel with our
              impeccable service.
            </p>
          </div>
          <div className="z-10">
            <img
              src={businessService}
              alt="Business Service"
              className="w-26 h-26  object-contain md:object-cover rounded-full  ring-offset-4 ring ring-[#0060ff] mb-4 md:mb-0 md:ml-0 md:h-52 md:w-52"
            />
          </div>
        </div>

        {/* Service 3 */}
        <div className="service-container flex flex-col md:flex-row justify-around items-center text-left overflow-visible">
          <div className="z-10">
            <img
              src={weddingService}
              alt="Wedding Services"
              className="w-26 h-26  object-contain md:object-cover rounded-full  ring-offset-4 ring ring-[#0060ff] mb-4 md:mb-0 md:mr-0 md:h-52 md:w-52"
            />
          </div>
          <div className="w-1/2 my-4">
            <h3 className="text-lg font-bold mb-2">WEDDING SERVICES</h3>
            <p className="my-2">
              Celebrate Your Special Day with 911 Transportation, let us be a
              part of your love story and make your wedding transportation a
              truly unforgettable experience.
            </p>
          </div>
        </div>

        {/* Service 4 */}
        <div className="service-container flex flex-col md:flex-row justify-around items-center text-left overflow-visible">
          <div className="w-1/2 my-4">
            <h3 className="text-lg font-bold mb-2">PROM SERVICES</h3>
            <p className="my-2">
              Arrive in Style and Make Unforgettable Memories with 911
              Transportation: Extraordinary Prom Services Inspired by
              Reliability and Glamour.
            </p>
            <p className="my-2">
              Our commitment to excellence ensures that your prom night
              transportation is nothing short of extraordinary, creating
              memories that will last a lifetime.
            </p>
          </div>
          <div className="z-10 rounded-full">
            <img
              src={promService}
              alt="Prom Services"
              className="w-68 h-68  shrink-0 grow-0 object-fill md:object-cover rounded-full  ring-offset-4 ring ring-[#0060ff] mb-4 md:mb-0 md:ml-0 md:h-52 md:w-52"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
