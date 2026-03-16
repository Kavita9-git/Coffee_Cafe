import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const testimonialData = [
  {
    id: 1,
    name: "Dipankar kumar",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaue reiciendis inventore iste ratione ex alias quis magni.",
    img: "https://picsum.photos/101",
  },
  {
    id: 2,
    name: "Satya Narayan",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaue reiciendis inventore iste ratione ex alias quis magni.",
    img: "https://picsum.photos/102",
  },
  {
    id: 3,
    name: "Dilshad",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaue reiciendis inventore iste ratione ex alias quis magni.",
    img: "https://picsum.photos/103",
  },
  {
    id: 4,
    name: "John Doe",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaue reiciendis inventore iste ratione ex alias quis magni.",
    img: "https://picsum.photos/104",
  },
];

const Testimonial = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold font-cursive text-gray-800">
            Testimonials
          </h1>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={3}
          pagination={{ clickable: true }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonialData.map((data) => (
            <SwiperSlide key={data.id}>
              <div className="bg-[#eae3df] p-8 rounded-xl shadow-md relative">

                {/* Image */}
                <img
                  src={data.img}
                  alt={data.name}
                  className="w-14 h-14 rounded-full mb-4"
                />

                {/* Quote */}
                <p className="text-gray-600 text-sm mb-4">
                  {data.text}
                </p>

                {/* Name */}
                <h2 className="font-semibold text-lg font-cursive text-gray-700">
                  {data.name}
                </h2>

                {/* Quote icon */}
                <span className="absolute right-6 bottom-6 text-5xl text-gray-300">
                  "
                </span>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </div>
  );
};

export default Testimonial;