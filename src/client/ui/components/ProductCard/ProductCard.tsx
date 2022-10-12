import React from 'react';
import { NoImage } from '@ui/icons';
import {
  BottomBlock,
  StyledCard,
  ImageBox,
  TopBlock,
  PriceContainer,
  ActualPrice,
  OldPrice,
  NameContainer,
} from './styled';

export type ProductCardProps = {
  name: string;
  image?: string;
  price: string;
  oldPrice: string;
};

export const ProductCard = ({ name, image, price, oldPrice }: ProductCardProps) => {
  return (
    <StyledCard height={316}>
      <TopBlock>
        {image ? (
          <div>
            <img alt={name} src={image} />
          </div>
        ) : (
          <ImageBox>
            <NoImage />
          </ImageBox>
        )}
        <NameContainer>{name}</NameContainer>
      </TopBlock>
      <BottomBlock>
        <PriceContainer>
          <OldPrice>{oldPrice}</OldPrice>
          <ActualPrice>{price}</ActualPrice>
        </PriceContainer>
      </BottomBlock>
    </StyledCard>
  );
};
