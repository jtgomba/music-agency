import React from 'react';

const Footer = () => (
  <div className="relative px-3 font-neutralFace">
    <div className="mb-[10vh] hidden lg:block">
      <div className="m-1 py-10 font-monument text-[13.2vmax] font-semibold leading-none">
        M
        <br />
        AGENCY
      </div>
    </div>
    <div className="flex flex-col items-start justify-between lg:flex-row lg:items-center">
      <div>FOLLOW US</div>
      <div className="text-4xl underline">INSTAGRAM</div>
      <div className="text-4xl underline">FACEBOOK</div>
      <div className="text-4xl underline">VIMEO</div>
      <div className="text-4xl underline">SPOTIFY</div>
    </div>
    <div className="flex flex-col items-end justify-between pt-5 lg:flex-row lg:items-center">
      <div>TOP</div>
      <div className="mx-1 font-neutralFace text-[30px] font-bold">WORK</div>
      <div className="mx-1 font-neutralFace text-[30px] font-bold">ABOUT</div>
      <div className="mx-1 font-neutralFace text-[30px] font-bold">
        PUBLICATIONS
      </div>
      <div className="mx-1 font-neutralFace text-[30px] font-bold">OFFICE</div>
    </div>
    <div className="h-[2px] w-full bg-white" />
    <div className="mb-2 flex flex-col items-start justify-between lg:mt-20 lg:flex-row lg:items-end">
      <div className="my-5 lg:my-0">COPYRIGHT 2023 - TS</div>
      <div>JOBS</div>
      <div>
        A independent
        <br />
        music agency
      </div>
      <div>open roles</div>
      <div className="mt-5 flex space-x-3">
        <div>INSTAGRAM</div>
        <div>FACEBOOK</div>
        <div>VIMEO</div>
        <div>SPOTIFY</div>
      </div>
    </div>
  </div>
);

export default Footer;
