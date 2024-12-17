import React from "react";
import { main_logo } from "../exportImages/export";

const LegacyComponent = () => {
  return (
    <div className="relative w-full  min-h-screen overflow-hidden flex flex-col justify-center items-center bg-[#e8e4df]">
      {/* Logo Section */}
      <div className="absolute top-5 left-5 flex items-center space-x-2">
        <img src={main_logo} alt="Trident Logo" className="w-[60px] h-[48px] object-cover" />
        {/* <h1 className="text-xs uppercase tracking-wider text-[#8d5c36] font-semibold">
          Trident Residences
        </h1> */}
      </div>

      {/* Hamburger Menu */}
      <div className="absolute top-5 right-5">
        <div className="space-y-1">
          <div className="w-[40px] h-[1px] bg-black"></div>
          <div className="w-[40px] h-[1px] bg-black"></div>
          <div className="w-[40px] h-[1px] bg-black"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="text-center px-6 pt-[120px]">
        <h1 className="text-[60px] md:text-[110px] font-light leading-tight text-[#142933] font-saveya">
          Let <br />
          <span className="">your legacy</span> <br />
          evolve.
        </h1>
        <p className="mt-8 text-sm md:text-base text-[#666666] leading-relaxed max-w-[500px] mx-auto font-editorial">
          When you bring together the best of both hotel and home, in a place
          primed for self-expression and enhanced by the luxury of convenience,
          the feeling is liberating.
        </p>
        <p className="mt-4 text-sm md:text-base text-[#666666] leading-relaxed max-w-[500px] mx-auto font-editorial">
          Freed from the freneticism of modern metropolitan life, you’re at once
          soothed by the beauty of good design and energized by an unhindered
          lifestyle.
        </p>
        <p className="mt-6 text-sm md:text-base font-medium text-[#666666] font-editorial">
          And so your next chapter begins...
        </p>
      </div>
    </div>
  );
};

export default LegacyComponent;
