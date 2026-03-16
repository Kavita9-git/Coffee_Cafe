import React from "react";

import pc1 from "../../assets/website/pc1.jpg";
import pc2 from "../../assets/website/pc2.jpg";
import pc3 from "../../assets/website/pc3.jpg";
import pc4 from "../../assets/website/pc4.jpg";

const coffeeData = [
  {
    id: 1,
    name: "Cappuccino",
    price: "$12",
    img: pc1,
  },
  {
    id: 2,
    name: "Espresso",
    price: "$10",
    img: pc2,
  },
  {
    id: 3,
    name: "Latte",
    price: "$14",
    img: pc3,
  },
  {
    id: 4,
    name: "Mocha",
    price: "$15",
    img: pc4,
  },
];

const PopularCoffee = () => {
  return (
    <div className="py-16">
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold font-cursive">
            Our Popular Coffee
          </h1>
          <p className="text-gray-500 mt-2">
            Discover our most loved coffee flavors
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {coffeeData.map((coffee) => (
            <div
              key={coffee.id}
              className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition duration-300"
            >
              <img
                src={coffee.img}
                alt={coffee.name}
                className="h-52 w-full object-cover"
              />

              <div className="p-4 text-center">
                <h2 className="text-lg font-semibold">{coffee.name}</h2>
                <p className="text-primary font-bold">{coffee.price}</p>

                <button className="mt-3 px-4 py-2 bg-primary text-white rounded-full hover:bg-black transition">
                  Order Now
                </button>
              </div>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default PopularCoffee;