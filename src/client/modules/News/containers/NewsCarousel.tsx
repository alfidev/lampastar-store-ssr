import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { Container, Row, Col, Header, Typography } from '@ui/components';
import { Carousel } from '@ui/components/Carousel';

import { CarouselSlideSkeleton } from '../components';
import { NewsSlide } from '../components/NewsSlide';
import { useNewsCarousel } from '../hooks';

const StyledHeader = styled(Header)`
  margin-top: ${({ theme }) => theme.indents.xxxl};
  margin-bottom: ${({ theme }) => theme.indents.m};
`;

const TitleTypography = styled(Typography).attrs({ tag: 'h2', variant: 'main1' })`
  margin: 0;
`;

export const NewsCarousel = () => {
  const navigate = useNavigate();
  const { list, isLoading } = useNewsCarousel();

  const handleOnClick = (id: number) => {
    navigate(`/news/${id}`);
  };

  return (
    <>
      <StyledHeader title={<TitleTypography>Новости</TitleTypography>} />
      <Carousel>
        <Container>
          <Row isWrap={false} indent={12}>
            {isLoading
              ? [...Array(6)].map((_item, index) => (
                  <Col key={index} mobile={6} tablet={3} desktopS={2}>
                    <CarouselSlideSkeleton />
                  </Col>
                ))
              : list.map((news) => (
                  <Col key={news.id} mobile={6} tablet={3} desktopS={2}>
                    <NewsSlide key={news.id} news={news} onClick={handleOnClick} />
                  </Col>
                ))}
          </Row>
        </Container>
      </Carousel>
    </>
  );
};
