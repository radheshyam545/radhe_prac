import React from "react";

const TranscendCity = () => {
  return (
    <div className="min-h-screen bg-[#0F1C23] text-gray-200 flex items-center justify-center">
      <div className="text-center mx-4">
        {/* Main Heading */}
        <h1 className="text-6xl md:text-8xl font-light text-gray-300 leading-tight tracking-wide font-saveya">
          Transcend
        </h1>
        {/* Sub-heading */}
        <h2 className="text-5xl md:text-7xl font-light italic mt-2 text-gray-300 leading-snug font-saveya">
          the city
        </h2>

        {/* Description with max-width */}
        <div className="mx-auto max-w-lg ">
          <p className="mt-[50px] text-sm md:text-base leading-relaxed tracking-wide text-gray-400 font-editorial">
            V-shaped pilots elevate the residences above a beautifully landscaped pedestrian realm, with an expansive Sky Lounge poised above the metropolis below. Here, as night falls, the lights of the Jawaharlal Nehru Stadium shimmer before you, the evening air a heady aperitif before dinner.
          </p>
          {/* Bottom Text */}
        <p className="mt-8 text-sm md:text-base font-light text-gray-400 font-editorial">
          Just beyond lie the timeless icons of the national capital. This is your vantage point. This is your domain.
        </p>
        </div>

        
      </div>
    </div>
  );
};

export default TranscendCity;
