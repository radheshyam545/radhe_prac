import React, { useState } from "react";
import { amenitiesPDF, main_logo } from "../exportImages/export";

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
      <div className="absolute top-5 left-5 flex items-center space-x-2">
        <div className="w-[70px] h-[70px]">
        <img src={main_logo} alt="Trident Logo" className="w-full h-auto object-cover" />
        </div>
        {/* <h1 className="text-xs uppercase tracking-wider text-[#8d5c36] font-semibold">
          Trident Residences
        </h1> */}
      </div>

      {/* Hamburger Menu */}
      <div className="absolute top-7 md:top-7 right-5" onClick={toggleSidebar}>
        <div className="space-y-2">
          <div className="w-[40px] h-[1px] bg-black"></div>
          <div className="w-[40px] h-[1px] bg-black"></div>
          <div className="w-[40px] h-[1px] bg-black"></div>
        </div>
      </div>


       {/* Sidebar */}
      <div className={`fixed right-0 top-10 w-[250px] h-full bg-white shadow-lg z-50 transition-transform transform ${isSidebarOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="p-5">
          <h2 className="font-bold text-lg">Menu</h2>
          <ul className="divide-y divide-gray-300">
            <li className="py-2 text-lg">
            <a href={amenitiesPDF} target="_blank" rel="noopener noreferrer">
                Amenities
              </a>
            </li>
            <li className="py-2 text-lg">
            <a href="https://tridentresidences.com/wp-content/uploads/2024/04/Trident-Residences.pdf" target="_blank" rel="noopener noreferrer">
                Brochure
              </a>
            </li>
            <li className="py-2 text-lg">
            <a href="https://tridentresidences.com/wp-content/uploads/2024/04/Trident-Residences-Privacy-Policy.pdf" target="_blank" rel="noopener noreferrer">
                Privacy
              </a>
            </li>
          </ul>
        </div>
      </div>  



      {/* Main Content */}
      <div className="text-center md:px-6 px-1  pt-[120px]">
        <h1 className="text-[60px] md:text-[110px] font-light leading-tight text-[#162933] font-saveya px-3">
          Let <br />
          <span className="">your legacy</span> <br />
          evolve.
        </h1>
        <p className="mt-8 text-sm md:text-[18px] text-[#666666] leading-relaxed max-w-[500px] mx-auto font-editorial px-2">
        When you bring together the best of both a luxury hotel and a home, in a habitat primed for self-expression, the feeling is liberating.
        </p>
        <p className="mt-4 text-sm md:text-[18px] text-[#666666] leading-relaxed max-w-[500px] mx-auto font-editorial px-2">
        Freed from the freneticism of modern metropolitan life, you're at once soothed by the beauty and simplicity of good design and energised by the possibilities of an unhindered lifestyle. 
        </p>
        <p className="mt-6 text-sm md:text-[18px] font-medium text-[#666666] font-editorial px-2">
          And so your next chapter begins...
        </p>
      </div>
    </div>
  );
};

export default LegacyComponent;
