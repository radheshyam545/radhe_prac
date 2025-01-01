import React, { useState, useEffect, useRef } from "react";
import EnquiryForm from "./Enquiry/Enquiry";

const UncommonOpportunity = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  // Ref for the form container
  const formRef = useRef(null);

  // Function to toggle the form visibility
  const handleEnquireClick = () => {
    setIsFormVisible(!isFormVisible);
  };

  // Function to close the form if clicked outside
  const handleClickOutside = (e) => {
    if (formRef.current && !formRef.current.contains(e.target)) {
      setIsFormVisible(false);
    }
  };

  // Adding event listener to close the form when clicking outside
  useEffect(() => {
    if (isFormVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isFormVisible]);

  return (
    <>
    <div 
    className="flex flex-col items-center justify-center min-h-screen h-auto md:h-[600px]  text-center px-6 py-10 md:px-16 md:py-16"
    // className="flex flex-col items-center justify-center min-h-screen h-auto md:h-[600px] bg-[#f4f0eb] text-center px-6 py-10 md:px-16 md:py-16"
    
    >
      <h1 
      className=" sm:text-[4rem] font-saveya text-[#162933]  leading-none  text-[60px] md:text-[110px] font-light"
      data-aos="fade-down"
      >

        {/* Make your  */}
        Make your
         {/* <br/>
        <span>smartest</span> <br/>
        move */}



      </h1>
      <h1 className="text-[60px] sm:text-[4rem] md:text-[110px] font-saveya text-[#162933] tracking-wide leading-none mt-[6px] md:mt-[18px] font-light mr-2.5"
      data-aos="fade-down"
      >
        <span className="block md:inline">smartest</span>
      </h1>
      <h1 className="text-[60px] sm:text-[4rem] md:text-[110px] font-saveya text-[#162933] tracking-wide leading-none mb-4 md:mb-8 mt-[6px]  md:mt-[13px] font-light"
      data-aos="fade-down"
      >
        move
      </h1>

      <div className="mt-4 md:mt-10" 
        data-aos="fade-down"
      >
        <h3
          className="font-editorial cursor-pointer text-[#142A33] text-sm md:text-[18px]"
          onClick={handleEnquireClick}
        >
          Enquire
        </h3>
        <p className="text-[#142A33]  leading-relaxed font-editorial  text-sm md:text-[18px] ">
          Express your interest in a private viewing.
        </p>
      </div>

      
    </div>
    
     {/* Conditionally render the EnquiryForm */}
     {isFormVisible && <EnquiryForm />}

    </>
  );
};

export default UncommonOpportunity;
