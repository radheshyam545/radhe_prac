import React from "react";
import { amenitiesPDF, bg_image, footer_logo } from "../../exportImages/export";
import AddressCard from "./AddressCard";

const HalfWidthSection = () => {
  return (
    <div
      className="bg-[#0A1A2B] text-[#D1D5DB] h-[860px] w-full  bg-no-repeat "
      style={{
        backgroundImage: `url(${bg_image})`,
        backgroundPosition: "left -100px bottom -150px", // Adjusted position
        backgroundSize: "70%"
      }}
    >
      {/* Background Overlay */}
      {/* <div className="absolute inset-0 bg-[#0A1A2B] opacity-90"></div> */}
      <div className="">
        {/* Content */}
        <div className="relative  flex items-center justify-between h-[400px] flex-col md:flex-row md:items-end  px-4 md:px-12 text-white font-editorial py-[120px] md:py-10">
          {/* Left Side: Enquire with Line */}
          <div className="flex items-center space-x-4    md:mb-0">
            {/* Line */}
            {/* <div className="w-[1px] h-6 bg-gray-400"></div> */}
            {/* Text */}
            {/* <p className="text-[24px] hover:text-gray-300 cursor-pointer">
            Enquire
          </p> */}
          </div>

          {/* Right Side: Amenities, Press, Privacy */}
          <div className="flex space-x-8 pr-10 text-[#CCC9C2]">
            <p className="text-[25px] hover:text-gray-300 cursor-pointer">
              <a href={amenitiesPDF} target="_blank" rel="noopener noreferrer">
              Amenities
              </a>
              
            </p>
            <p className="text-[25px] hover:text-gray-300 cursor-pointer">
            <a href="https://tridentresidences.com/wp-content/uploads/2024/04/Trident-Residences.pdf" target="_blank" rel="noopener noreferrer">
                Brochure
              </a>
            </p>
            <p className="text-[25px] hover:text-gray-300 cursor-pointer">
              <a
                href="https://tridentresidences.com/wp-content/uploads/2024/04/Trident-Residences-Privacy-Policy.pdf" target="_blank" rel="noopener noreferrer"
              >
                Privacy
              </a>
            </p>
          </div>
        </div>

        {/* <AddressCard/>       */}
        <div className="flex h-[370px] relative pt-10  font-editorial">
          {/* Left Column */}
          <div className="w-[50%] flex relative">
            <div className="border-r border-gray-200 pr-12 h-full"></div>
            <div className="px-5  flex flex-col justify-between">
              {/* Address Section */}
              <div className=" ">
                <h2 className="text-[24px] font-semibold mb-7">The address</h2>
                <p className="text-gray-400 text-[16px]">9 Link Road,</p>
                <p className="text-gray-400 mb-5">New Delhi 110014</p>
                <p className="text-gray-400 hover:text-white mb-5">
                  <a
                    href="https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MhEIARAuGAoYDRivARjHARiABDIPCAIQLhgNGK8BGMcBGIAEMgkIAxAAGA0YgAQyCAgEEAAYDRgeMggIBRAAGA0YHjIICAYQABgNGB4yCAgHEAAYDRgeMggICBAAGA0YHtIBCDQ3NjRqMGo3qAIAsAIA&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KZm_dZwi4ww5MdUu8SUp3h0e&daddr=11,+Link+Rd,+Jangpura,+Block+P,+Jungpura+Extension,+New+Delhi,+Delhi+110014" target="_blank" rel="noopener noreferrer"

                  >View on a map</a>
                </p>
                <p className="text-gray-400">rejoice@biluxury.in</p>
                <p className="text-gray-400">+91 98383 10282</p>
              </div>

              {/* RERA Number */}
              <div className="mt-auto">
                <p className="text-sm text-gray-400">RERA No: DLERA2020P0005</p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-[50%] relative ">
          <a href="https://bipgroup.com/" target="_blank" rel="noopener noreferrer">
            <img
              src={footer_logo}
              alt=""
              className="absolute bottom-4 right-0 md:right-[54px] w-[150px] h-[150px]  md:w-[190px] md:h-[190px] object-contain"
            />
             </a>
          </div>
        </div>
        <div className="h-[90px]">

        </div>
      </div>
    </div>
  );
};

export default HalfWidthSection;
