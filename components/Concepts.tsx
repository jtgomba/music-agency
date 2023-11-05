import React from 'react';
import Image from 'next/image';
import concept1 from '@/images/concept1.png';
import concept2 from '@/images/concept2.png';

const Concepts = () => (
  <div className="relative h-fit w-full px-3 font-neutralFace">
    <div className="h-[1px] w-full bg-white" />
    <div className="my-32">
      <p className="text-8xl font-light leading-none sm:text-9xl md:text-[12rem] xl:text-[18rem]">
        MUSIC
      </p>
      <p className="text-8xl font-light leading-none sm:text-9xl md:text-[12rem] xl:text-[18rem]">
        IS MORE
      </p>
      <p className="indent-[10vw] text-8xl font-light leading-none sm:text-9xl md:text-[12rem] xl:text-[18rem]">
        THAN THE
      </p>

      <p className="text-8xl font-light leading-none sm:text-9xl md:text-[12rem] xl:text-[18rem]">
        NOTES
      </p>
    </div>
    <div className="mb-[20vh] h-[1px] w-full bg-transparent md:mb-[40vh] md:bg-white" />
    <div className="absolute right-0 top-[30%] mt-[30vh] flex w-[60vw] flex-col items-center justify-center md:top-0">
      <div className="mb-20 hidden md:block">
        <p className="text-xl">(CONCEPTS)</p>
        <p className="text-xl">(IDEAS)</p>
        <p className="text-xl">(MOTIVES)</p>
      </div>
      <Image
        alt=""
        src={concept1}
        className="-z-10 my-10 w-[50%]"
      />
      <Image
        alt=""
        src={concept2}
        className="my-10"
      />
    </div>
  </div>
);

export default Concepts;
