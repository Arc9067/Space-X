import React from "react";
import space from "../assets/space.svg";
import sky from "../assets/sky.svg";

const Hero = () => {
  return (
    <section className=" w-full  lg:border-b border-slate-200 relative">
      <img
        src={sky}
        alt=""
        className="absolute hidden w-full lg:block h-full object-cover opacity-20"
      />
      <div className="container  w-full relative z-10">
        <div className="h-full px-10 py-20 lg:py-36 gap-20 lg:border-l border-slate-200 w-full grid grid-cols-1 lg:grid-cols-2 justify-center items-center">
          <h1 className="text-cyan-400 uppercase text-5xl md:text-8xl text-center lg:text-start font-normal ">
            Operation Mission Moon
          </h1>
          <img src={space} alt="" className="relative -top-14" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
