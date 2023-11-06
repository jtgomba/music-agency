'use client';

import React, { useLayoutEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import { gsap } from 'gsap';
import imageSlider1 from '@/images/imageSlider1.png';
import imageSlider2 from '@/images/imageSlider2.png';
import imageSlider3 from '@/images/imageSlider3.png';
import imageSlider4 from '@/images/imageSlider4.png';
import imageSlider5 from '@/images/imageSlider5.png';
import imageSlider6 from '@/images/imageSlider6.png';
import { cn } from '@/lib/utils';

const SwiperSliderComponent = () => {
  const timeline = useRef<gsap.core.Timeline>();

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      timeline.current = gsap.timeline();
      timeline.current
        .to('.overlay', {
          y: '-100%',
          duration: 1.2,
          ease: 'power4.inOut',
          stagger: 0.15,
        })
        .to(
          '.textOverlay',
          {
            x: '100%',
            duration: 1.2,
            ease: 'power4.inOut',
            stagger: 0.15,
          },
          '<'
        )
        .fromTo(
          '[data-subheading]',
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 1.2,
          },
          '<'
        );
    });

    return () => context.revert();
  }, []);

  return (
    <div className="relative">
      <Swiper
        spaceBetween={0}
        slidesPerView="auto"
        grabCursor
        className="relative mt-[40vh] w-full font-segoe md:mt-[33vh]"
      >
        <SwiperSlide className="flex w-1/3 flex-col justify-start">
          <div className="relative flex h-full items-end overflow-hidden">
            <div
              className={cn(
                'absolute inset-[0] bg-[rgb(0,0,0)] md:w-[80%]',
                'overlay'
              )}
            />
            <Image
              alt=""
              src={imageSlider1}
              className="h-full w-full object-contain md:w-[80%]"
              priority
            />
          </div>
          <div className="flex">
            <div
              data-subheading
              className="flex flex-col justify-between px-2 py-1 text-xs"
            >
              <p>MULTIPLE PROJECTS</p>
              <p>(01)</p>
            </div>
            <div>
              <span
                className={cn(
                  'absolute bottom-0 h-[30%] bg-[rgb(0,0,0)] md:w-[80%]',
                  'textOverlay'
                )}
              />
              <div className="text-5xl leading-none tracking-tighter md:text-7xl lg:text-9xl 2xl:text-[12rem]">
                HEINEKEN
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex w-fit flex-col-reverse justify-start">
          <div className="flex h-full items-end">
            <div
              className={cn(
                'absolute inset-[0] bg-[rgb(0,0,0)] md:w-[80%]',
                'overlay'
              )}
            />
            <Image
              alt=""
              src={imageSlider2}
              className="h-full w-full object-contain md:w-[80%]"
            />
          </div>
          <div className="z-10 flex bg-black">
            <div
              data-subheading
              className="flex flex-col justify-between px-2 py-1 text-xs"
            >
              <p>
                <span className="text-red-700">G-STAR Raw</span>
                <br />
                1:00
              </p>
              <p>(02)</p>
            </div>
            <div>
              <span
                className={cn(
                  'absolute top-0 h-[25%] bg-[rgb(0,0,0)] md:w-[80%]',
                  'textOverlay'
                )}
              />
              <div className="text-5xl leading-none md:text-7xl lg:text-9xl">
                G-STAR RAW
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex w-fit flex-col justify-start">
          <div className="flex h-full items-end">
            <Image
              alt=""
              src={imageSlider3}
              className="h-full w-full object-contain md:w-[95%]"
            />
          </div>
          <div className="flex">
            <div className="flex flex-col justify-between px-2 py-1 text-xs">
              <p>
                <span className="text-red-700">SKODA</span>
                <br />
                2:01
              </p>
              <p>(03)</p>
            </div>
            <div className="text-5xl leading-none tracking-tighter md:text-7xl lg:text-9xl 2xl:text-[12rem]">
              SKODA
            </div>
            <div />
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex w-fit flex-col-reverse justify-start">
          <div className="flex h-full items-end">
            <Image
              alt=""
              src={imageSlider4}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex">
            <div className="flex flex-col justify-between px-2 py-1 text-xs">
              <p>
                <span className="text-red-700">PUBLICIS MILAN</span>
                <br />
                1:10
              </p>
              <p>(04)</p>
            </div>
            <div className="text-5xl leading-none tracking-tighter md:text-7xl lg:text-9xl 2xl:text-[12rem]">
              DIESEL
            </div>
            <div />
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex w-fit flex-col justify-start">
          <div className="flex h-full items-end">
            <Image
              alt=""
              src={imageSlider5}
              className="h-full w-full object-contain md:w-[60%]"
            />
          </div>
          <div className="flex">
            <div className="flex flex-col justify-between px-2 py-1 text-xs">
              <p>
                <span className="text-red-700">BARBARA BOLOGNA</span>
                <br />
                14:14
              </p>
              <p>(05)</p>
            </div>
            <div className="text-5xl leading-none tracking-tighter md:text-7xl lg:text-9xl 2xl:text-[12rem]">
              EMBODIMENT
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex w-fit flex-col-reverse justify-start">
          <div className="flex h-full items-end">
            <Image
              alt=""
              src={imageSlider6}
              className="h-full w-full object-contain md:w-[65%]"
            />
          </div>
          <div className="flex">
            <div className="flex flex-col justify-between px-2 py-1 text-xs">
              <p>
                <span className="text-red-700">PUBLICIS</span>
                <br />
                1:17
              </p>
              <p>(06)</p>
            </div>
            <div className="text-5xl leading-none tracking-tighter md:text-7xl lg:text-9xl 2xl:text-[12rem]">
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
