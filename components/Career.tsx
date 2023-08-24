import { FC } from "react";
import Image from "next/image";
import CareerForm from "./CareerForm";
import bg from "../public/images/career-bg.jpg";
import { advantages } from "@/utils/career";

const Career: FC = () => {
  return (
    <section id="career">
      <div className="section relative md:hidden">
        <Image
          src={bg}
          alt="bg-career"
          fill
          quality={100}
          sizes="100vw"
          className="-z-10 object-cover object-center "
        />
        <div className="container">
          <div className="mb-9 md:flex md:justify-between md:mb-3">
            <h2 className="section-title md:mb-0">
              Choose <span className="section-title-accent">us</span>
            </h2>
            <p className="section-text w-2/3 ml-auto md:max-w-[221px] md:text-justify md:text-[13px] md:leading-[1.53]">
              Your chance to join our passionate team in Carpathian tourism.
              Seeking talented professionals to share our common mission.
            </p>
          </div>
          <div className="md:hidden">
            <h3 className="uppercase text-[30px] font-thin leading-[1.21] mb-9 w-2/3 ml-auto">
              Why us ?
            </h3>
            <ul className="w-2/3 text-right">
              {advantages.map(({ title, text }, index) => (
                <li className="mb-4" key={index}>
                  <p className="font-normal leading-[1.43] mb-2 ">{title}</p>
                  <p className="font-extralight leading-[1.67]">{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="section relative">
        <Image
          src={bg}
          alt="bg-career"
          fill
          quality={100}
          sizes="100vw"
          className="-z-10 object-cover object-center "
        />
        <div className="container">
          <div className="hidden md:flex md:justify-between mb-3 xl:mb-6">
            <h2 className="section-title md:mb-0">
              Choose <span className="section-title-accent">us</span>
            </h2>
            <p className="section-text w-2/3 ml-auto md:max-w-[221px] md:text-justify md:text-[13px] md:leading-[1.53] xl:max-w-[293px] xl:text-[18px] xl:leading-[1.33]">
              Your chance to join our passionate team in Carpathian tourism.
              Seeking talented professionals to share our common mission.
            </p>
          </div>
          <div className="xl:mb-14 xl:flex xl:w-3/4 xl:justify-between">
            <h3 className="hidden md:block w-[221px] uppercase text-[30px] font-thin leading-[1.21] mb-14  text-right xl:mb-0 xl:w-[290px]">
              Why us ?
            </h3>
            <p className=" hidden section-text  xl:text-[18px] xl:leading-[1.33] xl:w-[300px] xl:block xl:pr-[60px]">
              Don't miss your opportunity! Fill out the form right now and join
              our team!
            </p>
          </div>

          <div className=" md:flex gap-5 xl:gap-6">
            <div className="hidden md:block min-w-[221px] basis-[221px] xl:w-1/2 xl:basis-1/2">
              <ul className="w-full text-right">
                {advantages.map(({ title, text }, index) => (
                  <li className="mb-4 md:mb-6 xl:flex xl:gap-6" key={index}>
                    <p className="font-normal leading-[1.43] mb-2 md:leading-[1.25] xl:w-1/2 xl:basis-1/2 xl:text-[18px] xl:leading-[1.33]">
                      {title}
                    </p>
                    <p className="font-extralight leading-[1.67] md:text-[12px] xl:w-1/2 xl:basis-1/2 xl:text-left xl:leading-loose">
                      {text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grow xl:w-1/2 xl:basis-1/2 ">
              <p className="section-text w-[221px]  mb-8 md:text-[13px] md:leading-[1.53] md:w-[179px] xl:text-[18px] xl:leading-[1.33] xl:w-[235px] xl:hidden">
                Don't miss your opportunity! Fill out the form right now and
                join our team!
              </p>
              <CareerForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
