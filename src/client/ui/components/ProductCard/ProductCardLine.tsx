import React from 'react';
import { ProductCardProps } from './ProductCard';
import {
  ActualPrice,
  BottomBlock,
  NameContainer,
  OldPrice,
  PriceContainer,
  StyledCardLine,
  LeftBlock,
  InfoBlock,
  ImageBoxLine,
} from './styled';
import { NoImage } from '@ui/icons';

export const ProductCardLine = ({ name, image, price, oldPrice }: ProductCardProps) => {
  return (
    <StyledCardLine height={204}>
      <LeftBlock>
        <ImageBoxLine>{image ? <img alt={name} src={`${image}`} /> : <NoImage />}</ImageBoxLine>
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
