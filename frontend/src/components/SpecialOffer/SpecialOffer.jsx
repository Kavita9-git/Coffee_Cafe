import React from "react";
import coffeeBg from "../../assets/website/coffee-bg.jpg";

const SpecialOffer = () => {
  return (
    <div
      className="py-20 bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: `url(${coffeeBg})`,
      }}
    >
      <div className="bg-black/60 py-16">
        <div className="container text-center text-white">

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get 50% Off Your First Coffee
          </h1>

          <p className="text-gray-200 mb-6 max-w-xl mx-auto">
            Enjoy the best premium coffee with an exclusive discount.
            Taste the rich aroma and freshness today.
          </p>

          <button className="px-8 py-3 bg-primary rounded-full font-semibold hover:bg-white hover:text-black transition duration-300">
            Order Now
          </button>

        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;