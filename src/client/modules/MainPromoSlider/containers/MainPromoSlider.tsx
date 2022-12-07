import React from 'react';
import { Slider } from '@ui/components';
import { Slide } from '../components';
import { usePromoSliderData } from '../hooks';
import { promoSliderEnum } from '../constants';
import { useNavigate } from 'react-router-dom';

const getElementId = (type: promoSliderEnum, categoryId?: number, productId?: number) => {
  switch (type) {
    case promoSliderEnum.CATEGORY:
      return categoryId;
    case promoSliderEnum.PRODUCT:
      return productId;
  }
};

export const MainPromoSlider = () => {
  const navigate = useNavigate();

  const { slides } = usePromoSliderData();

  const handleOnClick = (type: promoSliderEnum, elementId?: number) => {
    switch (type) {
      case promoSliderEnum.CATEGORY:
        return navigate(`/catalog/${elementId}`);
    }
  };

  return (
    <>
      <Slider
        slides={slides.map(({ type, background, id, bannerText, buttonText, image, categoryId, productId }) => (
          <Slide
            key={id}
            onClick={handleOnClick}
            type={type}
            elementId={getElementId(type, categoryId, productId)}
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
