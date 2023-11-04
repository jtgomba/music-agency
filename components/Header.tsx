'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import close from '@/images/close-outline.svg';
import menu from '@/images/menu-outline.svg';

const Header = () => {
  const resMenu = useRef(null);
  const resMenuHeader = useRef(null);
  const resMenuItem1 = useRef(null);
  const resMenuItem2 = useRef(null);
  const resMenuItem3 = useRef(null);
  const resMenuItem4 = useRef(null);
  const menuOpenTl = gsap.timeline({ paused: true, reversed: true });

  useEffect(() => {
    menuOpenTl.to(resMenu.current, {
      y: 0,
      zIndex: 100,
      duration: 0.2,
    });
    menuOpenTl.from(
      [
        resMenuHeader.current,
        resMenuItem1.current,
        resMenuItem2.current,
        resMenuItem3.current,
        resMenuItem4.current,
      ],
      {
        duration: 0.5,
        stagger: {
          amount: 0.4,
        },
        y: -50,
      }
    );
  });

  function menuOpen() {
    if (menuOpenTl.reversed()) {
      menuOpenTl.play();
    } else {
      menuOpenTl.reverse();
    }
  }

  return (
    <div>
      <div
        ref={resMenu}
        className="fixed w-full top-0 left-0 overflow-hidden h-screen bg-black -translate-y-[1200px]"
      >
        <div
          className="flex items-start justify-between w-[100%] h-fit py-[5px]"
          ref={resMenuHeader}
        >
          <div className="mx-[5px] mix-blend-difference font-monument font-semibold text-[20px] leading-none">
            M <br />
            AGENCY
          </div>
          <div
            onClick={menuOpen}
            onKeyDown={menuOpen}
            className="block md:hidden cursor-pointer mx-[5px]"
            role="button"
            tabIndex={0}
            aria-label="menu"
          >
            <Image
              src={close}
              className="w-9 object-contain invert"
              alt=""
            />
          </div>
        </div>
        <div className="mx-2 my-10 space-y-1">
          <span className="overflow-hidden block">
            <div
              ref={resMenuItem1}
              className="font-berthold font-light text-4xl"
            >
              WORK
            </div>
          </span>
          <span className="overflow-hidden block">
            <div
              ref={resMenuItem2}
              className="font-berthold font-light text-4xl"
            >
              ABOUT
            </div>
          </span>
          <span className="overflow-hidden block">
            <div
              ref={resMenuItem3}
              className="font-berthold font-light text-4xl"
            >
              PUBLICATIONS
            </div>
          </span>
          <span className="overflow-hidden block">
            <div
              ref={resMenuItem4}
              className="font-berthold font-light text-4xl"
            >
              OFFICE
            </div>
          </span>
        </div>
      </div>
      <div className="absolute bg-black top-0 py-[5px] h-[20vh] flex justify-between w-[100%] flex-col">
        <div
          id="header"
          className="flex items-start justify-between w-[100%] h-fit"
        >
          <div className="mx-[5px] mix-blend-difference font-monument font-semibold text-[20px] leading-none">
            M <br /> AGENCY
          </div>
          <div className="mx-1 md:block hidden mix-blend-difference font-berthold font-light text-4xl">
            WORK
          </div>
          <div className="mx-1 md:block hidden mix-blend-difference font-berthold font-light text-4xl">
            ABOUT
          </div>
          <div className="mx-1 md:block hidden mix-blend-difference font-berthold font-light text-4xl">
            PUBLICATIONS
          </div>
          <div className="mx-1 md:block hidden mix-blend-difference font-berthold font-light text-4xl">
            OFFICE
          </div>
          <div
            onClick={menuOpen}
            className="block md:hidden cursor-pointer mx-[5px]"
            onKeyDown={menuOpen}
            role="button"
            tabIndex={0}
            aria-label="menu"
          >
            <Image
              alt=""
              src={menu}
              className="w-9 object-contain invert"
            />
          </div>
        </div>
        <div className="flex items-start text-xs font-light font-segoe justify-between sm:justify-evenly px-5 w-[100%] h-fit">
          <div>
            An independent <br /> music agency
          </div>
          <div>Amsterdam</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
