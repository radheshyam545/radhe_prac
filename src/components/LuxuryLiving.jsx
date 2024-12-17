import React from "react";
import { short_card_1, small_card_2 } from "../exportImages/export"; // Importing image

const LuxurySense = () => {
  return (
    <div className="px-6 py-[110px] bg-[#e8e4df]">
      {/* First Row */}
      <div className="flex flex-col md:flex-row h-auto md:h-[305px] overflow-hidden mb-10">
        {/* Text Section */}
        <div className="w-full md:w-[50%] flex flex-col items-center md:items-end justify-center md:justify-end sm:justify-end  px-5 md:px-10 text-center md:text-right">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#2a3d3b] mb-3 font-editorial">
            Luxury in its <br /> truest sense
          </h1>
          {/* <p className="text-[#5c5c5c] leading-relaxed text-[14px] w-full 2xl:w-[30%] xl:w-[40%] lg:w-[50%] md:w-[70%]  font-editorial"> */}
          <p className="text-[#5c5c5c] leading-relaxed text-[14px] w-full   font-editorial">
            Meticulously crafted details. The finest natural <br/> materials. The
            abundance of nature in an urban <br/> jungle. An antidote to the
            mass-produced. With <br/> an uncompromising approach to design, The <br/>
            Oberoi's first and only residences are <br/> distinguished above all by
            their rarity.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-[50%] flex md:justify-start justify-center px-2.5">
          <img
            src={short_card_1} // Image imported
            alt="Luxury Interior"
            className="shadow-lg object-cover w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[300px] md:h-[300px]"
          />
        </div>
      </div>

      {/* Second Row - Reversed */}
      <div className="flex flex-col md:flex-row h-auto md:h-[305px] overflow-hidden">
        {/* Image Section */}
        <div className="w-full md:w-[50%] flex justify-center md:justify-end px-2.5">
          <img
            src={small_card_2} // Image imported
            alt="Luxury Interior"
            className="shadow-lg object-cover w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[300px] md:h-[300px]"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-[50%] flex flex-col items-center md:items-start justify-center md:justify-end px-5 md:px-10 text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#2a3d3b] mb-3 font-editorial">
            An exemplar of <br /> effortless living
          </h1>
          {/* <p className="text-[#5c5c5c] leading-relaxed text-[14px] w-full 2xl:w-[30%] xl:w-[40%] lg:w-[50%] md:w-[70%] font-editorial"> */}
          <p className="text-[#5c5c5c] leading-relaxed text-[14px] w-full  font-editorial">
          Cutting-edge home automation technology.   A <br/> dedicated concierge. Private facilities for work <br/> and play.  The connectedness of a like-minded <br/> community. And here, a stone’s throw from <br/> Lutyens’ Delhi, a thirty-minute airport transfer <br/>  connects you to the world. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default LuxurySense;
