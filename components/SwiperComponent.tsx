'use client';

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import imageSlider1 from '@/images/imageSlider1.png';
import imageSlider2 from '@/images/imageSlider2.png';
import imageSlider3 from '@/images/imageSlider3.png';
import imageSlider4 from '@/images/imageSlider4.png';
import imageSlider5 from '@/images/imageSlider5.png';
import imageSlider6 from '@/images/imageSlider6.png';

const SwiperSliderComponent = () => {
  const [slides, setSlides] = useState(0);
  useEffect(() => {
    const w = window.innerWidth;
    if (w < 768) {
      setSlides(1.2);
    } else {
      setSlides(1.5);
    }
  }, []);
  return (
    <div className="relative">
      <Swiper
        spaceBetween={0}
        slidesPerView={slides}
        grabCursor
        className="w-full font-segoe relative mt-[40vh] md:mt-[33vh]"
      >
        <SwiperSlide className="flex justify-start flex-col w-fit">
          <div className="h-full flex items-end">
            <Image
              alt=""
              src={imageSlider1}
              className="w-full md:w-[80%] h-full object-contain"
              priority
            />
          </div>
          <div className="flex">
            <div className="flex flex-col justify-between py-1 px-2 text-xs">
              <p>MULTIPLE PROJECTS</p>
              <p>(01)</p>
            </div>
            <div>
              <h2 className="text-5xl md:text-7xl lg:text-9xl 2xl:text-[12rem] leading-none tracking-tighter">
                HEINEKEN
              </h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-start flex-col-reverse w-fit">
          <div className="h-full flex items-end">
            <Image
              alt=""
              src={imageSlider2}
              className="w-full md:w-[80%] h-full object-contain"
            />
          </div>
          <div className="flex">
            <div className="flex flex-col justify-between py-1 px-2 text-xs">
              <p>
                <span className="text-red-700">G-STAR Raw</span>
                <br /> 1:00
              </p>
              <p>(02)</p>
            </div>
            <div className="text-5xl md:text-7xl lg:text-9xl leading-none">
              G-STAR RAW
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-start flex-col w-fit">
          <div className="h-full flex items-end">
            <Image
              alt=""
              src={imageSlider3}
              className="w-full md:w-[80%] h-full object-contain"
            />
          </div>
          <div className="flex">
            <div className="flex flex-col justify-between py-1 px-2 text-xs">
              <p>
                <span className="text-red-700">SKODA</span>
                <br /> 2:01
              </p>
              <p>(03)</p>
            </div>
            <div className="text-5xl md:text-7xl lg:text-9xl 2xl:text-[12rem] leading-none tracking-tighter">
              SKODA
            </div>
            <div />
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-start flex-col-reverse w-fit">
          <div className="h-full flex items-end">
            <Image
              alt=""
              src={imageSlider4}
              className="w-full md:w-[60%] h-full object-cover"
            />
          </div>
          <div className="flex">
            <div className="flex flex-col justify-between py-1 px-2 text-xs">
              <p>
                <span className="text-red-700">PUBLICIS MILAN</span>
                <br /> 1:10
              </p>
              <p>(04)</p>
            </div>
            <div className="text-5xl md:text-7xl 2xl:text-[12rem] lg:text-9xl leading-none tracking-tighter">
              DIESEL
            </div>
            <div />
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-start flex-col w-fit">
          <div className="h-full flex items-end">
            <Image
              alt=""
              src={imageSlider5}
              className="w-full md:w-[60%] h-full object-contain"
            />
          </div>
          <div className="flex">
            <div className="flex flex-col justify-between text-xs py-1 px-2">
              <p>
                <span className="text-red-700">BARBARA BOLOGNA</span>
                <br /> 14:14
              </p>
              <p>(05)</p>
            </div>
            <div className="text-5xl md:text-7xl 2xl:text-[12rem] lg:text-9xl leading-none tracking-tighter">
              EMBODIMENT
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-start flex-col-reverse w-fit">
          <div className="h-full flex items-end">
            <Image
              alt=""
              src={imageSlider6}
              className="w-full md:w-[65%] h-full object-contain"
            />
          </div>
          <div className="flex">
            <div className="flex flex-col justify-between text-xs py-1 px-2">
              <p>
                <span className="text-red-700">PUBLICIS</span>
                <br /> 1:17
              </p>
              <p>(06)</p>
            </div>
            <div className="text-5xl md:text-7xl 2xl:text-[12rem] lg:text-9xl leading-none tracking-tighter">
              MERCEDES
            </div>
            <div />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperSliderComponent;
