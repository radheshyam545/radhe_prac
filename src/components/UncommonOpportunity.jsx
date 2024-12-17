import React, { useState, useEffect, useRef } from "react";

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
    <div className="flex flex-col items-center justify-center h-auto md:h-[600px] bg-[#f4f0eb] text-center px-6 py-10 md:px-16 md:py-16">
      <h1 className=" sm:text-[4rem] font-saveya text-[#2c3e50] tracking-wide leading-none  text-[60px] md:text-[110px]">
        An
      </h1>
      <h2 className="text-[3rem] sm:text-[4rem] md:text-[5rem] font-saveya text-[#2c3e50] tracking-wide leading-none">
        <span className="block md:inline">uncommon</span>
      </h2>
      <h2 className="text-[3rem] sm:text-[4rem] md:text-[5rem] font-saveya text-[#2c3e50] tracking-wide leading-none mb-4 md:mb-8">
        opportunity
      </h2>
      <div className="mt-4 md:mt-10">
        <h3
          className="text-lg sm:text-xl md:text-2xl font-semibold text-[#2c3e50] font-editorial cursor-pointer"
          onClick={handleEnquireClick}
        >
          Enquire
        </h3>
        <p className="text-sm sm:text-base md:text-lg text-[#4a4a4a] font-editorial">
          Express your interest in a private viewing.
        </p>
      </div>

      {/* Conditionally render the form */}
      {isFormVisible && (
        <div
          ref={formRef}
          className="mt-8 space-y-6 bg-white p-6 rounded shadow-lg max-w-md mx-auto relative"
        >
          {/* Close Button */}
          <button
            onClick={() => setIsFormVisible(false)}
            className="absolute top-2 right-2 text-2xl font-bold text-[#2c3e50] hover:text-red-600"
          >
            &times;
          </button>

          <form>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-[#2c3e50]"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#2c3e50] focus:border-[#2c3e50]"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#2c3e50]"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#2c3e50] focus:border-[#2c3e50]"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-[#2c3e50]"
              >
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#2c3e50] focus:border-[#2c3e50]"
              />
            </div>
            <div className="flex justify-center mt-4">
              <button
                type="submit"
                className="px-6 py-3 text-white bg-[#2c3e50] rounded-md shadow-md hover:bg-[#1a2b3d] transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default UncommonOpportunity;
