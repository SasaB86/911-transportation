import React from "react";
import airportService from "../images/circles-01.png";
import businessService from "../images/circles-02.png";
import weddingService from "../images/circles-03.png";
import promService from "../images/circles-04.png";

const Services = () => {
  return (
    <section id="services" className="bg-[#efefef] py-8 md:py-12">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12 mx-auto ">
        <span className="hidden md:line-left"></span>
        <span className="text-between-lines border-b-4 border-[#d41c30] md:border-none">
          SERVICES / RATES
        </span>
        <span className="hidden md:line-right"></span>
      </h2>
      <div className="container w-[90%] md:w-[80%] mx-auto ">
        {/* Service 1 */}
        <div className="service-container flex flex-col 2xl:flex-row justify-around items-center text-center md:text-left  mx-auto relative ">
          <div className="w-[100%]  my-4">
            <div className="2xl:w-[50%] h-full mx-12 2xl:ml-12 flex flex-col justify-center items-start ">
              <h3 className="text-2xl font-bold mb-2">AIRPORT SERVICES</h3>
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
              <ul className="font-bold mt-2">
                <li>From O'Hare and Midway to Chicago - $160.00 </li>
                <li>From Chicago to O'Hare and Midway - $156.00</li>
                <br />
                <li>*All taxes and gratuities included.</li>
              </ul>
            </div>
          </div>
          <div className="z-10 mx-auto 2xl:mr-10 2xl:absolute 2xl:right-0">
            <img
              src={airportService}
              alt="Airport Services"
              className="w-3/4 h-3/4 md:w-5/6 md:h-5/6 lg:w-5/6 lg:h-5/6 xl:w-5/6 xl:h-5/6 2xl:w-full xl:h-full object-contain bg-white rounded-full ring-2 ring-offset-2 ring-offset-[#0060ff] mx-auto my-4 "
            />
          </div>
        </div>

        {/* Service 2 */}
        <div className="service-container flex flex-col 2xl:flex-row justify-around items-center text-center md:text-left  mx-auto relative ">
          <div className="z-10 mx-auto 2xl:ml-10 2xl:absolute 2xl:left-0">
            <img
              src={businessService}
              alt="Business Service"
              className="w-3/4 h-3/4 md:w-5/6 md:h-5/6 lg:w-5/6 lg:h-5/6 xl:w-5/6 xl:h-5/6 2xl:w-full xl:h-full object-contain bg-white rounded-full ring-2 ring-offset-2 ring-offset-[#0060ff] mx-auto my-4 "
            />
          </div>
          <div className="w-[100%] my-4">
            <div className="2xl:w-[50%] h-full px-12 lg:ml-auto 2xl:mr-12 flex flex-col justify-center items-start ">
              <h3 className="text-2xl font-bold mb-2">BUSINESS & CORPORATE</h3>
              <p className="my-2">
                At 911 Transportation we are specialize in delivering
                exceptional limo services tailored to meet the unique
                requirements of business and corporate travelers.
              </p>
              <p className="my-2">
                Let us elevate your business and corporate travel with our
                impeccable service.
              </p>
              <ul className="font-bold mt-2">
                <li>Include two (2) hours of service - $250.00</li>
                <br />
                <li>*All taxes and gratuities included.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Service 3 */}
        <div className="service-container flex flex-col 2xl:flex-row justify-around items-center text-center md:text-left  mx-auto relative ">
          <div className="w-[100%] my-4">
            <div className="2xl:w-[50%] h-full mx-12 2xl:ml-12 flex flex-col justify-center items-start">
              <h3 className="text-2xl font-bold mb-2">WEDDING SERVICES</h3>
              <p className="my-2">
                Celebrate Your Special Day with 911 Transportation, let us be a
                part of your love story and make your wedding transportation a
                truly unforgettable experience.
              </p>
              <ul className="font-bold mt-2">
                <li>Include four (4) hours of service - $ 422.00</li>
                <br />
                <li>*All taxes and gratuities included.</li>
              </ul>
            </div>
          </div>
          <div className="z-10 mx-auto 2xl:mr-10 2xl:absolute 2xl:right-0">
            <img
              src={weddingService}
              alt="Wedding Services"
              className="w-3/4 h-3/4 md:w-5/6 md:h-5/6 lg:w-5/6 lg:h-5/6 xl:w-5/6 xl:h-5/6 2xl:w-full xl:h-full object-contain bg-white rounded-full ring-2 ring-offset-2 ring-offset-[#0060ff] mx-auto my-4 "
            />
          </div>
        </div>

        {/* Service 4 */}
        <div className="service-container flex flex-col 2xl:flex-row justify-around items-center text-center md:text-left  mx-auto relative ">
          <div className="z-10 mx-auto 2xl:ml-10 2xl:absolute 2xl:left-0">
            <img
              src={promService}
              alt="Prom Services"
              className="w-3/4 h-3/4 md:w-5/6 md:h-5/6 lg:w-5/6 lg:h-5/6 xl:w-5/6 xl:h-5/6 2xl:w-full xl:h-full object-contain bg-white rounded-full ring-2 ring-offset-2 ring-offset-[#0060ff] mx-auto my-4 "
            />
          </div>
          <div className="w-[100%]  my-4">
            <div className="2xl:w-[50%] h-full px-12 lg:ml-auto 2xl:mr-12 flex flex-col justify-center items-start ">
              <h3 className="text-2xl font-bold mb-2">PROM SERVICES</h3>
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
              <ul className="font-bold mt-2">
                <li>Include two (2) hours of service - $250.00</li>
                <li>Include two (4) hours of service - $440.00</li>
                <li>(Each Additional 1/2 Hour is $70.00)</li>
                <br />
                <li>*All taxes and gratuities included.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
