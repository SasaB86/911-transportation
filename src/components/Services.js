import React, { useRef } from "react";
import airportService from "../images/circles-01.png";
import businessService from "../images/circles-02.png";
import weddingService from "../images/circles-03.png";
import promService from "../images/circles-04.png";

const Services = () => {
  const servicesRef = useRef();
  return (
    <section
      ref={servicesRef}
      id="services"
      className="bg-[#efefef] py-8 md:py-12"
    >
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12 mx-auto ">
        <span className="hidden md:line-left"></span>
        <span className="text-between-lines border-b-4 border-[#d41c30] md:border-none">
          SERVICES / RATES
        </span>
        <span className="hidden md:line-right"></span>
      </h2>
      <div className="container w-[80%] mx-auto ">
        {/* Service 1 */}
        <div className="service-container flex flex-col md:flex-row justify-around items-center text-center md:text-left  mx-auto  ">
          <div className="w-[100%]  my-4">
            <div className="w-[80%] h-full m-auto flex flex-col justify-center">
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
          <div className="z-10 mx-auto md:mr-10">
            <img
              src={airportService}
              alt="Airport Services"
              className="w-3/4 h-3/4 md:w-full md:h-full object-contain md:object-cover mx-auto mb-4 md:mb-0 md:mr-0 "
            />
          </div>
        </div>

        {/* Service 2 */}
        <div className="service-container flex flex-col md:flex-row justify-around items-center text-center md:text-left  mx-auto  ">
          <div className="z-10 mx-auto md:ml-10">
            <img
              src={businessService}
              alt="Business Service"
              className="w-3/4 h-3/4 md:w-full md:h-full object-contain md:object-cover mx-auto mt-4 mb-4 md:mt-0 md:mb-0 md:mr-0"
            />
          </div>
          <div className="w-[100%] my-4">
            <div className="w-[80%] h-full m-auto flex flex-col justify-center">
              <h3 className="text-lg font-bold mb-2">BUSINESS & CORPORATE</h3>
              <p className="my-2">
                At 911 Transportation we are specialize in delivering
                exceptional limo services tailored to meet the unique
                requirements of business and corporate travelers.
              </p>
              <p className="my-2">
                Let us elevate your business and corporate travel with our
                impeccable service.
              </p>
            </div>
          </div>
        </div>

        {/* Service 3 */}
        <div className="service-container flex flex-col md:flex-row justify-around items-center text-center md:text-left overflow-visible mx-auto  ">
          <div className="w-[100%] my-4">
            <div className="w-[80%] h-full m-auto flex flex-col justify-center">
              <h3 className="text-lg font-bold mb-2">WEDDING SERVICES</h3>
              <p className="my-2">
                Celebrate Your Special Day with 911 Transportation, let us be a
                part of your love story and make your wedding transportation a
                truly unforgettable experience.
              </p>
            </div>
          </div>
          <div className="z-10 mx-auto md:mr-10">
            <img
              src={weddingService}
              alt="Wedding Services"
              className="w-3/4 h-3/4 md:w-full md:h-full object-contain md:object-cover mx-auto mb-4 md:mb-0 md:mr-0 "
            />
          </div>
        </div>

        {/* Service 4 */}
        <div className="service-container flex flex-col md:flex-row justify-around items-center text-center md:text-left overflow-visible mx-auto  ">
          <div className="z-10 mx-auto md:ml-10">
            <img
              src={promService}
              alt="Prom Services"
              className="w-3/4 h-3/4 md:w-full md:h-full object-contain md:object-cover mx-auto mt-4 mb-4 md:mt-0 md:mb-0 md:mr-0"
            />
          </div>
          <div className="w-[100%]  my-4">
            <div className="w-[80%] h-full m-auto flex flex-col justify-center">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
