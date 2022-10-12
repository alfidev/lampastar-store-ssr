import React from 'react';
import { ProductType } from '../types';
import { Container, Row, Col } from '@ui/components/Adaptive';
import { ProductCard } from '../modules/product';
import styled from 'styled-components';

type Props = {
  products: ProductType[];
  lineMode?: boolean;
};

const StyledCol = styled(Col)`
  margin-bottom: 16px;
`;

export const ProductsList = ({ products, lineMode }: Props) => {
  const lineModeValue = lineMode && 12;

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
            <ProductCard product={product} />
          </StyledCol>
        ))}
      </Row>
    </Container>
  );
};
