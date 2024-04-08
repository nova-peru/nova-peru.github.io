'use client';

import { useEffect, useState } from 'react';
import TextTransition, { presets } from 'react-text-transition';

type Props = {
  textArr: string[];
  delay?: number;
};

export default function TextSwiper({ textArr, delay = 3000 }: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), delay);
    return () => clearTimeout(intervalId);
  }, [delay]);

  return (
    <TextTransition springConfig={presets.gentle}>
      {textArr[index % textArr.length]}
    </TextTransition>
  );
}
