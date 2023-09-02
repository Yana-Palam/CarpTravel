"use client";

import { Link } from "react-scroll";
import content from "../helpers/content.json";

const Hero = () => {
  return (
    <section className="section hero">
      <div className="container md:flex md:justify-between">
        <p className="md:hidden mb-6 font-thin leading-none uppercase max-w-[116px] ml-auto text-[37px] tracking-[1.67px]">
          <span className="font-medium w-full ">
            {content.hero.preTitle[0]}
          </span>
          {content.hero.preTitle[1]}
          <span className="text-[12px] font-light tracking-[9.48px] w-full block">
            {content.hero.preTitle[2]}
          </span>
        </p>
        <div className="xl:w-[646px]">
          <h1 className="mb-6 uppercase text-[40px] font-thin leading-[1.4] tracking-tighter w-[280px] md:text-[67px] md:w-[426px] md:mb-[68px] md:leading-[1.21] xl:w-[646px] xl:text-[98px] xl:mb-[148px]">
            <span className="font-medium">{content.hero.titleAccent}</span>
            {content.hero.title}
          </h1>
          <p className="w-[157px] mb-6 font-extralight text-[10px] leading-[1.6] md:w-[263px] md:mb-0 md:text-[14px] md:leading-[1.14] md:tracking-widest xl:w-full xl:text-[16px] xl:leading-[1.5]">
            {content.hero.text}
          </p>
        </div>

        <div className="md:w-[230px] xl:w-[294px]">
          <p className="hidden md:block mb-6 font-thin leading-none uppercase w-[116px] ml-auto text-[37px] tracking-[1.67px] md:text-[67px] md:tracking-[7.71px] md:w-full  md:leading-[1.21] md:mb-14 xl:text-[98px] xl:tracking-normal xl:mb-[181px]">
            <span className="font-medium w-full ">
              {content.hero.preTitle[0]}
            </span>
            {content.hero.preTitle[1]}
            <span className="text-[12px] font-light tracking-[9.48px] w-full block md:text-[14px] md:tracking-[25.9px] xl:text-[16px] xl:tracking-[36.48px]">
              {content.hero.preTitle[2]}
            </span>
          </p>

          <p className="text-sm font-extralight mb-6 	leading-[1.43] text-justify md:text-[16px] md:leading-[1.25] md:mb-[28px] xl:text-[18px] xl:leading-[1.33]">
            {content.hero.description}
          </p>
          <Link
            to="contacts"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="cursor-pointer uppercase w-full block py-[16px] px-[64px] text-center font-bold leading-[1.21] bg-[#ffffff]/10 relative hero-btn hover:bg-[#ffffff]/20 focus:bg-[#ffffff]/20 transition-colors duration-300 md:py-[14px] xl:text-[32px] xl:py-[16px]"
          >
            {content.hero.btnText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
