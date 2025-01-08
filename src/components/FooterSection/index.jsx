import React, { useState, useEffect } from 'react';
import MobileFooter from './FooterSection';
import DeskTopFooter from './desktopFooter';

const FooterSection = () => {
  // State to track whether the screen is in mobile view
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    // Function to update state based on window size
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up function to remove event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {isMobile ? <MobileFooter /> : <DeskTopFooter />}
    </>
  );
};

export default FooterSection;
