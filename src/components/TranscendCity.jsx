import React, { useEffect, useRef, useState } from "react";

const TranscendCity = () => {
  // Create a reference for the elements that need the fade-in effect
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  const textRef3 = useRef(null);

  // Set state to track if the elements are in view
  const [inView1, setInView1] = useState(false);
  const [inView2, setInView2] = useState(false);
  const [inView3, setInView3] = useState(false);

  // Create an intersection observer
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1, // Trigger animation when 10% of the element is visible
    };

    const observer1 = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView1(true);
        }
      },
      options
    );
    const observer2 = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView2(true);
        }
      },
      options
    );
    const observer3 = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView3(true);
        }
      },
      options
    );

    // Observe the elements
    if (textRef1.current) observer1.observe(textRef1.current);
    if (textRef2.current) observer2.observe(textRef2.current);
    if (textRef3.current) observer3.observe(textRef3.current);

    return () => {
      // Clean up observers on component unmount
      if (textRef1.current) observer1.disconnect();
      if (textRef2.current) observer2.disconnect();
      if (textRef3.current) observer3.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen  text-[#CCC9C2] flex items-center justify-center">
    {/* <div className="min-h-screen bg-[#0F1C23] text-[#CCC9C2] flex items-center justify-center"> */}
      <div className="text-center mx-4 py-0 md:py-[70px]">
        {/* Main Heading with fade-in effect */}
        <h1
          // ref={textRef1}
          className={`text-[60px] md:text-[110px] font-light text-[#CCC9C2] leading-tight tracking-wide font-saveya  px-2`}
          data-aos="fade-down"
       >
          Transcend
        </h1>

        {/* Sub-heading with fade-in effect */}
        <h2
          // ref={textRef2}
            data-aos="fade-down"
          className={`text-[60px] md:text-[110px] font-light mt-2 text-[#CCC9C2] leading-snug font-saveya  transition-all duration-1000 ease-out`}
        >
          the city
        </h2>

        {/* Description with fade-in effect */}
        <div className="mx-auto max-w-[490px] text-center">
          <p
            // ref={textRef3}
              data-aos="fade-down"
            className={`mt-[50px] text-sm md:text-[18px] leading-relaxed tracking-wide text-[#CCC9C2] font-editorial px-2 md:px-0 transition-all duration-1000 ease-out`}
          >
            V-shaped pilotis elevate the residences above a beautifully landscaped pedestrian realm, with an expansive Sky Lounge poised above the metropolis below. Here, as night falls, the lights of the Jawaharlal Nehru Stadium shimmer before you, the evening air a heady aperitif before dinner.
          </p>

          {/* Bottom Text with fade-in effect */}
          <p
          data-aos="fade-down"
            className={`mt-8 text-sm md:text-[18px] md:px-0 font-light text-[#CCC9C2] font-editorial px-2 transition-all duration-1000 ease-out`}
          >
            Just beyond lie the timeless icons of the national capital. This is
            your vantage <br /> point. This is your domain.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TranscendCity;
