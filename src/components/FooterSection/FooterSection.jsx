import React, { useEffect, useState } from "react";
import { amenitiesPDF, bg_image, footer_logo } from "../../exportImages/export";
import AddressCard from "./AddressCard";

const MobileFooter = () => {

  const [bgStyle, setBgStyle] = useState({
    backgroundImage: `url(${bg_image})`,
    backgroundPosition: "left -100px bottom -150px",
    backgroundSize: "70%"
  });


  useEffect(() => {
    const updateBackgroundStyle = () => {
      if (window.innerWidth < 768) { // Adjust values and breakpoints as needed
        setBgStyle({
          backgroundImage: `url(${bg_image})`,
          // backgroundPosition: "center center", // Example for mobile devices
          backgroundPosition: "left -70px bottom",
          // backgroundSize: "cover"
          backgroundSize: "100%"

        });
      } else {
        setBgStyle({
          backgroundImage: `url(${bg_image})`,
          backgroundPosition: "left -100px bottom -150px",
          backgroundSize: "70%"
        });
      }
    };

    window.addEventListener("resize", updateBackgroundStyle);
    updateBackgroundStyle(); // Initial call to set the background

    return () => {
      window.removeEventListener("resize", updateBackgroundStyle);
    };
  }, []);


  return (
    <div
      className=" text-[#D1D5DB] h-[560px] w-full  bg-no-repeat "
      
      style={{
        backgroundImage: `url(${bg_image})`,
          backgroundPosition: "left -70px bottom",
          backgroundSize: "100%"
      }}
    >
      <div className="">
        {/* Content */}
        <div className="relative  flex items-center justify-between h-[100px] px-4 text-white font-editorial w-full ">

          <div className="flex  justify-between text-[#CCC9C2] w-full pr-4">
            <p className="text-[25px] hover:text-gray-300 cursor-pointer">
              <a href={amenitiesPDF} target="_blank" rel="noopener noreferrer">
              Amenities
              </a>
              
            </p>
            <p className="text-[25px] hover:text-gray-300 cursor-pointer">
            <span>
                Press
              </span>
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
        <div className="flex h-[370px] relative pt-5  font-editorial">
          {/* Left Column */}
          <div className="w-[50%] flex relative">
            <div className="px-5  flex flex-col justify-between">
              {/* Address Section */}
              <div className="">
                <h2 className="text-[25px]  mb-7 truncate text-[#CCC9C2]">The address :</h2>
                <p className="text-[#CCC9C2] text-[16px]">9 Link Road,</p>
                <p className="text-[#CCC9C2] mb-5">New Delhi 110014</p>
                <p className="text-[#CCC9C2] hover:text-white mb-5">
                  <a
                    href="https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MhEIARAuGAoYDRivARjHARiABDIPCAIQLhgNGK8BGMcBGIAEMgkIAxAAGA0YgAQyCAgEEAAYDRgeMggIBRAAGA0YHjIICAYQABgNGB4yCAgHEAAYDRgeMggICBAAGA0YHtIBCDQ3NjRqMGo3qAIAsAIA&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KZm_dZwi4ww5MdUu8SUp3h0e&daddr=11,+Link+Rd,+Jangpura,+Block+P,+Jungpura+Extension,+New+Delhi,+Delhi+110014" target="_blank" rel="noopener noreferrer"

                  >View on a map</a>
                </p>
                <p className="text-[#CCC9C2]">rejoice@biluxury.in</p>
                <p className="text-[#CCC9C2]">+91 98383 10282</p>
              </div>

              {/* RERA Number */}
              <div className="mt-auto">
                <p className="text-sm text-[#CCC9C2]">RERA No: DLERA2020P0005</p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-[50%] relative ">
          <a href="https://bipgroup.com/" target="_blank" rel="noopener noreferrer">
            <img
              src={footer_logo}
              alt=""
              className="absolute bottom-0 right-0 md:right-[54px] w-[150px] h-[150px]  md:w-[190px] md:h-[190px] object-contain"
            />
             </a>
          </div>
        </div>
        <div className="h-[90px] ">
        </div>
      </div>
    </div>
  );
};

export default MobileFooter;
