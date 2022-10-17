import React from 'react';
import { ProductCardProps } from './ProductCard';
import {
  ActualPrice,
  BottomBlock,
  ImageBox,
  NameContainer,
  OldPrice,
  PriceContainer,
  StyledCardLine,
  LeftBlock,
  InfoBlock,
} from './styled';
import { NoImage } from '@ui/icons';

export const ProductCardLine = ({ name, image, price, oldPrice }: ProductCardProps) => {
  return (
    <StyledCardLine height={204}>
      <LeftBlock>
        {image ? (
          <div>
            <img alt={name} src={image} />
          </div>
        ) : (
          <ImageBox>
            <NoImage />
          </ImageBox>
        )}
      </LeftBlock>
      <InfoBlock>
        <NameContainer>{name}</NameContainer>
      </InfoBlock>
      <BottomBlock>
        <PriceContainer>
          {oldPrice && <OldPrice>{oldPrice}</OldPrice>}
          <ActualPrice>{price}</ActualPrice>
        </PriceContainer>
      </BottomBlock>
    </StyledCardLine>
  );
};
