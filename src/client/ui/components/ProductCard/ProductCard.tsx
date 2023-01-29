import React from 'react';

import { USE_COMPARE, USE_FAVORITES, USE_ORDER, useFeature } from '@common/featureToggles';
import { Compare, Like, NoImage } from '@ui/icons';

import { ButtonContained } from '../Button';
import { Counter } from '../Counter';
import { ProductCardActionsSkeleton } from './ProductCardActionsSkeleton';
import {
  BottomBlock,
  StyledCard,
  ImageBox,
  TopBlock,
  PriceContainer,
  ActualPrice,
  OldPrice,
  NameContainer,
  ActionsBlock,
  AdditionalButton,
  LikeActive,
} from './styled';

export type ProductCardProps = {
  name: string;
  image?: string;
  price?: string;
  oldPrice?: string;
  isFavourite: boolean;
  isCompare: boolean;
  countInBasket: number;
  notAvailable: boolean;
  forOrder: boolean;
  onChangeCount: (count: number) => void;
  onChangeFavourite: () => void;
  onChangeCompare: () => void;
  onClickCard: () => void;
  isLoading: boolean;
};

export const ProductCard = ({
  name,
  image,
  price,
  oldPrice,
  isFavourite,
  isCompare,
  notAvailable,
  countInBasket,
  forOrder,
  onChangeCount,
  onChangeFavourite,
  onChangeCompare,
  onClickCard,
  isLoading,
}: ProductCardProps) => {
  const enableOrderFeature = useFeature(USE_ORDER);
  const enableFavoriteFeature = useFeature(USE_FAVORITES);
  const enableCompareFeature = useFeature(USE_COMPARE);

  const buttonText =
    (forOrder && 'Под заказ') ||
    (notAvailable && 'Нет в наличии') ||
    (!enableOrderFeature && 'В наличии') ||
    'В корзину';

  const addToBasketHandler = () => {
    onChangeCount(1);
  };

  const onChangeCounter = (count: number) => {
    onChangeCount(count);
  };

  const showCounter = enableOrderFeature && countInBasket && !notAvailable && !forOrder;

  const renderActions = () => {
    if (isLoading) return <ProductCardActionsSkeleton />;

    return (
      <>
        {showCounter ? (
          <Counter value={countInBasket} onChange={onChangeCounter} />
        ) : (
          <ButtonContained
            secondary
            isFluid
            disabled={!enableOrderFeature || notAvailable || forOrder}
            onClick={addToBasketHandler}
          >
            {buttonText}
          </ButtonContained>
        )}
        {enableCompareFeature && (
          <AdditionalButton active={isCompare} onClick={onChangeCompare}>
            <Compare />
          </AdditionalButton>
        )}
        {enableFavoriteFeature && (
          <AdditionalButton active={isFavourite} onClick={onChangeFavourite}>
            {isFavourite ? <LikeActive /> : <Like />}
          </AdditionalButton>
        )}
      </>
    );
  };

  return (
    <StyledCard height={372}>
      <TopBlock onClick={onClickCard}>
        <ImageBox>{image ? <img alt={name} src={`${image}`} /> : <NoImage />}</ImageBox>
        <NameContainer>{name}</NameContainer>
      </TopBlock>
      <BottomBlock onClick={onClickCard}>
        <PriceContainer>
          {oldPrice && <OldPrice>{oldPrice}</OldPrice>}
          {price && <ActualPrice>{price}</ActualPrice>}
        </PriceContainer>
      </BottomBlock>
      <ActionsBlock>{renderActions()}</ActionsBlock>
    </StyledCard>
  );
};
