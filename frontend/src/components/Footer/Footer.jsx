import React from "react";
import footerBg from "../../assets/website/coffee-footer.jpg";

const Footer = () => {
  return (
<footer
  className="bg-cover bg-bottom bg-no-repeat w-full text-white mt-10 min-h-[500px]"
  style={{ backgroundImage: `url(${footerBg})` }}
>
  {/* Overlay */}
  <div className="bg-black/50 px-6 py-24 h-full flex items-center">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-10 w-full">
      
      {/* Left */}
      <div>
        <h2 className="text-3xl font-bold mb-3">Coffee Cafe</h2>
        <p className="text-sm mb-4">
          Crafted Coffee, Cozy Vibes, Unforgettable Moments — Your Perfect Espresso Escape
        </p>
        <button className="bg-[#3b2416] hover:bg-[#5a3823] px-5 py-2 rounded-full text-sm transition">
          Visit our YouTube Channel
        </button>
      </div>

      {/* Links */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Footer Links</h3>
        <ul className="space-y-2 text-sm">
          <li className="hover:text-yellow-500 cursor-pointer">Home</li>
          <li className="hover:text-yellow-500 cursor-pointer">About</li>
          <li className="hover:text-yellow-500 cursor-pointer">Contact</li>
          <li className="hover:text-yellow-500 cursor-pointer">Blog</li>
        </ul>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
        <ul className="space-y-2 text-sm">
          <li className="hover:text-yellow-500 cursor-pointer">Home</li>
          <li className="hover:text-yellow-500 cursor-pointer">About</li>
          <li className="hover:text-yellow-500 cursor-pointer">Contact</li>
          <li className="hover:text-yellow-500 cursor-pointer">Blog</li>
        </ul>
      </div>

      {/* Address */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Address</h3>
        <p className="text-sm">Noida, India</p>
        <p className="text-sm mb-3">+91 1234567890</p>

        <div className="flex space-x-4 text-lg">
          <i className="fab fa-facebook-f hover:text-yellow-500 cursor-pointer"></i>
          <i className="fab fa-linkedin-in hover:text-yellow-500 cursor-pointer"></i>
          <i className="fab fa-instagram hover:text-yellow-500 cursor-pointer"></i>
        </div>
      </div>

    </div>
  </div>
</footer>
  );
};

export default Footer;