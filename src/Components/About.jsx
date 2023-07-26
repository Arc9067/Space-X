import React from "react";
import sky from "../assets/sky.svg";

const About = () => {
  return (
    <section className="pt-36 pb-14 w-full overflow-hidden relative" id="about">
      {" "}
      {/* <img
        src={sky}
        alt=""
        className="absolute hidden lg:block h-full w-full object-cover opacity-20"
      /> */}
      <div className="container gap-10 relative z-10 flex justify-center items-center flex-col">
        <h1 className="text-center text-cyan-400 text-[40px] font-normal leading-[56px] tracking-wide">
          THE BEST PLATFORM
        </h1>
        <div className="text-cente max-w-3xl text-center  text-white text-xl font-normal leading-10">
          Pepe and Toad the memecoin Launched on the ethereum. Our mission is to
          provide a fun, community-driven investment opportunity that celebrates
          the power of memes and pop culture. With a vision to become the
          leading memecoin in the market, we believe Pepe and Toad is the
          perfect addition to any investor’s portfolio. Join us on this journey
          to revolutionize the world of memecoins.{" "}
        </div>
      </div>
    </section>
  );
};

export default About;
