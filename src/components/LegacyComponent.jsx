import React, { useState } from "react";
import { amenitiesPDF, main_logo } from "../exportImages/export";
import { RxCross1 } from 'react-icons/rx';  // Import RxCross1 icon
// import amenitiesPDF from "../assets/TRIDENT_RESIDENCES_Amenities_page.pdf"

const LegacyComponent = () => {


  // State to toggle the sidebar
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Function to toggle sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };


  return (
    <div className="relative w-full  min-h-screen  overflow-hidden flex flex-col justify-center items-center  pb-20 ">
      {/* bg-[#e8e4df] */}
      {/* Logo Section */}
      <div className="absolute top-5  md:top-10 left-5  md:left-10 flex items-center space-x-2">
        <div className="w-[70px] md:w-[80px] h-[70px] md:h-[80px]">
        <img src={main_logo} alt="Trident Logo" className="w-full h-auto object-cover" />
        </div>
        {/* <h1 className="text-xs uppercase tracking-wider text-[#8d5c36] font-semibold">
          Trident Residences
        </h1> */}
      </div>

      {/* Hamburger Menu */}
      <div className={`absolute cursor-pointer top-7 md:${isSidebarOpen ? "top-[40px]" : "top-10"} right-5 md:right-10`} onClick={toggleSidebar}>
      {isSidebarOpen ? (
        <RxCross1 className="text-[29px] " />  // Ensure the cross icon is visible above the sidebar
    ) : (
        <div className="space-y-2"> 
            <div className="w-[40px] h-[1px] bg-black"></div>
            <div className="w-[40px] h-[1px] bg-black"></div>
            <div className="w-[40px] h-[1px] bg-black"></div>
        </div>
    )}
      </div>


       {/* Sidebar */}
      <div className={`fixed font-editorial right-0 top-[65px] w-[250px] h-full bg-white shadow-lg z-50 transition-transform transform ${isSidebarOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="p-5">
          <h2 className="font-bold text-sm md:text-[18px] leading-[24px]">Menu</h2>
          <ul className="divide-y divide-gray-300 text-sm md:text-[18px] text-[#142A33]">
            <li className="py-2">
            <a href={amenitiesPDF} target="_blank" rel="noopener noreferrer">
                Amenities
              </a>
            </li>
            <li className="py-2">
            <a href="#" rel="noopener noreferrer">
                Press
              </a>
            </li>
            <li className="py-2">
            <a href="https://tridentresidences.com/wp-content/uploads/2024/04/Trident-Residences-Privacy-Policy.pdf" target="_blank" rel="noopener noreferrer">
                Privacy
              </a>
            </li>
          </ul>
        </div>
      </div>  



      {/* Main Content */}
      <div className="text-center md:px-6 px-1  pt-[120px]">
        <h1 className="text-[50px] md:text-[110px] font-light leading-tight text-[#162933] font-saveya px-3">
          Let <br />
          <span className="">your legacy</span> <br />
          evolve.
        </h1>
        <p className="mt-8 text-sm md:text-[18px] text-[#142A33] leading-relaxed max-w-[500px] mx-auto font-editorial px-5">
        When you bring together the best of both a luxury hotel and a home, in a habitat primed for self-expression, the feeling is liberating.
        </p>
        <p className="mt-4 text-sm md:text-[18px] text-[#142A33] leading-relaxed max-w-[500px] mx-auto font-editorial px-5">
        Freed from the freneticism of modern metropolitan life, you're at once soothed by the beauty and simplicity of good design and energised by the possibilities of an unhindered lifestyle. 
        </p>
        <p className="mt-6 text-sm md:text-[18px] font-medium text-[#142A33] font-editorial px-5">
          And so your next chapter begins...
        </p>
      </div>
    </div>
  );
};

export default LegacyComponent;
