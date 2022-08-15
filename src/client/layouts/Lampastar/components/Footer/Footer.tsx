import React from "react";
import {
  DynamicLine,
  StyledFooter,
  InfoLine,
  BackgroundMail,
  DynamicLineContent,
  SubscribeContainer,
  EmailContainer,
  EmailInput,
  BottomInfoContainer,
  FooterColumn,
  FooterLogo,
  InfoContentWrapper,
  CopyrightContainer,
  FooterMenu,
  LeftGroup,
  RightGroup,
  FooterMenuItem,
  MobileInput,
  EmailSubmitButton,
  MobileSubmitButton,
  CallForm,
  SocialBlock,
  SocialItem,
  StyledLinkOuter,
  FooterContactMenu,
} from "./styled";
import { Mail } from "@resources/images";
import { Typography } from "@ui/components/Typography";
import { CONTACTS, FOR_CLIENT_MENU, PAGE_SD, ROUTES } from "@common/constants";
import { Link } from "react-router-dom";
import {
  ClockIcon,
  GeoIcon,
  MailIcon,
  PhoneIcon,
  ViberIcon,
  WhatsappIcon,
} from "@ui/icons";
import { useTheme } from "styled-components";
import { Container, Row, Col } from "styled-bootstrap-grid";
import { BACKEND_ENABLE, useFeature } from "@common/featureToggles";

const { phoneNumber, address, workTime, mail } = CONTACTS;

const MenuList = ({
  menu,
  isBackEnabled,
}: {
  menu: string[];
  isBackEnabled: boolean;
}) => (
  <FooterMenu>
    {menu
      .filter((page) => !isBackEnabled && !PAGE_SD.includes(page))
      .map((page) => (
        <FooterMenuItem key={ROUTES[page].path}>
          <Link to={ROUTES[page].path}>{ROUTES[page].label}</Link>
        </FooterMenuItem>
      ))}
  </FooterMenu>
);

export const Footer = () => {
  const theme = useTheme();

  const year = new Date().getFullYear();

  const showSubscribe = false;

  const isBackEnabled = useFeature(BACKEND_ENABLE);

  return (
    <StyledFooter>
      <DynamicLine>
        {showSubscribe && (
          <DynamicLineContent>
            <BackgroundMail>
              <Mail />
            </BackgroundMail>
            <SubscribeContainer>
              <Container fluid>
                <Row>
                  <Col sm={12} md={5} lg={6} xl={7}>
                    <div>
                      <Typography tag="h3" variant="body5">
                        Мы плохого не расскажем,
                        <br />
                        будет интересно!
                      </Typography>

                      <Typography tag="p" variant="body2">
                        Поделитесь с нами, своей электронной почтой и мы сообщим
                        <br />
                        вам о скидках, выгодных предложениях и новых продуктах.
                      </Typography>
                    </div>
                  </Col>
                  <Col sm={12} md={7} lg={6} xl={5}>
                    <EmailContainer>
                      <EmailInput placeholder="Введите электронную почту" />
                      <EmailSubmitButton>Подписаться</EmailSubmitButton>
                    </EmailContainer>
                  </Col>
                </Row>
              </Container>
            </SubscribeContainer>
          </DynamicLineContent>
        )}
      </DynamicLine>
      <InfoLine>
        <InfoContentWrapper>
          <BottomInfoContainer>
            <LeftGroup>
              <Container fluid>
                <Row>
                  <Col md={3} lg={2}>
                    <FooterColumn>
                      <FooterLogo />
                    </FooterColumn>
                  </Col>
                  <Col md={4} lg={3}>
                    <FooterColumn>
                      <Typography variant="body3">Покупателям</Typography>
                      <MenuList
                        menu={FOR_CLIENT_MENU}
                        isBackEnabled={isBackEnabled}
                      />
                    </FooterColumn>
                  </Col>
                  <Col md={5} lg={6}>
                    <FooterColumn>
                      <Typography variant="body3">Контакты</Typography>
                      <FooterContactMenu>
                        <StyledLinkOuter href={`tel:${phoneNumber.value}`}>
                          <PhoneIcon />
                          {phoneNumber.label}
                        </StyledLinkOuter>
                        <StyledLinkOuter href={`tel:${phoneNumber.value}`}>
                          <ClockIcon />
                          {workTime.label}
                        </StyledLinkOuter>
                        <StyledLinkOuter href={`tel:${phoneNumber.value}`}>
                          <GeoIcon />
                          {address.label}
                        </StyledLinkOuter>
                        <StyledLinkOuter href={`mailto:${mail.value}`}>
                          <MailIcon />
                          {mail.label}
                        </StyledLinkOuter>
                      </FooterContactMenu>
                    </FooterColumn>
                  </Col>
                </Row>
              </Container>
            </LeftGroup>
            <RightGroup>
              <Typography variant="body3">Свяжитесь с нами</Typography>
              {isBackEnabled && (
                <CallForm>
                  <MobileInput placeholder="+7(___)___-__-__" />
                  <MobileSubmitButton>Заказать звонок</MobileSubmitButton>
                </CallForm>
              )}
              <SocialBlock>
                <SocialItem href="">
                  <ViberIcon size={theme.sizes.xl} />
                </SocialItem>
                <SocialItem href="">
                  <WhatsappIcon size={theme.sizes.xl} />
                </SocialItem>
              </SocialBlock>
            </RightGroup>
          </BottomInfoContainer>
          <CopyrightContainer>
            Некоторые изображения товаров могут несущественно отличаться от
            реальных. Все цены, указанные на сайте lampastar.ru, приведены как
            справочная информация и не являются публичной офертой, определяемой
            положениями статьи №437 Гражданского кодекса РФ, и могут быть
            изменены в любое время без предупреждения.
            <br />
            <br />© «ВЕСЬ СВЕТ», {year}
          </CopyrightContainer>
        </InfoContentWrapper>
      </InfoLine>
    </StyledFooter>
  );
};
