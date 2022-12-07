import React from 'react';
import { Slider } from '@ui/components';
import { Slide } from '../components';
import { usePromoSliderData } from '../hooks';

export const MainPromoSlider = () => {
  const { slides } = usePromoSliderData();

  return (
    <>
      <Slider
        slides={slides.map(({ type, background, id, bannerText, buttonText, image }) => (
          <Slide
            key={id}
            type={type}
            elementId={id}
            color={background}
            text={bannerText}
            buttonText={buttonText}
            image={image}
          />
        ))}
      />
    </>
  );
};
