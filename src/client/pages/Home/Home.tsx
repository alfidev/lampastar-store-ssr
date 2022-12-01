import React from 'react';
import { ContentSection, PromoSection } from './styled';
import { MainPromoSlider } from '@modules/MainPromoSlider';
import { MainHitsSlider } from '@modules/MainHitsSlider';
import { Container, Col } from '@ui/components';
import { CAROUSEL_TYPE, CatalogCarousel } from '@modules/Catalog';
import { NewsCarousel } from '@modules/News';
import { MainPageAbout } from '@modules/About';

export const Home = () => {
  return (
    <Container>
      <PromoSection indent={12}>
        <Col desktopS={9}>
          <MainPromoSlider />
        </Col>
        <Col desktopS={3}>
          <MainHitsSlider />
        </Col>
      </PromoSection>
      <ContentSection>
        <CatalogCarousel type={CAROUSEL_TYPE.BUY} />
      </ContentSection>
      <ContentSection>
        <NewsCarousel />
      </ContentSection>
      <ContentSection>
        <CatalogCarousel type={CAROUSEL_TYPE.NEW} />
      </ContentSection>
      <ContentSection>
        <MainPageAbout />
      </ContentSection>
      <ContentSection>
        <CatalogCarousel type={CAROUSEL_TYPE.VIEW} />
      </ContentSection>
    </Container>
  );
};
