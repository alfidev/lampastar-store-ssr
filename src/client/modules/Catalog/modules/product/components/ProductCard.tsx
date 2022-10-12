import React from 'react';
import { ProductCard as ProductCardUI, ProductCardLine as ProductCardLineUI } from '@ui/components';
import { ProductType, ViewModeType } from '../../../types';
import { VIEW_MODE } from '@modules/Catalog/constants';

type Props = {
  product: ProductType;
  mode: ViewModeType;
};

export const ProductCard = ({ product, mode }: Props) => {
  const { image, name, price, oldPrice } = product;

  const priceString = `${price.toString()} ₽`;
  const oldPriceString = `${oldPrice.toString()} ₽`;

  if (mode === VIEW_MODE.grid)
    return <ProductCardUI name={name} image={image} price={priceString} oldPrice={oldPriceString} />;

  return <ProductCardLineUI name={name} image={image} price={priceString} oldPrice={oldPriceString} />;
};
