import React from "react";

const UncommonOpportunity = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[500px]  bg-[#f4f0eb] text-center">
      <h1 className="text-[4rem] md:text-[5rem] font-saveya text-[#2c3e50] tracking-wide leading-none ">
        An
      </h1>
      <h2 className="text-[4rem] md:text-[5rem] font-saveya text-[#2c3e50] tracking-wide leading-none">
        <span className="block md:inline">uncommon</span>
      </h2>
      <h2 className="text-[4rem] md:text-[5rem] font-saveya text-[#2c3e50] tracking-wide leading-none mb-8">
        opportunity
      </h2>
      <div className="mt-2">
        <h3 className="text-lg font-semibold text-[#2c3e50] font-editorial">Enquire</h3>
        <p className="text-sm text-[#4a4a4a] font-editorial">
          Express your interest in a private viewing.
        </p>
      </div>
    </div>
  );
};

export default UncommonOpportunity;
