import React from 'react';
import { third_banner } from '../../exportImages/export';

const CustomImageComponent = () => {
  return (
    <div>
      {/* Desktop View - Parallax effect */}
      <div
        className="hidden md:block md:h-[500px] w-full bg-center bg-no-repeat 
                   md:bg-cover md:bg-fixed " // Zoom-out for desktop
        style={{ backgroundImage: `url(${third_banner})`,objectFit:"fill" }}
      ></div>

      {/* Mobile View - Normal Image */}
      <div className="block md:hidden">
        <img src={third_banner} alt="Banner" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default CustomImageComponent;
