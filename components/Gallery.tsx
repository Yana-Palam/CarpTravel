"use client";

import { FC, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { galleryImages } from "@/helpers/gallery";
import bg from "../public/images/gallery-bg.jpg";

import { Navigation } from "swiper/modules";

const Gallery: FC = () => {
  const [navReady, setNavReady] = useState(false);
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (prevRef && nextRef) {
      setNavReady(true);
    }
  }, [prevRef, nextRef]);

  return (
    <section className="section gallery relative" id="gallery">
      <Image
        src={bg}
        alt="forest"
        fill
        quality={100}
        priority={true}
        sizes="100vw"
        className="-z-10 object-cover object-center"
      />
      <div className="container">
        <h2 className="section-title">
          Our <span className="section-title-accent">gallery</span>
        </h2>
        <div className="md:hidden">
          <Swiper
            className="h-[609px]"
            wrapperTag="ul"
            loop={true}
            direction="vertical"
            slidesPerView={3}
            spaceBetween={24}
          >
            {galleryImages.map((item, index) => (
              <SwiperSlide key={index} tag="li" className="relative">
                <Image
                  src={item}
                  alt="slide image"
                  fill
                  className="object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="hidden md:block relative">
          {navReady && (
            <Swiper
              modules={[Navigation]}
              className="h-[295px] xl:h-[430px]"
              wrapperTag="ul"
              slidesPerView={3}
              loopedSlides={3}
              spaceBetween={24}
              grabCursor={true}
              loop
              centeredSlides
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
            >
              {galleryImages.map((item, index) => (
                <SwiperSlide className="relative" key={index} tag="li">
                  {({ isActive }) => (
                    <div className="slide-container h-full w-full relative">
                      <Image
                        src={item}
                        alt="slide image"
                        fill
                        className={`object-cover`}
                      />
                      <div
                        className={`absolute top-0 bottom-0 left-0 right-0  ${
                          isActive
                            ? "gallery-slide-bg-active"
                            : "gallery-slide-bg"
                        }`}
                      ></div>
                    </div>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          )}
          <div className="absolute flex justify-between flex-row bottom-4 inset-x-9 xl:inset-x-56 text-[33px] font-thin z-10">
            <button
              className="uppercase hover:opacity-75 duration-300"
              aria-label="Previous"
              ref={prevRef}
            >
              Back
            </button>
            <button
              className="uppercase hover:opacity-75 duration-300"
              aria-label="Next"
              ref={nextRef}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
