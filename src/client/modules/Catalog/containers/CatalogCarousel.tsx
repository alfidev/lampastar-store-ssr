import React from 'react';
import { CarouselType } from '../types';
import { Carousel } from '@ui/components/Carousel';
import { useProductsCarousel, useProductActions } from '../hooks';
import { ProductCard } from '../modules/product';
import { Container, Row, Col, Header, Typography } from '@ui/components';
import styled from 'styled-components';
import { CarouselSkeleton } from '../components';

type Props = {
  type: CarouselType;
};

const getTitle = (type: CarouselType) => {
  switch (type) {
    case 'BUY':
      return 'Лидеры продаж';
    case 'NEW':
      return 'Новинки';
    case 'VIEW':
      return 'Самые просматриваемые';
  }
};

const StyledHeader = styled(Header)`
  margin-top: ${({ theme }) => theme.indents.xxxl};
  margin-bottom: ${({ theme }) => theme.indents.m};
`;

const TitleTypography = styled(Typography).attrs({ tag: 'h2', variant: 'main1' })`
  margin: 0;
`;

export const CatalogCarousel = ({ type }: Props) => {
  const { list, isLoading } = useProductsCarousel(type);
  const { handleChangeFavourite, handleChangeCount } = useProductActions();
  const { handleClickCard } = useProductActions();

  return (
    <>
      <StyledHeader title={<TitleTypography>{getTitle(type)}</TitleTypography>} />
      <Carousel isLoading={isLoading}>
        <Container>
          <Row wrap={false} indent={12}>
            {isLoading ? (
              <CarouselSkeleton />
            ) : (
              list.map((product) => (
                <Col key={product.id} mobile={8} tablet={4} desktopS={3}>
                  <ProductCard
                    product={product}
                    onChangeCount={handleChangeCount}
                    onChangeFavourite={handleChangeFavourite}
                    onClickCard={handleClickCard}
                  />
                </Col>
              ))
            )}
          </Row>
        </Container>
      </Carousel>
    </>
  );
};
