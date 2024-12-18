// import { ParallaxProvider } from "react-scroll-parallax";
// import ParallaxEffect from "./components/parallax/parallax";
import HomePage from "./home";
// Ensure you import AOS and initialize it
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";


export default function App() {

  // Initialize AOS
  React.useEffect(() => {
    AOS.init();
  }, []);



  return (
    <>
    {/* <ParallaxProvider> */}
    <HomePage/> 
    {/* </ParallaxProvider> */}
    {/* <ParallaxEffect/> */}
    {/* <div className="font-saveya text-lg">
  This text uses the Saveya font.
</div>
<div className="font-editorial text-lg">
  This text uses the Editorial font.
</div> */}

    </>
  )
}
