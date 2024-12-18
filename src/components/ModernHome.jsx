import React from "react";
import { second_banner, small_banner } from "../exportImages/export";





const ModernHome = () => {

  

  return (
    <div className="bg-[#e8e4df] relative h-[1000px]">
      {/* Top Image with Parallax Effect */}
      <div
        className="relative w-full h-[400px] md:h-[500px] overflow-hidden"
        style={{
          backgroundImage: `url(${second_banner})`,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        {/* Image tag removed since the background is now controlled via CSS for parallax effect */}
      </div>

      {/* Content Section */}
      <div className="relative flex flex-col md:flex-row h-auto md:h-[400px] border items-start">
        {/* Text Section */}
        <div 
        className="w-full md:w-[50%] z-20 text-left md:text-right flex flex-col justify-end items-start md:items-end px-5  py-5 md:py-0 h-auto md:h-[330px] "
        data-aos="fade-down"
        >
         
          <h2 className="text-2xl md:text-[36px] font-light text-[#28303b] leading-tight max-w-[420px] font-editorial">
            The apogee of the modern metropolitan home
          </h2>
          <p 
          className="mt-4 text-sm md:text-base text-[#6a7579] leading-relaxed  font-editorial"
          // className="mt-4 text-sm md:text-base text-[#6a7579] leading-relaxed max-w-[300px] font-editorial"
          
          >
            Welcome to a one-of-a-kind collection of just <br className="hidden md:inline"/> nineteen elegantly
            designed apartments at the <br className="hidden md:inline"/> heart of New Delhi, combining the
            comforts of a <br className="hidden md:inline"/> luxury home with the privileges of instant access to <br className="hidden md:inline"/>
            world-class hotel services, in partnership with The <br className="hidden md:inline"/> The Oberoi Group.

          
          </p>
        </div>

        {/* Second Column with Image */}
        <div className="w-full md:w-[50%] relative md:border-l border-red-600 px-1 flex justify-center md:justify-start">
          {/* Bottom Image (Absolutely Positioned) */}
          <div className="absolute top-0 left-[20px] md:left-[5%] w-full max-w-[320px] md:w-[360px] h-[300px] md:h-[390px] z-10 md:top-[-40px]">
            <img
              src={small_banner}
              alt="Modern Apartment Interior"
              className="w-full h-full object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernHome;
