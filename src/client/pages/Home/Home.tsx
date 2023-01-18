import React from 'react';

import { MainPageAbout } from '@modules/About';
import { CAROUSEL_TYPE, CatalogCarousel } from '@modules/Catalog';
import { MainHitsSlider } from '@modules/MainHitsSlider';
import { MainPromoSlider } from '@modules/MainPromoSlider';
import { NewsCarousel } from '@modules/News';
import { Container } from '@ui/components';

import { ContentSection, PromoSection, SliderCol } from './styled';

export const Home = () => (
  <Container>
    <PromoSection indent={12}>
      <SliderCol tablet={12} desktopS={8} desktopM={9}>
        <MainPromoSlider />
      </SliderCol>
      <SliderCol tablet={12} desktopS={4} desktopM={3}>
        <MainHitsSlider />
      </SliderCol>
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
