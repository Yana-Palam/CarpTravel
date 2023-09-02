"use client";

import { FC, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
import { slides } from "@/helpers/services-slides";
import ServicesSlide from "./ServicesSlide";

import "swiper/css";
import "swiper/css/effect-fade";

const Services: FC = () => {
  const [mySwiper, setMySwiper] = useState<any>(null);

  const onClickBtn = (index: number) => {
    mySwiper.slideTo(index);
  };

  return (
    <>
      <section
        className="section  services h-[850px] relative md:h-[620px] xl:h-[784px]"
        id="services"
      >
        <div className="swiper-container absolute top-0 left-o  h-full w-full ">
          <Swiper modules={[EffectFade]} onSwiper={setMySwiper} effect="fade">
            {slides.map(
              ({ id, picture, bg, title, description }, index, arr) => {
                const total = arr.length;

                return (
                  <SwiperSlide key={index} className={`section bg-cover`}>
                    <ServicesSlide
                      active={id}
                      total={total}
                      picture={picture}
                      bg={bg}
                      title={title}
                      description={description}
                      onClickBtn={onClickBtn}
                    />
                  </SwiperSlide>
                );
              }
            )}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Services;
