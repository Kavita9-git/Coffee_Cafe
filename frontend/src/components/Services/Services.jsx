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
    name: 'Espresso',
    description:
      'A strong and concentrated coffee made by forcing hot water through finely-ground coffee beans.',
    aosDelay: '200',
  },
  {
    id: 3,
    img: Img2,
    name: 'Espresso',
    description:
      'A strong and concentrated coffee made by forcing hot water through finely-ground coffee beans.',
    aosDelay: '300',
  },
];

const Services = () => {
  return (
    <>
      <span id="services"></span>
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-20">
            <h1 className="text-4xl font-bold font-cursive text-gray-800">Best Coffee For You</h1>
          </div>

          {/* Services Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 place-items-center">
            {ServicesData.map((data, index) => (
              <div
                key={data.id}
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                className="rounded-2xl bg-white hover:bg-primary hover:text-white shadow-lg hover:shadow-xl duration-300 max-w-[320px] w-full group relative cursor-pointer transition"
              >
                {/* Image */}
                <div className="h-[130px] flex justify-center">
                  <img
                    src={data.img}
                    alt={data.name}
                    className="w-44 h-44 object-contain -translate-y-1/3 group-hover:scale-110 group-hover:rotate-6 transition duration-300"
                  />
                </div>

                {/* Text Content */}
                <div className="p-5 text-center">
                  <h1 className="text-xl font-bold mb-2">{data.name}</h1>
                  <p className="text-gray-600 group-hover:text-white duration-300 text-sm line-clamp-3">
                    {data.description}
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

export default Services;