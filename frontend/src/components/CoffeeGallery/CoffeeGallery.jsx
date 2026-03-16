import React from "react";

import g1 from "../../assets/website/g1.jpg";
import g2 from "../../assets/website/g2.jpg";
import g3 from "../../assets/website/g3.jpg";
import g4 from "../../assets/website/g4.jpg";
import g5 from "../../assets/website/g5.jpg";
import g6 from "../../assets/website/g6.jpg";

const galleryData = [
  { img: g1, name: "Cappuccino" },
  { img: g2, name: "Espresso" },
  { img: g3, name: "Latte" },
  { img: g4, name: "Mocha" },
  { img: g5, name: "Cold Coffee" },
  { img: g6, name: "Americano" },
];

const CoffeeGallery = () => {
  return (
    <div className="py-20 bg-gray-100">
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold font-cursive">
            Coffee Gallery
          </h1>
          <p className="text-gray-500 mt-2">
            Explore our delicious coffee moments
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {galleryData.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl group cursor-pointer shadow-lg"
            >
              {/* Image */}
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-72 object-cover transform group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">

                <h2 className="text-white text-2xl font-semibold tracking-wide">
                  {item.name}
                </h2>

              </div>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default CoffeeGallery;