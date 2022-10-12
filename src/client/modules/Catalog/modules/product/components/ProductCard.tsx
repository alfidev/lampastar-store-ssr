import React from 'react';
import { ProductCard as ProductCardUI } from '@ui/components';
import { ProductType } from '../../../types';

type Props = {
  product: ProductType;
};

export const ProductCard = ({ product }: Props) => {
  const { image, name, price, oldPrice } = product;

  const priceString = `${price.toString()} ₽`;
  const oldPriceString = `${oldPrice.toString()} ₽`;

  return <ProductCardUI name={name} image={image} price={priceString} oldPrice={oldPriceString} />;
};
