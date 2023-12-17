'use client';

import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

import { ImageModal } from '@common/components/ImageModal';
import { useModal } from '@common/hooks/useModal';
import { PageTitle } from '@layouts/Lampastar';
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
          <StyledImageAbout key={id}>
            <Image src={imageMin} alt={alt} />
          </StyledImageAbout>
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
        <StyledImageBrand>
          <Image src="/brand_abb.png" alt="ABB" />
        </StyledImageBrand>
        <StyledImageBrand>
          <Image src="/brand_dkc.png" alt="DKC" />
        </StyledImageBrand>
        <StyledImageBrand>
          <Image src="/brand_ekf.png" alt="EKF" />
        </StyledImageBrand>
        <StyledImageBrand>
          <Image src="/brand_gsz.png" alt="GZS" />
        </StyledImageBrand>
        <StyledImageBrand>
          <Image src="/brand_iek.png" alt="IEK" />
        </StyledImageBrand>
        <StyledImageBrand>
          <Image src="/brand_nkz.png" alt="NKZ" />
        </StyledImageBrand>
        <StyledImageBrand>
          <Image src="/brand_legrand.png" alt="LEGRAND" />
        </StyledImageBrand>
        <StyledImageBrand>
          <Image src="/brand_se.png" alt="SE" />
        </StyledImageBrand>
        <StyledImageBrand>
          <Image src="/brand_st.png" alt="ST" />
        </StyledImageBrand>
        <StyledImageBrand>
          <Image src="/brand_era.png" alt="ERA" />
        </StyledImageBrand>
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
            <StyledImageCert key={id}>
              <Image src={imageMin} alt={alt} onClick={() => onClickImage(id)} />
            </StyledImageCert>
          ))}
        </CertificatesLine>
      </CertificatesContainer>
      <ImageModal modalId={IMAGE_CERT_MODAL_ID} images={certImages} />
    </>
  );
};
