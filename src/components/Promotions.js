import React from "react";

const Promotions = () => {
  return (
    <section
      id="promotions"
      className="bg-black text-white py-8 md:py-12 scroll-smooth"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12 mx-auto">
          <span className="hidden md:line-left"></span>
          <span className="text-between-lines border-b-4 border-[#d41c30] md:border-none">
            PROMOTIONS
          </span>
          <span className="hidden md:line-right"></span>
        </h2>
        <p className="text-3xl">Stay tuned for exciting promotions!</p>
        <p className="text-3xl">Coming Soon...</p>
      </div>
    </section>
  );
};

export default Promotions;
