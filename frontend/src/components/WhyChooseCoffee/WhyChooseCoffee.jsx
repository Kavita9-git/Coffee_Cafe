import React from "react";
import { FaCoffee, FaLeaf, FaTruck, FaStar } from "react-icons/fa";

const features = [
  {
    id: 1,
    icon: <FaCoffee size={40} />,
    title: "Premium Coffee",
    desc: "We use the finest coffee beans to bring you the perfect taste.",
  },
  {
    id: 2,
    icon: <FaLeaf size={40} />,
    title: "Fresh Ingredients",
    desc: "Our coffee is made with fresh and organic ingredients.",
  },
  {
    id: 3,
    icon: <FaTruck size={40} />,
    title: "Fast Delivery",
    desc: "Get your favorite coffee delivered quickly to your doorstep.",
  },
  {
    id: 4,
    icon: <FaStar size={40} />,
    title: "Top Quality",
    desc: "Rated by thousands of happy coffee lovers worldwide.",
  },
];

const WhyChooseCoffee = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold font-cursive text-gray-800">
            Why Choose Our Coffee
          </h1>
          <p className="text-gray-500 mt-3">
            Experience the difference in every sip
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((item) => (
            <div
              key={item.id}
              className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              
              <div className="text-primary flex justify-center mb-4">
                {item.icon}
              </div>

              <h2 className="text-xl font-semibold mb-2">
                {item.title}
              </h2>

              <p className="text-gray-500 text-sm">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default WhyChooseCoffee;