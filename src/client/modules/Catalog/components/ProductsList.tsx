import React from 'react';
import { ProductType, ViewModeType } from '../types';
import { Container, Row, Col } from '@ui/components/Adaptive';
import { ProductCard } from '../modules/product';
import styled from 'styled-components';
import { VIEW_MODE } from '@modules/Catalog/constants';

type Props = {
  products: ProductType[];
  mode: ViewModeType;
};

const StyledCol = styled(Col)`
  margin-bottom: 16px;
`;

export const ProductsList = ({ products, mode }: Props) => {
  const lineModeValue = mode === VIEW_MODE.list && 12;

  return (
    <Container>
      <Row indent={8}>
        {products.map((product) => (
          <StyledCol
            key={product.id}
            mobile={lineModeValue || 12}
            tablet={lineModeValue || 6}
            desktopS={lineModeValue || 4}
          >
            <ProductCard mode={mode} product={product} />
          </StyledCol>
        ))}
      </Row>
    </Container>
  );
};
