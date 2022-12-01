import React from 'react';

import { Card } from '@ui/components';
import {
  ActualPrice,
  BottomBlock,
  ImageBox,
  NameContainer,
  OldPrice,
  PriceContainer,
  TopBlock,
} from '@ui/components/ProductCard/styled';
import { NoImage } from '@ui/icons';
import { Tag } from '@ui/components';
import { ProductType } from '@modules/Catalog/types';
import styled from 'styled-components';
import { formatSum } from '@common/utils';

type Props = {
  product: ProductType;
};

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
`;

const TagsBlock = styled.div`
  display: flex;

  > * {
    margin-right: ${({ theme }) => theme.indents.xs};
  }
`;

const OnBuy = styled.span`
  color: ${({ theme }) => theme.color.text.contrastLine};
`;

export const Slide = ({ product }: Props) => {
  const { image, name, price, oldPrice } = product;

  const priceString = price ? formatSum(price) : undefined;
  const oldPriceString = oldPrice ? formatSum(oldPrice) : undefined;

  return (
    <StyledCard height={300}>
      <TopBlock>
        <TagsBlock>
          <Tag.Sale />
          <OnBuy>Успей купить!</OnBuy>
        </TagsBlock>
        <ImageBox>{image ? <img alt={name} src={`${image}`} /> : <NoImage />}</ImageBox>
        <NameContainer>{name}</NameContainer>
      </TopBlock>
      <BottomBlock>
        <PriceContainer>
          {oldPriceString && <OldPrice>{oldPriceString}</OldPrice>}
          {priceString && <ActualPrice>{priceString}</ActualPrice>}
        </PriceContainer>
      </BottomBlock>
    </StyledCard>
  );
};
