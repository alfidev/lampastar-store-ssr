import React, { useState } from 'react';
import { ProductCard as ProductCardUI, ProductCardLine as ProductCardLineUI } from '@ui/components';
import { ProductType, ViewModeType } from '../../../types';
import { VIEW_MODE } from '@modules/Catalog/constants';
import { formatSum } from '@common/utils';

type Props = {
  product: ProductType;
  mode: ViewModeType;
  onChangeCount: (product: ProductType, count: number) => void;
  onChangeFavourite: (product: ProductType, value: boolean) => void;
};

export const ProductCard = ({ product, mode, onChangeCount, onChangeFavourite }: Props) => {
  const { image, name, price, oldPrice, notAvailable, forOrder, available } = product;

  const [count, setCount] = useState(0);
  const [isFavourite, setIsFavourite] = useState(false);

  const priceString = price ? formatSum(price) : undefined;
  const oldPriceString = oldPrice ? formatSum(oldPrice) : undefined;

  const isCompare = false;

  const onChangeCountHandler = (count: number) => {
    if (!notAvailable && !forOrder && !available) {
      onChangeCount(product, count);
      setCount(count);
    }
  };

  const onChangeFavouriteHandler = () => {
    if (!notAvailable && !forOrder && !available) {
      onChangeFavourite(product, !isFavourite);
      setIsFavourite(!isFavourite);
    }
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
        available={available}
        countInBasket={count}
        forOrder={forOrder}
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
      available={available}
      countInBasket={count}
      forOrder={forOrder}
      onChangeCount={onChangeCountHandler}
      onChangeFavourite={onChangeFavouriteHandler}
    />
  );
};
