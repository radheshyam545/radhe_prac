import React from "react";
import { short_card_1, small_card_2 } from "../exportImages/export"; // Importing image

const LuxurySense = () => {
  return (
    <div className="px-6 my-[110px]">
      {/* First Row */}
      <div className="flex h-[305px] overflow-hidden mb-10">
        <div className="w-[50%]  flex flex-col items-end justify-end px-10 text-right">
          <h1 className="text-3xl md:text-4xl font-semibold text-[#2a3d3b] mb-3 font-editorial">
            Luxury in its <br /> truest sense
          </h1>
          <p className="text-[#5c5c5c] leading-relaxed text-[12px] w-full md:w-[50%] font-editorial">
            Meticulously crafted details. The finest natural materials. The
            abundance of nature in an urban jungle. An antidote to the
            mass-produced. With an uncompromising approach to design, The
            Oberoi's first and only residences are distinguished above all by
            their rarity.
          </p>
        </div>
        <div className="w-[50%]  px-2.5">
          <img
            src={short_card_1} // Image imported
            alt="Luxury Interior"
            className="shadow-lg object-cover h-40 w-40 md:h-[300px] md:w-[300px]"
          />
        </div>
      </div>

      {/* Second Row - Reversed */}
      <div className="flex h-[305px] overflow-hidden">
        <div className="w-[50%]  flex justify-end px-2.5">
          <img
            src={small_card_2} // Image imported
            alt="Luxury Interior"
            className="shadow-lg object-cover h-40 w-40 md:h-[300px] md:w-[300px]"
          />
        </div>
        <div className="w-[50%]  flex flex-col items-start justify-end px-10 text-left">
          <h1 className="text-3xl md:text-4xl font-semibold text-[#2a3d3b] mb-3 font-editorial">
          An exemplar of  <br /> effortless living 
          </h1>
          <p className="text-[#5c5c5c] leading-relaxed text-[12px] w-full md:w-[50%] font-editorial">
          A dedicated concierge. Private facilities for work and play. Limousine services and valet parking. The connectedness of a like-minded community. And here, a stone’s throw from Lutyens’ Delhi, a thirty-minute airport transfer connects you to the world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LuxurySense;
