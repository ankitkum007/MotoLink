import React from "react";
import Search from "../component/Search";
import heroimage from '../assets/hero-image.png'

function Hero() {
  return (
      <div className="">
        <img  src={heroimage} alt="hero-image"/>
        <div className="flex flex-col items-center justify-center gap-6 -mt-[230px] lg:-mt-[680px]">
          <h2 className="font-bold text-orange-700 text-[20px] lg:text-[70px]">Find Your Dream Car</h2>
          <h2 className="text-base font-semibold lg:text-[40px]">
            Find cars for Sale and Rent near you location
          </h2>
          <Search />
        </div>
      </div>
  );
}

export default Hero;
