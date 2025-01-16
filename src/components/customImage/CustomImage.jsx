import React from 'react';
import { third_banner } from '../../exportImages/export';

const CustomImageComponent = () => {
  return (
    // <div>
    //   <div style={{
    //       // Using inline styles to create the parallax effect
    //       backgroundAttachment: 'fixed',
    //       backgroundPosition: 'center',
    //       backgroundRepeat: 'no-repeat',
    //       backgroundImage: `url(${third_banner})`,
    //       height: '500px',
    //       width: '100%',
    //       backgroundSize: 'cover'
    //     }}>
    //   </div>
    // </div>

    <div>
    {/* Parallax effect for desktop, static image for mobile */}
    <div
      className="h-[500px] w-full bg-cover bg-center bg-no-repeat 
                 md:bg-fixed"
      style={{ backgroundImage: `url(${third_banner})` }}
    ></div>
  </div>
  );
};

export default CustomImageComponent;
