import React from 'react';

import { Carousel } from '@ui/components/Carousel';

import { Container, Row, Col, Header, Typography } from '@ui/components';
import styled from 'styled-components';
import { useNewsCarousel } from '@modules/News/hooks';
import { NewsSlide } from '@modules/News/components/NewsSlide';
import { useNavigate } from 'react-router-dom';
import { CarouselSlideSkeleton } from '@modules/News/components';

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
          <Row wrap={false} indent={12}>
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
