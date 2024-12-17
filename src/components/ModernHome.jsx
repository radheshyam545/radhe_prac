import React from "react";
import { second_banner, small_banner } from "../exportImages/export";

const ModernHome = () => {
  return (
    <div className="bg-[#f4f0eb] relative">
      {/* Top Image */}
      <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        <img
          src={second_banner}
          alt="Modern Home Top"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="relative mt-8 md:mt-16 px-4 md:px-12 flex  items-start h-[400px]">
        {/* Text Section */}
        <div className="w-[55%] z-20 text-right   flex flex-col justify-end items-end h-[290px]">
            {/* <div className=""> */}
            <h2 className="text-2xl md:text-[36px] font-light text-[#28303b] leading-tight max-w-[420px] font-editorial">
            The apogee of the modern metropolitan home
          </h2>
          <p className="mt-4 text-sm md:text-base text-[#666666] leading-relaxed   max-w-[330px] font-editorial">
            Welcome to a one-of-a-kind collection of just nineteen elegantly
            designed apartments at the heart of New Delhi, combining the
            comforts of a luxury home with the privileges of instant access to
            world-class hotel services, in partnership with The Oberoi, New
            Delhi.
          </p>
            {/* </div> */}
          
        </div>

        {/* Bottom Image (Absolutely Positioned) */}
        <div className="absolute top-[-100px] right-0 md:right-[17%] w-[360px]  h-[390px]  z-10 ">
          <img
            src={small_banner}
            alt="Modern Apartment Interior"
            className="w-full h-full object-cover shadow-lg "
          />
        </div>
      </div>
    </div>
  );
};

export default ModernHome;
