import React from 'react';
import { LikeActiveIcon, LikeIcon, NoImage } from '@ui/icons';

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
} from './styled';
import { ButtonContained, Counter } from '@ui/components';

export type ProductCardProps = {
  name: string;
  image?: string;
  price: string;
  oldPrice?: string;
  isFavourite: boolean;
  isCompare: boolean;
  countInBasket: number;
  notAvailable: boolean;
  forOder: boolean;
  disabled: boolean;
  onChangeCount: (count: number) => void;
  onChangeFavourite: () => void;
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
  forOder,
  disabled,
  onChangeCount,
  onChangeFavourite,
}: ProductCardProps) => {
  const buttonText = (forOder && 'Под заказ') || (notAvailable && 'Нет в наличии') || 'В корзину';

  const addToBasketHandler = () => {
    onChangeCount(1);
  };

  const onChangeCounter = (count: number) => {
    onChangeCount(count);
  };

  const showCounter = countInBasket && !notAvailable && !forOder && !disabled;

  return (
    <StyledCard height={disabled ? 316 : 372}>
      <TopBlock>
        <ImageBox>{image ? <img alt={name} src={`https://test.lampastar.ru/image${image}`} /> : <NoImage />}</ImageBox>
        <NameContainer>{name}</NameContainer>
      </TopBlock>
      <BottomBlock>
        <PriceContainer>
          {oldPrice && <OldPrice>{oldPrice}</OldPrice>}
          <ActualPrice>{price}</ActualPrice>
        </PriceContainer>
      </BottomBlock>

      {!disabled && (
        <ActionsBlock>
          {showCounter ? (
            <Counter value={countInBasket} onChange={onChangeCounter} />
          ) : (
            <ButtonContained secondary isFluid disabled={notAvailable || forOder} onClick={addToBasketHandler}>
              {buttonText}
            </ButtonContained>
          )}
          {isCompare && (
            <AdditionalButton active={isCompare}>
              <LikeIcon size="xxxl" />
            </AdditionalButton>
          )}
          <AdditionalButton active={isFavourite} onClick={onChangeFavourite}>
            {isFavourite ? <LikeActiveIcon size="xxxl" /> : <LikeIcon size="xxxl" />}
          </AdditionalButton>
        </ActionsBlock>
      )}
    </StyledCard>
  );
};
