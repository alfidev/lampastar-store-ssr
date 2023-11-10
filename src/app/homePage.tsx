import React from 'react';

import { MainPageAbout } from '@modules/About';
import { CAROUSEL_TYPE, CatalogCarousel } from '@modules/Catalog';
import { ProductsTypeResponse } from '@modules/Catalog/types';
import { MainHitsSlider } from '@modules/MainHitsSlider';
import { MainPromoSlider } from '@modules/MainPromoSlider';
import { NewsCarousel } from '@modules/News';
import { NewsResponseType } from '@modules/News/types';
import { Container } from '@ui/components';

import { ContentSection, PromoSection, SliderCol } from './styled';

type Props = {
  mainPromoSliderInitialData: any;
  mainHitsSliderInitialData: ProductsTypeResponse;
  productBuyCarouselInitialData: ProductsTypeResponse;
  productNewCarouselInitialData: ProductsTypeResponse;
  productViewCarouselInitialData: ProductsTypeResponse;
  newsCarouselInitialData: NewsResponseType;
};
export const HomePage = ({
  mainPromoSliderInitialData,
  mainHitsSliderInitialData,
  productViewCarouselInitialData,
  productNewCarouselInitialData,
  productBuyCarouselInitialData,
  newsCarouselInitialData,
}: Props) => (
  <Container>
    <PromoSection indent={12}>
      <SliderCol tablet={12} desktopS={8} desktopM={9}>
        <MainPromoSlider initialData={mainPromoSliderInitialData} />
      </SliderCol>
      <SliderCol tablet={12} desktopS={4} desktopM={3}>
        <MainHitsSlider initialData={mainHitsSliderInitialData} />
      </SliderCol>
    </PromoSection>
    <ContentSection>
      <CatalogCarousel type={CAROUSEL_TYPE.BUY} initialData={productBuyCarouselInitialData} />
    </ContentSection>
    <ContentSection>
      <NewsCarousel initialData={newsCarouselInitialData} />
    </ContentSection>
    <ContentSection>
      <CatalogCarousel type={CAROUSEL_TYPE.NEW} initialData={productNewCarouselInitialData} />
    </ContentSection>
    <ContentSection>
      <MainPageAbout />
    </ContentSection>
    <ContentSection>
      <CatalogCarousel type={CAROUSEL_TYPE.VIEW} initialData={productViewCarouselInitialData} />
    </ContentSection>
  </Container>
);
