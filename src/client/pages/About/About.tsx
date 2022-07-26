import React from "react";
import { PageTitle } from "@layouts/Lampastar";
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
} from "./styled";
import { Typography } from "@ui/components/Typography";
import {
  INFORMATION_ABOUT,
  INFORMATION_ONLY_WE,
  INFORMATION_WHAT_WE_DO,
} from "./information";

import BrandAbb from "@resources/images/about/brand_abb.png";
import BrandDkc from "@resources/images/about/brand_dkc.png";
import BrandEkf from "@resources/images/about/brand_ekf.png";
import BrandEra from "@resources/images/about/brand_era.png";
import BrandGsz from "@resources/images/about/brand_gsz.png";
import BrandIek from "@resources/images/about/brand_iek.png";
import BrandLegrand from "@resources/images/about/brand_legrand.png";
import BrandNkz from "@resources/images/about/brand_nkz.png";
import BrandSe from "@resources/images/about/brand_se.png";
import BrandSt from "@resources/images/about/brand_st.png";

import AboutImage1 from "@resources/images/about/o_nas_photo_1.png";
import AboutImage2 from "@resources/images/about/o_nas_photo_2.png";

import CertificateImg from "@resources/images/about/certificate.png";

const TitleLineContainer = React.memo(({ title }: { title: string }) => (
  <TitleLine>
    <TitleLineBackground />
    <TitleLineTypography>
      <Typography variant="title2">{title}</Typography>
    </TitleLineTypography>
  </TitleLine>
));

TitleLineContainer.displayName = "TitleLineContainer";

const ItemContainer = React.memo(
  ({
    icon: Icon,
    text,
  }: {
    icon: React.FC<{ size: string }>;
    text: string;
  }) => (
    <Item>
      <ItemImage>
        <Icon size="40px" />
      </ItemImage>
      {text}
    </Item>
  )
);

ItemContainer.displayName = "ItemContainer";

export const About = () => {
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
      <TitleLineContainer title="КТО МЫ" />
      <AboutWrapper>
        {INFORMATION_ABOUT.map(({ icon, text }) => (
          <ItemContainer key={icon} icon={icon} text={text} />
        ))}
      </AboutWrapper>
      <Line />
      <AboutImages>
        <StyledImageAbout src={AboutImage1} />
        <StyledImageAbout src={AboutImage2} />
      </AboutImages>
      <TitleLineContainer title="ТОЛЬКО МЫ" />
      <AboutWrapper>
        {INFORMATION_ONLY_WE.map(({ icon, text }) => (
          <ItemContainer key={icon} icon={icon} text={text} />
        ))}
      </AboutWrapper>
      <Line />
      <BrandImages>
        <StyledImageBrand src={BrandAbb} />
        <StyledImageBrand src={BrandDkc} />
        <StyledImageBrand src={BrandEkf} />
        <StyledImageBrand src={BrandGsz} />
        <StyledImageBrand src={BrandIek} />
        <StyledImageBrand src={BrandNkz} />
        <StyledImageBrand src={BrandLegrand} />
        <StyledImageBrand src={BrandSe} />
        <StyledImageBrand src={BrandSt} />
        <StyledImageBrand src={BrandEra} />
      </BrandImages>
      <TitleLineContainer title="ЧТО УМЕЕМ" />
      <AboutWrapper>
        {INFORMATION_WHAT_WE_DO.map(({ icon, text }) => (
          <ItemContainer key={icon} icon={icon} text={text} />
        ))}
      </AboutWrapper>
      <Line />
      <CertificatesContainer>
        <div>Закрываем спецификацию любой сложности в кратчайшие сроки</div>
        <img src={CertificateImg} alt="Сертификат" />
      </CertificatesContainer>
    </>
  );
};
