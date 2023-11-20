import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="bg-[#efefef]">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12 mx-auto">
          <span className="hidden md:line-left"></span>
          <span className="text-between-lines border-b-4 border-[#d41c30] md:border-none">
            CONTACT
          </span>
          <span className="hidden md:line-right"></span>
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center  my-8">
          {/* Call Us */}
          <div className="w-1/5 flex flex-col items-center mb-8">
            <FaPhone className="text-2xl text-[#0060ff]" />
            <div>
              <h3 className="text-2xl font-bold mb-2 uppercase">Call Us</h3>
              <p className="text-lg">
                <a className="hover:underline" href="tel:+12244223254">
                  Phone: +1 (224) 422 3254
                </a>
              </p>
            </div>
          </div>

          {/* Location */}
          <div className="w-1/5 flex flex-col items-center mb-8 mx-6">
            <FaMapMarkerAlt className="text-2xl text-[#0060ff]" />
            <div>
              <h3 className="text-2xl font-bold mb-2 uppercase">Location</h3>
              <p className="text-lg">Des Plaines, Illinois 60016</p>
            </div>
          </div>

          {/* Email */}
          <div className="w-1/5 flex flex-col items-center mb-8">
            <FaEnvelope className="text-2xl text-[#0060ff]" />
            <div>
              <h3 className="text-2xl font-bold mb-2 uppercase">Email</h3>
              <p className="text-lg">
                <a
                  className="hover:underline"
                  href="mailto:911transportation23@gmail.com"
                >
                  911transportation23@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Google Map Embed */}
      <div className="relative h-[60vh] overflow-hidden aspect-ratio-16/9">
        <iframe
          className="absolute top-0 left-0 w-full h-full border-0 grayscale"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6462.535569989578!2d-87.8959948034245!3d42.041344240874785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fb0447ae71d6d%3A0xe95d217a6e46c8ba!2sDes%20Plaines%2C%20IL%2C%20USA!5e0!3m2!1sen!2srs!4v1700081341620!5m2!1sen!2srs"
          allowFullScreen=""
          loading="lazy"
          title="Google Map"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
