import React from "react";

// import data
import { heroproduct } from "../data";

// import components
import Stats from "./Stats";

const Hero = () => {
  const { title, subtitle, buttonText } = heroproduct;
  return (
    <section className="h-full max-h-[850px] w-full bg-heroservice bg-center lg:bg-center bg-cover bg-no-repeat text-white pt-[225px] pb-[254px] relative mb-12 lg:mb-28">
      <div className="container mx-auto text-center">
        {/* title */}
        <h1 className="text-2xl lg:text-[64px] lg:leading-tight lg:max-w-[888px] mx-auto font-semibold mb-[30px]">
          {title}
        </h1>
        {/* subtitle */}
        <h2 className="mb-[30px] lg:mb-[65px] max-w-[627px] mx-auto lg:text-xl">
          {subtitle}
        </h2>
        {/* button */}
        <div className="px-[35px] lg:px-[80px] py-[9px] lg:py-[16px] mb-[160px] lg:mb-[194px] text-xl rounded-md bg-[rgba(0,0,0,0)] hover:bg-[rgba(0,0,0,0)] ">
          {buttonText}
        </div>
        {/* stats */}
        <div className="-top-[70px] relative">
          <Stats />
        </div>
      </div>
    </section>
  );
};

export default Hero;
