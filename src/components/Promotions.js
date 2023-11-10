import React, { useRef } from "react";

const Promotions = () => {
  const promotionsRef = useRef();
  return (
    <section
      ref={promotionsRef}
      id="promotions"
      className="bg-black text-white py-16 scroll-smooth"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 mx-auto">
          <span className="hidden md:line-left"></span>
          <span className="text-between-lines">PROMOTIONS</span>
          <span className="hidden md:line-right"></span>
        </h2>
        <p className="text-3xl">Stay tuned for exciting promotions!</p>
        <p className="text-3xl">Coming Soon...</p>
      </div>
    </section>
  );
};

export default Promotions;
