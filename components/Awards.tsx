import React from 'react';
import Image from 'next/image';
import award1 from '@/images/award1.png';
import award2 from '@/images/award2.png';
import award3 from '@/images/award3.png';
import award4 from '@/images/award4.png';
import award5 from '@/images/award5.png';
import award6 from '@/images/award6.png';

const Awards = () => (
  <div className="relative font-neutralFace">
    <div className="h-[80vh] bg-[#e7e7e7] text-black">
      <div className="px-3 py-2">
        <div className="h-[1px] w-full bg-black" />
        <div className="flex w-full justify-between py-2 text-xs">
          <div>BOLD</div>
          <div>CULTURALLY CONNECTED</div>
          <div>INCLUSIVE</div>
        </div>
        <div className="my-28">
          <div className="text-sm md:text-xl">(OUR AWARDS)</div>
          <div className="my-2 indent-[25vw] text-2xl font-bold leading-snug sm:text-3xl md:text-5xl">
            NOT FOR OUR EGOS, BUT BECAUSE AWARDS ARE A MEASURE OF CREATIVITY,
            ORIGINALITY AND QUALITY. AIMING FOR AWARDS PUSHES US TO THINK
            DEEPER, GO FURTHER AND HAVE MEANINGFUL CONVERSATIONS ABOUT WHAT
            CREATIVITY IS.
          </div>
        </div>
      </div>
    </div>
    <div className="h-[50vh] bg-black text-[#e7e7e7] sm:h-[70vh]">
      <div className="flex h-full w-full items-center justify-center text-center text-7xl leading-none sm:text-9xl md:text-[10rem] xl:text-[16rem]">
        <h1 className="mt-[-50vh] mix-blend-difference">
          WE PLAY
          <br />
          TO WIN
        </h1>
      </div>
    </div>
    <div className="absolute right-[10%] top-[35%]">
      <Image
        alt=""
        src={award1}
        className="z-10 h-28 w-auto object-contain sm:h-44 md:h-80"
      />
    </div>

    <div className="absolute bottom-[15%] left-[15%]">
      <Image
        alt=""
        src={award2}
        className="z-10 h-28 w-auto object-contain sm:h-44 md:h-80"
      />
    </div>

    <div className="absolute bottom-[50%] left-[20%]">
      <Image
        alt=""
        src={award3}
        className="z-10 h-28 w-auto object-contain sm:h-44 md:h-80"
      />
    </div>

    <div className="absolute bottom-[30%] left-[60%]">
      <Image
        alt=""
        src={award4}
        className="z-10 h-28 w-auto object-contain sm:h-32 md:h-52"
      />
    </div>

    <div className="absolute bottom-[30%] right-[50%]">
      <Image
        alt=""
        src={award5}
        className="z-10 h-28 w-auto object-contain sm:h-44 md:h-80"
      />
    </div>

    <div className="absolute bottom-[15%] right-[35%]">
      <Image
        alt=""
        src={award6}
        className="z-10 h-28 w-auto object-contain sm:h-32 md:h-48"
      />
    </div>
  </div>
);

export default Awards;
