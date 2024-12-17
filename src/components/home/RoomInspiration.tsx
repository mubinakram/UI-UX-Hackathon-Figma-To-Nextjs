import React from "react";
import { Button } from "../ui/button";

const RoomInspiration = () => {
  return (
    <div className="bg-[#FCF8F3]">
    <section className="max-w-7xl mx-auto w-full flex justify-between items-center py-12 ">
      {/* Left Content */}
      <div className="w-full md:w-1/2 px-8 md:pl-20">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          50+ Beautiful rooms inspiration
        </h2>
        <p className="text-gray-600 mb-6">
          Our designer already made a lot of beautiful prototype of rooms that
          inspire you
        </p>
        
        <Button variant={'fBtn3'}>Explore More</Button>
      </div>

      {/* Right Carousel */}
      <div className="w-full md:w-1/2 flex overflow-hidden relative">
        {/* Main Image */}
        <div className="relative">
          <img
            src="/room1.png"
            alt="Room Inspiration"
            className="rounded-lg object-cover w-[350px] h-[450px]"
          />
          {/* Card Overlap */}
          <div className="absolute bottom-8 left-8 bg-white p-4 shadow-md rounded-md">
            <p className="text-sm text-gray-400">01 — Bed Room</p>
            <h3 className="text-lg font-bold text-gray-800">Inner Peace</h3>
            <div className="mt-2">
              <button className="text-yellow-700 text-lg">→</button>
            </div>
          </div>
        </div>

        {/* Side Image */}
        <div className="absolute top-0 right-0 translate-x-6">
          <img
            src="/room2.png"
            alt="Room Inspiration 2"
            className="rounded-lg object-cover w-[250px] h-[450px] opacity-80"
          />
        </div>

        {/* Navigation Arrows */}
        <div className="absolute top-1/2 transform -translate-y-1/2 right-8 flex gap-4">
          <button className="w-8 h-8 flex items-center justify-center bg-yellow-700 text-white rounded-full shadow-md hover:bg-yellow-600">
            →
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="absolute bottom-3 bg-white rounded-full py-3 px-5 border  left-1/2 transform -translate-x-1/2 flex gap-2">
          <span className="w-3 h-3 bg-yellow-700 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
        </div>
      </div>
    </section>
    </div>
  );
};

export default RoomInspiration;
