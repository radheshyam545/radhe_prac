import React, { useEffect, useState } from "react";
import { amenitiesPDF, bg_image, footer_logo, Press_Residence_PDF, TheOberoiGroup_Footer_Logo } from "../../exportImages/export";
import AddressCard from "./AddressCard";

const DeskTopFooter = () => {

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
            className=" text-[#D1D5DB] h-[690px] w-full  bg-no-repeat "
            style={{
                backgroundImage: `url(${bg_image})`,
                backgroundPosition: "left -100px bottom -250px",
                backgroundSize: "70%"
            }}
        >
            <div className="h-[130px]">

            </div>
            <div className="flex h-[470px]">
                {/* Content */}
                <div className="flex pt-10  font-editorial w-[50%]">
                    {/* Left Column */}
                    <div className="flex">
                        {/* <div className="border-r border-gray-200 pr-12 h-full"></div> */}
                        <div className={`border-r border-gray-200 pr-12 h-full`}></div>
                        <div className="px-5  flex flex-col justify-between">
                            {/* Address Section */}
                            <div className="">
                                <h2 className="text-[25px] mb-7 truncate text-[#CCC9C2]">The address:</h2>
                            </div>
                            <div className="mt-auto">
                                <p className="text-[#CCC9C2] text-[16px]">9 Link Road,</p>
                                <p className="text-[#CCC9C2] mb-5">New Delhi 110014</p>
                                <p className="text-[#CCC9C2] hover:text-white mb-5">
                                    <a
                                        href="https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MhEIARAuGAoYDRivARjHARiABDIPCAIQLhgNGK8BGMcBGIAEMgkIAxAAGA0YgAQyCAgEEAAYDRgeMggIBRAAGA0YHjIICAYQABgNGB4yCAgHEAAYDRgeMggICBAAGA0YHtIBCDQ3NjRqMGo3qAIAsAIA&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KZm_dZwi4ww5MdUu8SUp3h0e&daddr=11,+Link+Rd,+Jangpura,+Block+P,+Jungpura+Extension,+New+Delhi,+Delhi+110014" target="_blank" rel="noopener noreferrer"

                                    >View on a map</a>
                                </p>
                                <p className="text-[#CCC9C2]">rejoice@biluxury.in</p>
                                <p className="text-[#CCC9C2]">+91 98383 10282</p>




                                <p className="text-sm text-[#CCC9C2] pt-10">RERA No: DLERA2020P0005</p>
                            </div>
                        </div>
                    </div>


                </div>


                <div className="  flex flex-col justify-between   items-end  px-4  text-white font-editorial pt-[40px]  w-[50%]">

                    <div className="flex  space-x-8 pr-10 text-[#CCC9C2]">
                        <p className="text-[25px] hover:text-gray-300 cursor-pointer">
                            <a href={amenitiesPDF} target="_blank" rel="noopener noreferrer">
                                Amenities
                            </a>

                        </p>
                        <p className="text-[25px] hover:text-gray-300 cursor-pointer">
                            <a
                                href={Press_Residence_PDF} target="_blank" rel="noopener noreferrer"
                            >
                                Press
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
                    {/* Right Column */}
                    <div className="pr-10  w-full flex justify-between">

                        <div className="flex items-end justify-end h-full  w-[58%] pl-10">
                            <img src={TheOberoiGroup_Footer_Logo} alt="" className="h-[60px] w-auto" />
                        </div>

                        <a href="https://bipgroup.com/" target="_blank" rel="noopener noreferrer">
                            <div className="w-[170px] h-[210px]  overflow-hidden">
                                <img
                                    src={footer_logo}
                                    alt=""
                                    //   className="absolute bottom-0 right-0 md:right-[54px] w-[150px] h-[150px]  md:w-[190px] md:h-[190px] object-contain"
                                    className="h-full w-auto object-cover"
                                />
                            </div>

                        </a>
                    </div>
                </div>



            </div>
            <div className="h-[90px] ">

            </div>
        </div>
    );
};

export default DeskTopFooter;
