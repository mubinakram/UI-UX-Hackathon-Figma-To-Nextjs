import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <div className="relative flex items-center justify-center md:justify-end md:pr-20 bg-white min-h-screen ">
      <div className="absolute inset-0 ">
        <img
          src="/hero.png" 
          alt="New Collection"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 flex items-center justify-center">
        <div className="bg-[#FFF8E8] p-8 md:p-12 max-w-xl rounded-lg shadow-lg">
          <p className="text-sm text-gray-600 tracking-widest mb-4">NEW ARRIVAL</p>
          <h1 className="text-4xl font-bold text-[#B58E3F] leading-snug mb-4">
            Discover Our<br />New Collection
          </h1>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="bg-[#B58E3F] text-white px-6 py-3 font-semibold rounded hover:bg-[#a57f2d] transition duration-300">
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
