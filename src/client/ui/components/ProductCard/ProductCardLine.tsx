import React from 'react';

import { NoImage } from '@ui/icons';

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

export const ProductCardLine = ({ name, image, price, oldPrice }: ProductCardProps) => (
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
