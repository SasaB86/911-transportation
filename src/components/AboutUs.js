import React from "react";

import { FaShield, FaUsers, FaCheck, FaKey } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import "../App.css";

const AboutUs = () => {
  const items = [
    {
      icon: <FaShield className="h-8 w-8 text-[#0060ff]" />,
      title: "SAFETY",
      text: "Our top priority at 911 Transportation is your safety. Our fleet of luxurious vehicles undergoes regular maintenance and inspections to guarantee optimal performance. ",
    },
    {
      icon: <FaUsers className="h-8 w-8 text-[#0060ff]" />,
      title: "RELIABILITY",
      text: "We understand the value of being dependable. Our commitment to punctuality is unmatched, as we realize the importance of arriving on time for your engagements.",
    },
    {
      icon: <FaCheck className="h-8 w-8 text-[#0060ff]" />,
      title: "PROFESSIONALISM",
      text: "Politeness, respect, and professionalism are at the core of our service. Our chauffeurs are well-groomed, courteous, and trained to provide the highest level of customer service, carry themselves with integrity and professionalism.",
    },
    {
      icon: <FaEye className="h-8 w-8 text-[#0060ff]" />,
      title: "ATTENTION TO DETAIL",
      text: "We pay utmost attention to detail in every aspect of our service. From the cleanliness and presentation of our vehicles to the personalized amenities we provide, we ensure that no detail is overlooked. ",
    },
    {
      icon: <FaKey className="h-8 w-8 text-[#0060ff]" />,
      title: "CONFIDENTIALITY",
      text: "Trust and discretion are paramount to our limo service. We understand the importance of confidentiality, especially for our corporate clients and high-profile individuals.",
    },
  ];

  return (
    <section className="bg-[#efefef] py-12 ">
      <div className="container w-9/12 mx-auto text-center px-12">
        <h2 className=" text-2xl md:text-4xl font-bold mb-12 mx-auto">
          ABOUT US
        </h2>

        <p className="text-center text-md px-12">
          At <b>911 Transportation</b>, we take pride in offering a limo service
          that goes above and beyond the ordinary. We have crafted an experience
          that blends safety, efficiency, and professionalism to provide you
          with an unforgettable journey.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 flex flex-col items-center my-6 mx-6"
            >
              <div className="text-md">{item.icon}</div>
              <h3 className="text-center font-bold my-3">{item.title}</h3>
              <p className="text-sm text-center">{item.text}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-md my-10 px-12">
          Experience the difference and let us provide you with a journey that
          reflects the highest standards of service. Contact us today and allow
          us to exceed your expectations as your trusted limo service provider.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
