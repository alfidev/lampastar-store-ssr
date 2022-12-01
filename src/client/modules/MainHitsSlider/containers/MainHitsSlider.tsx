import React from 'react';
import { Slider } from '@ui/components';
import { Slide } from '../components';
import { useHitsSliderData } from '../hooks';

export const MainHitsSlider = () => {
  const { list } = useHitsSliderData();

  return (
    <>
      <Slider
        slides={list.map((product, index) => (
          <Slide key={index} product={product} />
        ))}
      />
    </>
  );
};
