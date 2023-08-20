import { FC } from "react";

const About: FC = () => {
  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="md:flex md:justify-between md:mb-16 md:gap-x-6 xl:mb-[72px] xl:justify-normal">
          <div className="md:flex md:flex-col md:justify-between">
            <h2 className="section-title mb-2 xl:w-[606px]">
              Who <span className="section-title-accent">we are</span>
            </h2>
            <div className="hidden md:block  w-[221px] text-[16px] leading-[1.25] xl:hidden">
              <p className="uppercase">From vacationers</p>
              <p className="uppercase text-right ">to active travelers</p>
              <p className="font-extralight tracking-[-0.32px]">
                we have a tour for everyone.
              </p>
            </div>
          </div>
          <div className="w-[180px] md:w-[220px] md:mt-3 xl:w-[292px] xl:mt-4">
            <p className="section-text mb-5 md:mb-4 xl:mb-5">
              <span className="section-text-accent">a team of enthusiasts</span>{" "}
              who are fully committed to the mission of creating unforgettable
              and extraordinary trips to the most beautiful parts of the
              Carpathians. Our goal is not just to show you the natural wonders
              of the mountains, but to provide you with a deep immersion in
              their magical atmosphere.
            </p>
            <p className="section-text mb-10 md:mb-0">
              <span className="section-text-accent">We believe</span> that
              nature has the power to inspire, strengthen character and provide
              new perspectives. Therefore, each of our tours is aimed at
              unlocking your potential, enriching your spiritual world and
              creating unforgettable memories.
            </p>
          </div>
        </div>
        <div className="xl:flex xl:flex-row-reverse xl:justify-between">
          <div className="md:hidden w-[180px] ml-auto leading-[1.42] mb-10 xl:block xl:w-[296px] xl:mb-0 xl:ml-0 xl:leading-[1.33]">
            <p className="uppercase">From vacationers</p>
            <p className="uppercase text-right ">to active travelers</p>
            <p className="font-extralight tracking-[-0.14px]">
              we have a tour for everyone.
            </p>
          </div>
          <p className="section-text md:leading-[1.25] md:w-[463px] md:ml-auto xl:ml-0 xl:w-[607px] xl:leading-[1.33]">
            <span className="section-text-accent">We use methods </span>
            that are time-tested and proven. Our expert guides with in-depth
            knowledge of the Carpathian landscapes lead you safely through the
            mysteries of these mountains.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
