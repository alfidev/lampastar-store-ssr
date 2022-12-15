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
  price?: string;
  oldPrice?: string;
  isFavourite: boolean;
  isCompare: boolean;
  countInBasket: number;
  notAvailable: boolean;
  available: boolean;
  forOrder: boolean;
  onChangeCount: (count: number) => void;
  onChangeFavourite: () => void;
  onClickCard: () => void;
};

export const ProductCard = ({
  name,
  image,
  price,
  oldPrice,
  isFavourite,
  isCompare,
  notAvailable,
  available,
  countInBasket,
  forOrder,
  onChangeCount,
  onChangeFavourite,
  onClickCard,
}: ProductCardProps) => {
  const buttonText =
    (forOrder && 'Под заказ') || (notAvailable && 'Нет в наличии') || (available && 'В наличии') || 'В корзину';

  const addToBasketHandler = () => {
    onChangeCount(1);
  };

  const onChangeCounter = (count: number) => {
    onChangeCount(count);
  };

  const showCounter = countInBasket && !notAvailable && !forOrder;

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
      <ActionsBlock>
        {showCounter ? (
          <Counter value={countInBasket} onChange={onChangeCounter} />
        ) : (
          <ButtonContained
            secondary
            isFluid
            disabled={notAvailable || forOrder || available}
            onClick={addToBasketHandler}
          >
            {buttonText}
          </ButtonContained>
        )}
        {false && (
          <AdditionalButton active={isCompare}>
            <LikeIcon size="xxxl" />
          </AdditionalButton>
        )}
        {false && (
          <AdditionalButton active={isFavourite} onClick={onChangeFavourite}>
            {isFavourite ? <LikeActiveIcon size="xxxl" /> : <LikeIcon size="xxxl" />}
          </AdditionalButton>
        )}
      </ActionsBlock>
    </StyledCard>
  );
};
