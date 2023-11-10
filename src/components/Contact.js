import React, { useRef } from "react";
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const contactRef = useRef();
  return (
    <section ref={contactRef} id="contact" className="bg-[#efefef] pt-16">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 mx-auto">
          <span className="hidden md:line-left"></span>
          <span className="text-between-lines">CONTACT</span>
          <span className="hidden md:line-right"></span>
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center my-8">
          {/* Call Us */}
          <div className="flex flex-col items-center mb-8">
            <FaPhone className="text-2xl text-[#0060ff]" />
            <div>
              <h3 className="text-2xl font-bold mb-2 uppercase">Call Us</h3>
              <p className="text-lg">Phone: +1 (224) 422 3254</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex flex-col items-center mb-8 mx-6">
            <FaMapMarkerAlt className="text-2xl text-[#0060ff]" />
            <div>
              <h3 className="text-2xl font-bold mb-2 uppercase">Location</h3>
              <p className="text-lg">647 Metropolitan way, apt 411</p>{" "}
              <p className="text-lg">Des Plaines, Illinois 60016</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center mb-8">
            <FaEnvelope className="text-2xl text-[#0060ff]" />
            <div>
              <h3 className="text-2xl font-bold mb-2 uppercase">Email</h3>
              <p className="text-lg">911transportation23@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      {/* Google Map Embed */}
      <div className="relative h-[75vh] overflow-hidden aspect-ratio-16/9">
        <iframe
          className="absolute top-0 left-0 w-full h-full border-0"
          src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d4190.42287884919!2d-87.88619902162193!3d42.041541309786574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x880fb7682fe6d469%3A0x61584e825be6624b!2s647%20Metropolitan%20Way%2C%20Des%20Plaines%2C%20IL%2060016%2C%20USA!3m2!1d42.0418612!2d-87.8858625!5e0!3m2!1sen!2srs!4v1699637343370!5m2!1sen!2srs"
          allowFullScreen=""
          loading="lazy"
          title="Google Map"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
