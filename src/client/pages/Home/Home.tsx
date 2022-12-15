import React from 'react';
import { ContentSection, PromoSection, SliderCol } from './styled';
import { MainPromoSlider } from '@modules/MainPromoSlider';
import { MainHitsSlider } from '@modules/MainHitsSlider';
import { Container } from '@ui/components';
import { CAROUSEL_TYPE, CatalogCarousel } from '@modules/Catalog';
import { NewsCarousel } from '@modules/News';
import { MainPageAbout } from '@modules/About';

export const Home = () => {
  return (
    <Container>
      <PromoSection indent={12}>
        <SliderCol tablet={7} desktopS={8} desktopM={9}>
          <MainPromoSlider />
        </SliderCol>
        <SliderCol tablet={5} desktopS={4} desktopM={3}>
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
};
