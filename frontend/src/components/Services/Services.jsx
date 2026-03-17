import React from 'react';
import Img2 from '../../assets/website/coffee2.png';

const ServicesData = [
  {
    id: 1,
    img: Img2,
    name: 'Espresso',
    description:
      'A strong and concentrated coffee made by forcing hot water through finely-ground coffee beans.',
    aosDelay: '100',
  },
  {
    id: 2,
    img: Img2,
    name: 'Cappuccino',
    description:
      'A perfect balance of espresso, steamed milk, and foam for a rich and creamy taste.',
    aosDelay: '200',
  },
  {
    id: 3,
    img: Img2,
    name: 'Latte',
    description:
      'A smooth coffee drink made with espresso and a larger amount of steamed milk.',
    aosDelay: '300',
  },
];

const Services = () => {
  return (
    <>
      <span id="services"></span>

      <div className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">

          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-cursive text-gray-800">
              Best Coffee For You
            </h1>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {ServicesData.map((data) => (
              <div
                key={data.id}
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                className="group bg-white text-gray-800 rounded-2xl p-6 text-center shadow-lg transition duration-300 cursor-pointer
                hover:bg-primary hover:text-white"
              >

                {/* Image */}
                <div className="flex justify-center mb-4">
                  <img
                    src={data.img}
                    alt={data.name}
                    className="w-40 sm:w-44 md:w-48 object-contain transition duration-300 
group-hover:scale-125 group-hover:rotate-6"
                  />
                </div>

                {/* Title */}
                <h2 className="text-lg sm:text-xl font-bold mb-2">
                  {data.name}
                </h2>

                {/* Description */}
                <p className="text-gray-600 text-sm sm:text-base transition duration-300 
                group-hover:text-white">
                  {data.description}
                </p>

              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
};

export default Services;