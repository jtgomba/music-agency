import React from 'react';
import Image from 'next/image';
import publish from '@/images/publications.png';

const Publications = () => (
  <div className="relative font-neutralFace">
    <div className="px-3">
      <div className="h-[1px] w-full bg-white" />
      <div className="my-3 mb-36 flex w-full justify-between text-xl font-bold md:text-4xl">
        <div>MEET US</div>
        <div>SERVICES</div>
        <div>ALL WORK</div>
      </div>
    </div>
    <div className="bg-[#e7e7e7] pb-[20vh]">
      <div className="flex h-[100vh] w-full flex-col-reverse md:flex-row">
        <div className="flex w-full flex-col items-center justify-center px-3 text-black md:w-[50%]">
          <div className="flex h-[90%] flex-col items-center justify-center">
            <div className="text-lg"> (PB.001 - 21)</div>
            <h1 className="my-6 text-4xl font-bold">
              UNCOMPROMISED CREATIVITY
            </h1>
            <p className="underline">EXPLORE PUBLICATION</p>
          </div>
          <div className="flex h-[10%] w-full flex-col items-center justify-center">
            <div className="h-[2px] w-full bg-black" />
            <div className="my-3 text-4xl font-bold ">OUR PUBLICATIONS</div>
          </div>
        </div>
        <div className="flex h-full w-full items-center justify-center bg-[#e7e7e7] md:w-[50%] md:bg-black">
          <Image
            alt=""
            src={publish}
            className="w-[70%]"
          />
        </div>
      </div>
    </div>
  </div>
);

export default Publications;
