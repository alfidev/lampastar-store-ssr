import React from 'react';
import styled from 'styled-components';

import { NoImage } from '@ui/icons';

import { ProductType } from '../types';

type Props = {
  product: ProductType;
};

const ProductWrapper = styled.div`
  display: flex;
`;

const ProductImageContainer = styled.div`
  height: 68px;
  width: 68px;
`;

const ProductImage = styled.img`
  min-width: 68px;
  max-width: 68px;
`;

export const ProductItem = ({ product }: Props) => {
  const { name, image } = product;
  return (
    <ProductWrapper>
      <ProductImageContainer>{image ? <ProductImage src={image} /> : <NoImage />}</ProductImageContainer>
      {name}
    </ProductWrapper>
  );
};
