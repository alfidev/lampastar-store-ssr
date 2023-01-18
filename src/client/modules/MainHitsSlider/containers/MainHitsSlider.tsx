import React from 'react';

import { Slider } from '@ui/components';

import { useProductActions } from '../../Catalog/hooks';
import { Slide, SlideSkeleton } from '../components';
import { useHitsSliderData } from '../hooks';

export const MainHitsSlider = () => {
  const { list, isLoading } = useHitsSliderData();
  const { handleClickCard } = useProductActions();

  if (isLoading) return <SlideSkeleton />;

  return (
    <Slider
      enableAuto={false}
      slides={list.map((product) => (
        <Slide key={product.id} product={product} onClick={handleClickCard} />
      ))}
    />
  );
};
