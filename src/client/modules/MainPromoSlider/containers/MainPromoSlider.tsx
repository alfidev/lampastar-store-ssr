import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Slider } from '@ui/components';

import { Slide, SlideSkeleton } from '../components';
import { promoSliderEnum } from '../constants';
import { usePromoSliderData } from '../hooks';

const getElementFilter = (type: promoSliderEnum, categoryId?: number, productId?: number, filter?: string) => {
  switch (type) {
    case promoSliderEnum.CATEGORY:
      return categoryId;
    case promoSliderEnum.PRODUCT:
      return productId;
    case promoSliderEnum.FILTER:
      return filter;
    default:
      return productId;
  }
};

export const MainPromoSlider = () => {
  const navigate = useNavigate();

  const { slides, isLoading } = usePromoSliderData();

  const handleOnClick = (type: promoSliderEnum, filter?: number | string) => {
    switch (type) {
      case promoSliderEnum.CATEGORY:
        return navigate(`/catalog/${filter}`);
      case promoSliderEnum.PRODUCT:
        return navigate(`/catalog/products/${filter}`);
      case promoSliderEnum.FILTER:
        return navigate({ pathname: '/catalog', search: filter as string });
      default:
        return navigate(`/catalog/${filter}`);
    }
  };

  if (isLoading) return <SlideSkeleton />;

  return (
    <Slider
      slides={slides.map(
        ({
          type,
          backgroundColor,
          textColor,
          id,
          bannerText,
          buttonText,
          image,
          categoryId,
          productId,
          filter,
          price,
        }) => (
          <Slide
            key={id}
            onClick={handleOnClick}
            type={type}
            elementFilter={getElementFilter(type, categoryId, productId, filter)}
            backgroundColor={backgroundColor}
            textColor={textColor}
            text={bannerText}
            price={price}
            minPrice={!!price && type === promoSliderEnum.CATEGORY}
            buttonText={buttonText}
            image={image}
          />
        ),
      )}
    />
  );
};
