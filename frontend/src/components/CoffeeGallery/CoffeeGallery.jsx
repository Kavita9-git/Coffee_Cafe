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
     <>
     <span id="gallery"></span>
    <div className="py-24 bg-gradient-to-b from-[#f8f3ef] to-white">
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold font-cursive text-gray-800">
            Coffee Gallery
          </h1>
          <p className="text-gray-500 mt-3">
            Discover the art of coffee in every cup
          </p>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {galleryData.map((item, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl shadow-xl"
            >
              
              {/* Image */}
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-80 object-cover transform group-hover:scale-110 transition duration-700"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* Text */}
              <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition duration-500">

                <h2 className="text-white text-2xl font-bold tracking-wide">
                  {item.name}
                </h2>

                <p className="text-gray-200 text-sm">
                  Freshly brewed perfection
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </div>
</>
  );
};

export default CoffeeGallery;