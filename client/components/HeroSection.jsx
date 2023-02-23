import Image from 'next/image';
import React from 'react';
import service from '../assets/electrical.png';
import search from '../assets/search.png';

const HeroSection = () => (
  <div className="bg-gradient-to-b from-purple-600 to-blue-300">
    <div className="container mx-auto h-[600px] flex justify-between items-center">
      <div className="flex flex-col gap-8">
        <h1 className="text-5xl text-white font-medium">
          Find the perfect <i className="font-light text-green-800">service providers</i> for your needs
        </h1>
        <div className="flex items-center justify-between bg-white rounded-md">
          <div className="flex items-center gap-3">
            <Image src={search} alt="search" className="w-5 h-5 ml-2" />
            <input type="text" placeholder="Search for a service provider" className="border-0 outline-none" />
          </div>
          <button type="button" className="w-28 h-14 bg-blue-500 text-white cursor-pointer">Search</button>
        </div>
        <div className="flex items-center gap-3 text-white">
          <span>Popular:</span>
          <button type="button" className="text-sm bg-transparent border-white border-2 rounded-3xl p-2 cursor-pointer">Personal Trainer</button>
          <button type="button" className="text-sm bg-transparent border-white border-2 rounded-3xl p-2 cursor-pointer">Plumbing</button>
          <button type="button" className="text-sm bg-transparent border-white border-2 rounded-3xl p-2 cursor-pointer">Electrical</button>
          <button type="button" className="text-sm bg-transparent border-white border-2 rounded-3xl p-2 cursor-pointer">Food Delivery</button>
          <button type="button" className="text-sm bg-transparent border-white border-2 rounded-3xl p-2 cursor-pointer">Legal Services</button>
        </div>
      </div>
      <div className="h-full">
        <Image src={service} alt="Electrical Services" className="h-full object-contain" />
      </div>
    </div>
  </div>
);

export default HeroSection;
