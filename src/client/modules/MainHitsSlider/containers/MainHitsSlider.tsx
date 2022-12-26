import React from 'react';
import { Slider } from '@ui/components';
import { Slide, SlideSkeleton } from '../components';
import { useHitsSliderData } from '../hooks';

export const MainHitsSlider = () => {
  const { list, isLoading } = useHitsSliderData();

  if (isLoading) return <SlideSkeleton />;

  return (
    <>
      <Slider
        enableAuto={false}
        slides={list.map((product, index) => (
          <Slide key={index} product={product} />
        ))}
      />
    </>
  );
};
