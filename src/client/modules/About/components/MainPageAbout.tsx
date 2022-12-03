import React from 'react';
import { AboutItem } from './AboutItem';
import { FastDelivery, PriceTag, Speed, Sync } from '@ui/icons';
import styled from 'styled-components';
import { Header, Typography } from '@ui/components';
import { Container, Row, Col } from '@ui/components';

const StyledHeader = styled(Header)`
  margin-top: ${({ theme }) => theme.indents.xxxl};
  margin-bottom: ${({ theme }) => theme.indents.m};
`;

const TitleTypography = styled(Typography).attrs({ tag: 'h2', variant: 'main1' })`
  margin: 0;
`;

export const MainPageAbout = () => {
  return (
    <>
      <StyledHeader title={<TitleTypography>Наши преимущества</TitleTypography>} />
      <Container>
        <Row indent={12}>
          <Col mobile={3}>
            <AboutItem icon={<Sync />} text="Быстрый обмен и возврат" />
          </Col>
          <Col mobile={3}>
            <AboutItem icon={<PriceTag />} text="Беспроцентная рассрочка" />
          </Col>
          <Col mobile={3}>
            <AboutItem icon={<FastDelivery />} text="Удобная доставка" />
          </Col>
          <Col mobile={3}>
            <AboutItem icon={<Speed />} text="Тест-драйв" />
          </Col>
        </Row>
      </Container>
    </>
  );
};
