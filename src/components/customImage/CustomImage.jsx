import React from 'react';
import { third_banner } from '../../exportImages/export';

const CustomImageComponent = () => {
  return (
    <div>
      <div style={{
          // Using inline styles to create the parallax effect
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundImage: `url(${third_banner})`,
          height: '500px',
          width: '100%',
          backgroundSize: 'cover'
        }}>
      </div>
    </div>
  );
};

export default CustomImageComponent;
