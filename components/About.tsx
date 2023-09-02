import { FC } from "react";
import content from "../helpers/content.json";

const About: FC = () => {
  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="md:flex md:justify-between md:mb-16 md:gap-x-6 xl:mb-[72px] xl:justify-normal">
          <div className="md:flex md:flex-col md:justify-between">
            <h2 className="section-title mb-2 xl:w-[606px]">
              {content.about.titleAccent}
              <span className="section-title-accent">
                {content.about.title}
              </span>
            </h2>
            <div className="hidden md:block  w-[221px] text-[16px] leading-[1.25] xl:hidden">
              <p className="uppercase">{content.about.description[0]}</p>
              <p className="uppercase text-right ">
                {content.about.description[1]}
              </p>
              <p className="font-extralight tracking-[-0.32px]">
                {content.about.description[2]}
              </p>
            </div>
          </div>
          <div className="w-[180px] md:w-[220px] md:mt-3 xl:w-[292px] xl:mt-4">
            <p className="section-text mb-5 md:mb-4 xl:mb-5">
              <span className="section-text-accent">
                {content.about.text1.accent}
              </span>
              {content.about.text1.main}
            </p>
            <p className="section-text mb-10 md:mb-0">
              <span className="section-text-accent">
                {content.about.text2.accent}
              </span>
              {content.about.text2.main}
            </p>
          </div>
        </div>
        <div className="xl:flex xl:flex-row-reverse xl:justify-between">
          <div className="md:hidden w-[180px] ml-auto leading-[1.42] mb-10 xl:block xl:w-[296px] xl:mb-0 xl:ml-0 xl:leading-[1.33]">
            <p className="uppercase">{content.about.description[0]}</p>
            <p className="uppercase text-right ">
              {content.about.description[1]}
            </p>
            <p className="font-extralight tracking-[-0.14px]">
              {content.about.description[2]}
            </p>
          </div>
          <p className="section-text md:leading-[1.25] md:w-[463px] md:ml-auto xl:ml-0 xl:w-[607px] xl:leading-[1.33]">
            <span className="section-text-accent">
              {content.about.text3.accent}
            </span>
            {content.about.text3.main}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
