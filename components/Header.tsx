'use client';

import React, { useEffect, useRef, useLayoutEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import close from '@/images/close-outline.svg';
import menu from '@/images/menu-outline.svg';

const Header = () => {
  const resMenu = useRef(null);
  const resMenuHeader = useRef(null);
  const resMenuItem1 = useRef(null);
  const resMenuItem2 = useRef(null);
  const resMenuItem3 = useRef(null);
  const resMenuItem4 = useRef(null);
  const menuOpenTl = gsap.timeline({
    paused: true,
    reversed: true,
  });

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
  }, []);

  function menuOpen() {
    if (menuOpenTl.reversed()) {
      menuOpenTl.play();
    } else {
      menuOpenTl.reverse();
    }
  }

  const timeline = useRef<gsap.core.Timeline>();

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      timeline.current = gsap.timeline();
      timeline.current
        .fromTo(
          '[data-menu-item]',
          { y: '-100%', opacity: 0 },
          {
            opacity: 1,
            y: '0%',
            duration: 1.2,
            ease: 'power4.inOut',
            stagger: 0.15,
          }
        )
        .fromTo(
          '[data-subtitle]',
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
    <div>
      <div
        ref={resMenu}
        className="fixed left-0 top-0 h-screen w-full translate-y-[-1200px] overflow-hidden bg-black"
      >
        <div
          className="flex h-fit w-[100%] items-start justify-between py-[5px]"
          ref={resMenuHeader}
        >
          <div className="mx-[5px] font-monument text-[20px] font-semibold leading-none mix-blend-difference">
            M
            <br />
            AGENCY
          </div>
          <div
            onClick={menuOpen}
            onKeyDown={menuOpen}
            className="mx-[5px] block cursor-pointer md:hidden"
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
          <span className="block overflow-hidden">
            <div
              ref={resMenuItem1}
              className="font-berthold text-4xl font-light"
            >
              WORK
            </div>
          </span>
          <span className="block overflow-hidden">
            <div
              ref={resMenuItem2}
              className="font-berthold text-4xl font-light"
            >
              ABOUT
            </div>
          </span>
          <span className="block overflow-hidden">
            <div
              ref={resMenuItem3}
              className="font-berthold text-4xl font-light"
            >
              PUBLICATIONS
            </div>
          </span>
          <span className="block overflow-hidden">
            <div
              ref={resMenuItem4}
              className="font-berthold text-4xl font-light"
            >
              OFFICE
            </div>
          </span>
        </div>
      </div>
      <div className="absolute top-0 flex h-[20vh] w-[100%] flex-col justify-between bg-black py-[5px]">
        <div
          id="header"
          className="flex h-fit w-[100%] items-start justify-between"
        >
          <div
            data-menu-item
            className="mx-[5px] font-monument text-[20px] font-semibold leading-none mix-blend-difference"
          >
            M
            <br />
            AGENCY
          </div>
          <div
            data-menu-item
            className="mx-1 hidden font-berthold text-4xl font-light mix-blend-difference md:block"
          >
            WORK
          </div>
          <div
            data-menu-item
            className="mx-1 hidden font-berthold text-4xl font-light mix-blend-difference md:block"
          >
            ABOUT
          </div>
          <div
            data-menu-item
            className="mx-1 hidden font-berthold text-4xl font-light mix-blend-difference md:block"
          >
            PUBLICATIONS
          </div>
          <div
            data-menu-item
            className="mx-1 hidden font-berthold text-4xl font-light mix-blend-difference md:block"
          >
            OFFICE
          </div>
          <div
            onClick={menuOpen}
            className="mx-[5px] block cursor-pointer md:hidden"
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
        <div
          data-subtitle
          className="flex h-fit w-[100%] items-start justify-between px-5 font-segoe text-xs font-light sm:justify-evenly"
        >
          <div>
            An independent
            <br />
            music agency
          </div>
          <div>Amsterdam</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
