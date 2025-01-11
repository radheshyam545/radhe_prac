import React from "react";
import { luxury_cad_image_2, luxury_card_image_1, short_card_1, small_card_2 } from "../exportImages/export"; // Importing image

const LuxurySense = () => {
  return (
    <div className="md:px-6 md:py-[110px] py-[30px] bg-[#e8e4df]">
      {/* First Row */}
      <div className="flex flex-col md:flex-row h-auto md:h-[390px] overflow-hidden md:mb-[50px] mb-2 ">
        {/* Text Section */}
        <div 
        className="w-full md:w-[50%] flex flex-col items-start md:items-end justify-center md:justify-end sm:justify-end  px-5 md:px-5 text-left md:text-right "
        data-aos="fade-right"
        >
          
          <h1 className="text-[24px] sm:text-3xl md:text-[36px] font-light text-[#28303b] md:mb-3  font-editorial leading-tight">
            Luxury in its <br className="hidden md:inline"/> truest sense
          </h1>
          {/* <p className="text-[#5c5c5c] leading-relaxed text-[14px] w-full 2xl:w-[30%] xl:w-[40%] lg:w-[50%] md:w-[70%]  font-editorial"> */}
          <p className="mt-[24px] text-[#142A33] leading-relaxed text-[16px] md:text-[18px] w-full   font-editorial">
            Meticulously crafted details. The finest natural <br className="hidden md:inline"/> materials. The
            abundance of nature in an urban <br className="hidden md:inline"/> jungle. An antidote to the
            mass-produced. With an<br className="hidden md:inline"/>  uncompromising approach to design, The Oberoi<br className="hidden md:inline"/>
             Group’s first and only residences are distinguished<br className="hidden md:inline"/>  above all by
            their rarity.
          </p>
        </div>

        {/* Image Section */}
        <div 
        className="w-full md:w-[50%] flex justify-start   md:px-2.5 px-5 py-3 md:py-0"
        data-aos="fade-left"
        >
          
          <img
            src={luxury_card_image_1} // Image imported
            alt="Luxury Interior"
            className="object-cover w-full  sm:w-[220px] md:w-[360px] h-[300px] md:h-[390px]   max-w-[385px]"
            // className=" object-cover w-full h-[180px] sm:w-[220px] sm:h-[220px] md:w-[340px] md:h-[300px]"
            // className="zoom-image object-cover w-full h-[180px] sm:w-[220px] sm:h-[220px] md:w-[340px] md:h-[300px]"
            // className="shadow-lg object-cover w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[300px] md:h-[300px]"
          />
        </div>
      </div>

      {/* Second Row - Reversed */}
      <div className="flex flex-col md:flex-row h-auto md:h-[390px] overflow-hidden">
        {/* Image Section */}
  
        <div 
        className="w-full md:w-[50%] flex justify-start md:justify-end md:px-5 px-5 py-3 md:py-0"
        data-aos="fade-left"
        >
          <img
            src={luxury_cad_image_2} // Image imported
            alt="Luxury Interior"
            className="object-cover w-full h-[300px] md:h-[390px] sm:w-[220px]  md:w-[360px] max-w-[385px]"
            // className="object-cover w-full h-[180px] sm:w-[220px] sm:h-[220px] md:w-[340px] md:h-[300px]"
            // className="zoom-image  object-cover w-full h-[180px] sm:w-[220px] sm:h-[220px] md:w-[340px] md:h-[300px]"
            // className="shadow-lg object-cover w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[300px] md:h-[300px]"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-[50%] flex flex-col items-start md:items-start justify-center md:justify-end px-5 py-3 md:py-0  md:px-2.5 text-left md:text-left"
        
        data-aos="fade-right"

        // className="w-full md:w-[50%] flex justify-start  md:px-2.5 px-5 py-2 md:py-0"


        >
          <h1 className="text-2xl sm:text-3xl md:text-[36px] font-light text-[#28303b] md:mb-3 font-editorial leading-tight">
            An exemplar of <br className="hidden md:inline"/> effortless living
          </h1>
          {/* <p className="text-[#5c5c5c] leading-relaxed text-[14px] w-full 2xl:w-[30%] xl:w-[40%] lg:w-[50%] md:w-[70%] font-editorial"> */}
          <p className="mt-[24px] text-[#142A33] leading-relaxed text-[16px]  md:text-[18px] w-full  font-editorial">
          {/* Cutting-edge home automation technology.   A */}
           {/* <br className="hidden md:inline"/> */}
           
           A dedicated concierge. Private facilities for work <br className="hidden md:inline"/> and play. Limousine services and valet parking. <br className="hidden md:inline"/> The connectedness of a like-minded community.<br className="hidden md:inline"/> And here, a stone’s throw from Lutyens’ Delhi, a<br className="hidden md:inline"/>  thirty-minute airport transfer connects you to<br className="hidden md:inline"/>   the world. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default LuxurySense;
