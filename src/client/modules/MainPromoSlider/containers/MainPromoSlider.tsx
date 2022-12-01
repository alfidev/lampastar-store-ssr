import React from 'react';
import { Slider } from '@ui/components';
import { Slide } from '../components';
import { usePromoSliderData } from '../hooks';

export const MainPromoSlider = () => {
  const { slides } = usePromoSliderData();

  return (
    <>
      <Slider
        slides={slides.map(({ type, background, elementId }, index) => (
          <Slide key={index} type={type} elementId={elementId} color={background} />
        ))}
      />
    </>
  );
};
