import React, { useState } from 'react';
import { ProductCard as ProductCardUI, ProductCardLine as ProductCardLineUI } from '@ui/components';
import { ProductType, ViewModeType } from '../../../types';
import { VIEW_MODE } from '@modules/Catalog/constants';

type Props = {
  product: ProductType;
  mode: ViewModeType;
  onChangeCount: (product: ProductType, count: number) => void;
  onChangeFavourite: (product: ProductType, value: boolean) => void;
  disabled?: boolean;
};

export const ProductCard = ({ product, mode, onChangeCount, onChangeFavourite, disabled }: Props) => {
  const { image, name, price, oldPrice } = product;

  const [count, setCount] = useState(0);
  const [isFavourite, setIsFavourite] = useState(false);

  const priceString = `${price.toString()} ₽`;
  const oldPriceString = oldPrice ? `${oldPrice.toString()} ₽` : undefined;

  const isCompare = false;
  const notAvailable = false;
  const forOder = false;

  const onChangeCountHandler = (count: number) => {
    if (!notAvailable && !forOder && !disabled) onChangeCount(product, count);

    setCount(count);
  };

  const onChangeFavouriteHandler = () => {
    if (!notAvailable && !forOder && !disabled) onChangeFavourite(product, !isFavourite);

    setIsFavourite(!isFavourite);
  };

  if (mode === VIEW_MODE.grid)
    return (
      <ProductCardUI
        name={name}
        image={image}
        price={priceString}
        oldPrice={oldPriceString}
        isCompare={isCompare}
        isFavourite={isFavourite}
        notAvailable={notAvailable}
        countInBasket={count}
        forOder={forOder}
        disabled={!!disabled}
        onChangeCount={onChangeCountHandler}
        onChangeFavourite={onChangeFavouriteHandler}
      />
    );

  return (
    <ProductCardLineUI
      name={name}
      image={image}
      price={priceString}
      oldPrice={oldPriceString}
      isCompare={isCompare}
      isFavourite={isFavourite}
      notAvailable={notAvailable}
      countInBasket={count}
      forOder={forOder}
      disabled={!!disabled}
      onChangeCount={onChangeCountHandler}
      onChangeFavourite={onChangeFavouriteHandler}
    />
  );
};
