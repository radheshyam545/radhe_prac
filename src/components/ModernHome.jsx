import React, { useEffect } from "react";
import { second_banner, small_banner } from "../exportImages/export";

const ModernHome = () => {
  // Function to handle the scroll event and apply the parallax effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Adjust the background position based on scroll position
      const parallaxElement = document.querySelector(".parallax-image");
      if (parallaxElement) {
        // Apply parallax by translating the image
        parallaxElement.style.transform = `translateY(${scrollPosition * 0.3}px)`; // Change speed here
      }
    };

    window.addEventListener("scroll", handleScroll);  

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-[#e8e4df] relative h-[1000px]">
      {/* Top Image with Parallax Effect */}
      <div
       className="relative w-full h-[400px] md:h-[500px] overflow-hidden "
      //  className="relative w-full h-[400px] md:h-[500px] overflow-hidden bg-cover bg-no-repeat bg-center"
      //  style={{backgroundImage:`url(${second_banner})`}}
      >
        <img
          src={second_banner}
          alt="Modern Home Top"
          className=" w-full h-full object-cover transition-transform duration-300"
          style={{ overflow:"hidden"}}
        />
          {/* <div id="">
          </div> */}  

      </div>

      {/* Content Section */}
      <div className="relative flex flex-col md:flex-row h-auto md:h-[400px] border items-center md:items-start">
        {/* Text Section */}
        <div className="w-full md:w-[50%] z-20 text-center md:text-right flex flex-col justify-end items-center md:items-end px-5 py-5 md:py-0 h-auto md:h-[330px] ">
          <h2 className="text-2xl md:text-[36px] font-light text-[#28303b] leading-tight max-w-[420px] font-editorial">
            The apogee of the modern metropolitan home
          </h2>
          <p className="mt-4 text-sm md:text-base text-[#6a7579] leading-relaxed max-w-[300px] font-editorial">
            Welcome to a one-of-a-kind collection of just <br/> nineteen elegantly
            designed apartments at the <br/> heart of New Delhi, combining the
            comforts of a <br/> luxury home with the privileges of instant access to <br/>
            world-class hotel services, in partnership with The <br/> Oberoi, New
            Delhi.
          </p>
        </div>

        {/* Second Column with Image */}
        <div className="w-full md:w-[50%] relative md:border-l border-red-600 px-1 flex justify-center md:justify-start">
          {/* Bottom Image (Absolutely Positioned) */}
          <div className="absolute top-0  md:left-[5%] w-[280px] md:w-[360px] h-[300px] md:h-[390px] z-10 md:top-[-40px]">
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
