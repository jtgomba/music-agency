import React, { useEffect, useRef, MutableRefObject } from 'react';
import { words } from './data';

import styles from './Loader.module.css';
import { introAnimation, collapseWords, progressAnimation } from './animations';

const Loader = ({
  timeline,
}: {
  timeline: MutableRefObject<gsap.core.Timeline | undefined>;
}) => {
  const loaderRef = useRef(null);
  const progressRef = useRef(null);
  const progressNumberRef = useRef(null);
  const wordGroupsRef = useRef(null);

  useEffect(() => {
    if (timeline.current) {
      timeline.current
        .add(introAnimation(wordGroupsRef))
        .add(progressAnimation(progressRef, progressNumberRef), 0)
        .add(collapseWords(loaderRef));
    }
  }, [timeline]);

  return (
    <div className={styles.loader__wrapper}>
      <div className={styles.loader__progressWrapper}>
        <div
          className={styles.loader__progress}
          ref={progressRef}
        />
        <span
          className={styles.loader__progressNumber}
          ref={progressNumberRef}
        >
          0
        </span>
      </div>
      <div
        className={styles.loader}
        ref={loaderRef}
      >
        <div className={styles.loader__words}>
          <div className={styles.loader__overlay} />
          <div
            ref={wordGroupsRef}
            className={styles.loader__wordsGroup}
          >
            {words.map((word, index) => (
              <span
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                className={styles.loader__word}
              >
                {word}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
