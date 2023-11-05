import React from 'react';
import Image from 'next/image';
import office from '@/images/home-office.png';

const Office = () => (
  <div className="relative h-fit w-full px-3 py-5 font-neutralFace">
    <div className="h-[2px] w-full bg-white"> </div>
    <div className="flex flex-col py-10">
      <h1 className="text-5xl font-bold md:text-7xl">
        Unleash new levels of
        <br />
        CREATIVITY
      </h1>
      <div className="my-2 flex w-full items-end justify-end">
        <h1 className="mx-4 text-3xl font-bold md:text-5xl lg:mx-10">OFFICE</h1>
        <Image
          src={office}
          alt=""
          className="w-[50vw]"
        />
      </div>
      <h1 className="flex items-start text-2xl font-bold md:text-7xl">
        AMSTERDAM
        <span className="mx-5 mt-2 text-xl font-normal">(9:34PM)</span>
      </h1>
    </div>
    <div className="h-[2px] w-full bg-white" />
    <div className="flex flex-col justify-between py-10 pb-32 lg:flex-row ">
      <div className="text-lg">
        (LETS HEAR
        <br />
        SOMETHING)
      </div>
      <div className="text-2xl font-bold md:text-3xl lg:text-8xl">
        M-AGENCY.COM
      </div>
    </div>
    <div className="h-[3px] w-full bg-white" />
  </div>
);

export default Office;
