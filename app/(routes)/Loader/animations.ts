import { gsap } from 'gsap';
import { MutableRefObject } from 'react';

export const introAnimation = (wordGroupsRef: MutableRefObject<null>) => {
  const tl = gsap.timeline();
  tl.to(wordGroupsRef.current, {
    yPercent: -80,
    duration: 5,
    ease: 'power3.inOut',
  });

  return tl;
};

export const collapseWords = (wordGroupsRef: MutableRefObject<null>) => {
  const tl = gsap.timeline();
  tl.to(wordGroupsRef.current, {
    'clip-path': 'polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%)',
    duration: 1,
    ease: 'expo.inOut',
  });

  return tl;
};

export const progressAnimation = (
  progressRef: MutableRefObject<null>,
  progressNumberRef: MutableRefObject<null>
) => {
  const tl = gsap.timeline();

  tl.to(progressRef.current, {
    scaleX: 1,
    duration: 5,
    ease: 'power3.inOut',
  })
    .to(
      progressNumberRef.current,
      {
        x: '100vw',
        duration: 5,
        ease: 'power3.inOut',
      },
      '<'
    )
    .to(
      progressNumberRef.current,
      {
        textContent: '100',
        duration: 5,
        roundProps: 'textContent',
      },
      '<'
    )
    .to(progressNumberRef.current, {
      y: 24,
      autoAlpha: 0,
    })
    .to(
      progressRef.current,
      {
        y: 100,
      },
      '<'
    );

  return tl;
};
