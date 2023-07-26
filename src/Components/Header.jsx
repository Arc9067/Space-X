import React from "react";
import headerImg from "../assets/header.svg";
import { BsArrow90DegRight } from "react-icons/bs";

const Header = () => {
  return (
    <header className="py-4 w-full bg-black border-b border-[#E3F0F3]">
      <nav className="container flex justify-between items-center">
        <a href="">
          <img src={headerImg} alt="" className="w-[10rem] md:w-fit" />
        </a>
        <ul
          data-aos="fade-left"
          data-aos-duration="900"
          className="mx-auto hidden lg:flex items-center gap-14 font-special"
        >
          <li className="text-xl capitalize hover:text-black">
            <a href="">home</a>
          </li>
          <li className="text-xl capitalize hover:text-black">
            <a href="">about</a>
          </li>
          <li className="text-xl capitalize hover:text-black">
            <a href="">tokenomics</a>
          </li>
          <li className="text-xl capitalize hover:text-black">
            <a href="">roadmap</a>
          </li>
        </ul>

        <a href="" className="https://t.me/SpaceXENTRY">
          <div className="w-[173px]  h-[54px] px-8 py-4 rounded shadow border border-cyan-400 justify-center items-center gap-2.5 inline-flex">
            <div className="text-cyan-400 flex  items-center gap-3 text-base font-kidGames leading-snug tracking-tight">
              SPACE X <BsArrow90DegRight />
            </div>
          </div>
        </a>
      </nav>
    </header>
  );
};

export default Header;
