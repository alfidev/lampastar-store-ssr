import React from 'react';

import { Card } from '@ui/components';
import { BottomBlock, ImageBox, OldPrice, TopBlock } from '@ui/components/ProductCard/styled';
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

export const ActualPrice = styled.div`
  ${({ theme }) => theme.typography.main2};
  margin-left: 10px;
  white-space: nowrap;
`;

const OnBuy = styled.span`
  color: ${({ theme }) => theme.color.text.contrastLine};
`;

export const NameContainer = styled.div`
  word-break: break-word;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;

  /* Ограничиваем блок текста тремя строками */
  -webkit-line-clamp: 2;
`;

export const PriceContainer = styled.div`
  margin-top: ${({ theme }) => theme.indents.s};
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Slide = ({ product }: Props) => {
  const { image, name, price, special, discount } = product;

  const priceString = price ? formatSum(special || discount || price) : undefined;
  const oldPriceString = priceString && (special || discount) ? formatSum(price) : undefined;

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
