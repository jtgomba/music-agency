'use client';

import React, { useLayoutEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import Header from '@/components/Header';
import WhoWeAre from '@/components/WhoWeAre';
import Concepts from '@/components/Concepts';
import SwiperSliderComponent from '@/components/SwiperComponent';
import Publications from '@/components/Publications';
import Awards from '@/components/Awards';
import Office from '@/components/Office';
import Footer from '@/components/Footer';
import Loader from './Loader';

const Home = () => {
  const [loaderFinished, setLoaderFinished] = useState(false);
  const timeline = useRef<gsap.core.Timeline>();

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      timeline.current = gsap.timeline({
        onComplete: () => {
          setLoaderFinished(true);
        },
      });
    });

    return () => context.revert();
  }, []);

  return (
    <main>
      {loaderFinished ? (
        <div className="uppercase text-[#e7e7e7] ">
          <Header />
          <SwiperSliderComponent />
          <WhoWeAre />
          <Concepts />
          <Publications />
          <Awards />
          <Office />
          <Footer />
        </div>
      ) : (
        <Loader timeline={timeline.current} />
      )}
    </main>
  );
};

export default Home;
