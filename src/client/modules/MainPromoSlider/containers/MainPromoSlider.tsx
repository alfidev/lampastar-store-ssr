import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Slider } from '@ui/components';

import { Slide, SlideSkeleton } from '../components';
import { promoSliderEnum } from '../constants';
import { usePromoSliderData } from '../hooks';

const getElementId = (type: promoSliderEnum, categoryId?: number, productId?: number) => {
  switch (type) {
    case promoSliderEnum.CATEGORY:
      return categoryId;
    case promoSliderEnum.PRODUCT:
      return productId;
    default:
      return productId;
  }
};

export const MainPromoSlider = () => {
  const navigate = useNavigate();

  const { slides, isLoading } = usePromoSliderData();

  const handleOnClick = (type: promoSliderEnum, elementId?: number) => {
    switch (type) {
      case promoSliderEnum.CATEGORY:
        return navigate(`/catalog/${elementId}`);
      case promoSliderEnum.PRODUCT:
        return navigate(`/catalog/products/${elementId}`);
      default:
        return navigate(`/catalog/${elementId}`);
    }
  };

  if (isLoading) return <SlideSkeleton />;

  return (
    <Slider
      slides={slides.map(
        ({ type, backgroundColor, textColor, id, bannerText, buttonText, image, categoryId, productId, price }) => (
          <Slide
            key={id}
            onClick={handleOnClick}
            type={type}
            elementId={getElementId(type, categoryId, productId)}
            backgroundColor={backgroundColor}
            textColor={textColor}
            text={bannerText}
            price={price}
            buttonText={buttonText}
            image={image}
          />
        ),
      )}
    />
  );
};
