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
        <h1 className="text-center uppercase text-cyan-400 text-[40px] font-normal leading-[56px] tracking-wide">
          Space X Mission
        </h1>
        <div className="text-cente max-w-3xl text-center  text-white text-xl font-normal leading-10">
          This state-of-the-art vehicle was designed to carry both crew and
          cargo to destinations beyond Earth's orbit. SpaceX collaborated with
          NASA to ensure the mission's success, leveraging their expertise and
          resources. Finally, after years of preparation, SpaceX launched the
          Starship into space, propelling it towards the moon. The mission
          marked a significant milestone in space exploration, as SpaceX became
          the first private company to send humans to the moon.
        </div>
      </div>
    </section>
  );
};

export default About;
