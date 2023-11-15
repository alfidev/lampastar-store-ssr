'use client';

import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

import { ImageModal } from '@common/components/ImageModal';
import { useModal } from '@common/hooks/useModal';
import { PageTitle } from '@layouts/Lampastar';
import BrandAbb from '@resources/images/about/brand_abb.png';
import BrandDkc from '@resources/images/about/brand_dkc.png';
import BrandEkf from '@resources/images/about/brand_ekf.png';
import BrandEra from '@resources/images/about/brand_era.png';
import BrandGsz from '@resources/images/about/brand_gsz.png';
import BrandIek from '@resources/images/about/brand_iek.png';
import BrandLegrand from '@resources/images/about/brand_legrand.png';
import BrandNkz from '@resources/images/about/brand_nkz.png';
import BrandSe from '@resources/images/about/brand_se.png';
import BrandSt from '@resources/images/about/brand_st.png';
import { Typography } from '@ui/components/Typography';

import { certImages, officeImages } from './constants';
import { INFORMATION_ABOUT, INFORMATION_ONLY_WE, INFORMATION_WHAT_WE_DO } from './information';
import {
  StyledLogo,
  TitleLine,
  TitleLineBackground,
  TitleLineTypography,
  AboutWrapper,
  Item,
  ItemImage,
  Line,
  StyledImageAbout,
  BrandImages,
  StyledImageBrand,
  AboutImages,
  CertificatesContainer,
  StyledImageCert,
  CertificatesLine,
} from './styled';

const TitleLineContainer = React.memo(
  styled(({ title, className }: { title: string; className?: string }) => (
    <TitleLine className={className}>
      <TitleLineBackground />
      <TitleLineTypography>
        <Typography variant="title2">{title}</Typography>
      </TitleLineTypography>
    </TitleLine>
  ))``,
);

TitleLineContainer.displayName = 'TitleLineContainer';

const ItemContainer = React.memo(({ icon, text }: { icon: string; text: string }) => (
  <Item>
    <ItemImage>
      <Image src={icon} alt="" />
    </ItemImage>
    {text}
  </Item>
));

ItemContainer.displayName = 'ItemContainer';

const StyledTitleLineContainer = styled(TitleLineContainer)`
  margin-top: 30px;
`;

const IMAGE_CERT_MODAL_ID = 'IMAGE_CERT_MODAL_ID';

export const AboutPage = () => {
  const { openModal } = useModal();

  const onClickImage = (id: number) => {
    openModal(IMAGE_CERT_MODAL_ID, { currentImageId: id });
  };

  return (
    <>
      <PageTitle>Кто мы</PageTitle>
      <AboutWrapper>
        <StyledLogo />
        <Typography tag="h2" variant="body3">
          Электрика от «Э» до «А»
        </Typography>
        <Typography tag="h3" variant="mini1" color="tertiary">
          Работаем с 2006 года
        </Typography>
      </AboutWrapper>
      <StyledTitleLineContainer title="КТО МЫ" />
      <AboutWrapper>
        {INFORMATION_ABOUT.map(({ icon, text }) => (
          <ItemContainer key={text} icon={icon} text={text} />
        ))}
      </AboutWrapper>
      <Line />
      <AboutImages>
        {officeImages.map(({ id, imageMin, alt }) => (
          <StyledImageAbout key={id} src={imageMin} alt={alt} />
        ))}
      </AboutImages>
      <TitleLineContainer title="ТОЛЬКО МЫ" />
      <AboutWrapper>
        {INFORMATION_ONLY_WE.map(({ icon, text }) => (
          <ItemContainer key={text} icon={icon} text={text} />
        ))}
      </AboutWrapper>
      <Line />
      <BrandImages>
        <StyledImageBrand src={BrandAbb} alt="ABB" />
        <StyledImageBrand src={BrandDkc} alt="DKC" />
        <StyledImageBrand src={BrandEkf} alt="EKF" />
        <StyledImageBrand src={BrandGsz} alt="GZS" />
        <StyledImageBrand src={BrandIek} alt="IEK" />
        <StyledImageBrand src={BrandNkz} alt="NKZ" />
        <StyledImageBrand src={BrandLegrand} alt="LEGRAND" />
        <StyledImageBrand src={BrandSe} alt="SE" />
        <StyledImageBrand src={BrandSt} alt="ST" />
        <StyledImageBrand src={BrandEra} alt="ERA" />
      </BrandImages>
      <TitleLineContainer title="ЧТО УМЕЕМ" />
      <AboutWrapper>
        {INFORMATION_WHAT_WE_DO.map(({ icon, text }) => (
          <ItemContainer key={text} icon={icon} text={text} />
        ))}
      </AboutWrapper>
      <Line />
      <CertificatesContainer>
        <div>Закрываем спецификацию любой сложности в кратчайшие сроки</div>
        <CertificatesLine>
          {certImages.map(({ id, imageMin, alt }) => (
            <StyledImageCert key={id} src={imageMin} alt={alt} onClick={() => onClickImage(id)} />
          ))}
        </CertificatesLine>
      </CertificatesContainer>
      <ImageModal modalId={IMAGE_CERT_MODAL_ID} images={certImages} />
    </>
  );
};
