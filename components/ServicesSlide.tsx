import { FC } from "react";
import Image from "next/image";
import { buttonText } from "@/helpers/services-slides";
import { ServicesSlideProps } from "@/types";

const ServicesSlide: FC<ServicesSlideProps> = ({
  className,
  total,
  active,
  picture,
  bg,
  title,
  description,
  onClickBtn,
}) => {
  return (
    <div className={className}>
      <Image
        src={bg}
        alt={title}
        fill
        quality={100}
        sizes="100vw"
        className="-z-10 object-cover object-center "
      />
      <div className="container flex  flex-col  h-[739px] md:flex-row md:gap-[18px] md:h-[493px] xl:hidden">
        <div>
          <h2 className="section-title">
            We <span className="section-title-accent">offer</span>
          </h2>
          <p className="block md:hidden text-[43px] font-thin text-right mb-4">
            0{active}/<span className="text-white/20 ">0{total}</span>
          </p>
          <Image
            src={picture}
            alt={title}
            className="object-cover h-[214px]  mb-4 w-full md:h-[378px] md:mb-0"
          />
        </div>
        <div className="grow md:min-w-[221px] md:basis-[221px] flex flex-col ">
          <p className="hidden md:block text-[67px] font-thin mb-10 leading-[1.16]">
            0{active}/<span className="text-white/20 ">0{total}</span>
          </p>

          <p className=" block text-right mb-6 text-[12px] leading-loose tracking-[2.4px] md:hidden">
            {title}
          </p>
          <div className=" grow flex flex-col justify-between">
            <div className="md:mb-[25px]">
              {buttonText.map((text, index) => {
                const currentIndex = active - 1;
                const activeClass =
                  index === currentIndex ? "services-btn-active" : null;
                return (
                  <button
                    key={index}
                    onClick={() => {
                      onClickBtn(index);
                    }}
                    className={`mb-4 block uppercase text-xl text-white/50 font-extralight leading-[0.85] ${activeClass} md:text-[22px] md:leading-[0.81] text-left`}
                    type="button"
                  >
                    {text}
                  </button>
                );
              })}
              <p className="hidden md:block mb-3 text-[12px] leading-loose tracking-[2.4px] md:mb-0 ">
                {title}
              </p>
            </div>

            <p className="section-text md:text-[13px] md:text-justify md:leading-[1.53]">
              {description}
            </p>
          </div>
        </div>
      </div>
      {/* desk */}
      <div className="hidden container  xl:flex gap-5">
        <div className="min-w-[608px] basis-[608px]">
          <h2 className="section-title">
            We <span className="section-title-accent">offer</span>
          </h2>
          <Image
            src={picture}
            alt={title}
            className="object-cover w-full h-[434px] "
          />
        </div>

        <div className="grow flex flex-col justify-between">
          <div>
            <p className="text-[98px] font-thin mb-5 leading-[1.21]">
              0{active}/<span className="text-white/20 ">0{total}</span>
            </p>
            <div>
              <ul>
                {buttonText.map((text, index) => {
                  const currentIndex = active - 1;
                  const activeClass =
                    index === currentIndex ? "services-btn-active" : "";
                  const titleClass =
                    index === currentIndex ? "block" : "hidden";
                  return (
                    <li key={index} className="flex gap-[50px]">
                      <button
                        onClick={() => {
                          onClickBtn(index);
                        }}
                        className={`mb-6 block uppercase text-[28px] text-white/50 font-extralight leading-[0.85] ${activeClass} text-left w-[260px]`}
                        type="button"
                      >
                        {text}
                      </button>
                      <p
                        className={`mb-3 text-[12px] leading-loose tracking-[2.4px] ${titleClass} `}
                      >
                        {title}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <p className="section-text text-[18px] text-justify leading-[1.33] w-[293px] ml-auto">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesSlide;
