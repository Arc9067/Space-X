import React from "react";
import headerImg from "../assets/footer.svg";
import { BsArrow90DegRight } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="py-8 w-full relative">
      <div className="w-full h-[102px] absolute top-0 bg-sky-400 rounded-[1406.17px] blur-[421.85px]" />

      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-10">
        <a href="">
          <img src={headerImg} alt="" className="w-[10rem] md:w-fit " />
        </a>
        <div className=" flex-col justify-start items-start gap-8 flex">
          <div className="text-cyan-500 text-base font-normal leading-snug tracking-tight">
            MENU
          </div>
          <div className="flex-col justify-start items-start gap-8 flex">
            <div className="text-white text-base font-normal leading-snug tracking-tight">
              Home
            </div>
            <div className="text-white text-base font-normal leading-snug tracking-tight">
              About
            </div>
            <div className="text-white text-base font-normal leading-snug tracking-tight">
              Tokenomics
            </div>
            <div className="text-white text-base font-normal leading-snug tracking-tight">
              Roadmap
            </div>
          </div>
        </div>
        <div className="w-[74px] h-[238px] flex-col justify-start items-start gap-8 inline-flex">
          <div className="text-cyan-400 text-base font-normal leading-snug tracking-tight">
            Social
          </div>
          <div className="flex-col justify-start items-start gap-8 flex">
            <a
              href="https://twitter.com/SpaceXENTRY"
              className="text-white text-base font-normal leading-snug tracking-tight"
            >
              Twitter
            </a>
            <a
              href="https://t.me/SpaceXENTRY"
              className="text-white text-base font-normal leading-snug tracking-tight"
            >
              Telegram
            </a>
            <a href="" className="">
              <div className="w-[173px]  h-[54px] px-8 py-4 rounded shadow border border-cyan-400 justify-center items-center gap-2.5 inline-flex">
                <div className="text-cyan-400 flex  items-center gap-3 text-base font-kidGames leading-snug tracking-tight">
                  SPACE X <BsArrow90DegRight />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
