import React from "react";
import cafeVideo from "../../assets/website/cafe-vibes.mp4"; // Your local video file

const CafeVibes = () => {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      
      {/* Background Video */}
      <video
        className="absolute w-full h-full object-cover"
        src={cafeVideo}
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-cursive">
          Feel the Coffee Vibes
        </h2>
        <p className="text-white/80 mb-6 max-w-xl">
          Step into our cozy cafe and experience the aroma of freshly brewed coffee.
        </p>
        <a
          href="#"
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-lg"
        >
          Visit Us
        </a>
      </div>
    </section>
  );
};

export default CafeVibes;