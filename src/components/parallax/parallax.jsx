import { useEffect } from "react";

function ParallaxEffect() {
  useEffect(() => {
    const parallaxElements = document.querySelectorAll(".parallax");

    window.addEventListener("scroll", () => {
      let scrollPosition = window.scrollY;

      parallaxElements.forEach((element) => {
        const speed = element.getAttribute("data-speed");
        const offset = scrollPosition * speed;
        element.style.transform = `translateY(${offset}px)`;
      });
    });
  }, []);

  return (
    <div>
      {/* Parallax Section 1 */}
      <div className="relative h-screen overflow-hidden">
        <div
          className="parallax absolute top-0 left-0 w-full h-full bg-blue-500 flex justify-center items-center text-white text-3xl"
          data-speed="0.5"
        >
          <h2>Parallax Section 1</h2>
        </div>
      </div>

      {/* Main Content */}
      <div className="h-[2000px] p-12 bg-gray-100 text-center">
        <h1 className="text-4xl mb-4">Main Content Goes Here</h1>
        <p className="text-xl">Scroll to see the parallax effect in action.</p>
      </div>

      {/* Parallax Section 2 */}
      <div className="relative h-screen overflow-hidden">
        <div
          className="parallax absolute top-0 left-0 w-full h-full bg-green-500 flex justify-center items-center text-white text-3xl"
          data-speed="0.3"
        >
          <h2>Parallax Section 2</h2>
        </div>
      </div>
    </div>
  );
}

export default ParallaxEffect;
