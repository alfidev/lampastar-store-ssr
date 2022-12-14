import React, { useState } from 'react';
import { ProductCard as ProductCardUI, ProductCardLine as ProductCardLineUI } from '@ui/components';
import { ProductType, ViewModeType } from '../../../types';
import { VIEW_MODE } from '@modules/Catalog/constants';
import { formatSum } from '@common/utils';

type Props = {
  product: ProductType;
  mode?: ViewModeType;
  onChangeCount: (product: ProductType, count: number) => void;
  onChangeFavourite: (product: ProductType, value: boolean) => void;
  onClickCard: (id: number) => void;
};

export const ProductCard = ({
  product,
  mode = VIEW_MODE.grid,
  onChangeCount,
  onChangeFavourite,
  onClickCard,
}: Props) => {
  const { image, name, price, discount, special, notAvailable, forOrder, available, id } = product;

  const [count, setCount] = useState(0);
  const [isFavourite, setIsFavourite] = useState(false);

  const priceString = price ? formatSum(special || discount || price) : undefined;
  const oldPriceString = priceString && (special || discount) ? formatSum(price) : undefined;

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

  const onClickCardHandler = () => {
    onClickCard(id);
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
        onClickCard={onClickCardHandler}
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
      onClickCard={onClickCardHandler}
    />
  );
};
