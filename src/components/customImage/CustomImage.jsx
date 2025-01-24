import React from 'react';
import { third_banner } from '../../exportImages/export';

const CustomImageComponent = () => {
  return (
    <div>
      {/* Desktop View - Parallax effect */}
      <div
         className="hidden md:block w-full h-[500px]  bg-center bg-no-repeat bg-fixed"
         style={{
           backgroundImage: `url(${third_banner})`,
           backgroundSize: '100% 100%',  // Stretches image to cover the full width and height
           backgroundPosition: 'center', // Centers the image
           backgroundRepeat: 'no-repeat', // Avoids tiling
         }}
      ></div>

      {/* Mobile View - Normal Image */}
      <div className="block md:hidden">
        <img src={third_banner} alt="Banner" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default CustomImageComponent;
