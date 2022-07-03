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
import { CONTACTS, FOR_CLIENT_MENU, ROUTES } from "@common/constants";
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

const { phoneNumber, address, workTime, mail } = CONTACTS;

const MenuList = ({ menu }: { menu: string[] }) => (
  <FooterMenu>
    {menu.map((page) => (
      <FooterMenuItem>
        <Link to={ROUTES[page].path}>{ROUTES[page].label}</Link>
      </FooterMenuItem>
    ))}
  </FooterMenu>
);

export const Footer = () => {
  const theme = useTheme();

  const year = new Date().getFullYear();

  const showSubscribe = false;

  return (
    <StyledFooter>
      <DynamicLine>
        {showSubscribe && (
          <DynamicLineContent>
            <BackgroundMail>
              <Mail />
            </BackgroundMail>
            <SubscribeContainer>
              <div>
                <Typography tag="h3" variant="body4">
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
              <EmailContainer>
                <EmailInput placeholder="Введите электронную почту" />
                <EmailSubmitButton>Подписаться</EmailSubmitButton>
              </EmailContainer>
            </SubscribeContainer>
          </DynamicLineContent>
        )}
      </DynamicLine>
      <InfoLine>
        <InfoContentWrapper>
          <BottomInfoContainer>
            <LeftGroup>
              <FooterColumn>
                <FooterLogo />
              </FooterColumn>
              <FooterColumn>
                <Typography variant="body3">Покупателям</Typography>
                <MenuList menu={FOR_CLIENT_MENU} />
              </FooterColumn>
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
            </LeftGroup>
            <RightGroup>
              <Typography variant="body3">Свяжитесь с нами</Typography>
              <CallForm>
                <MobileInput placeholder="+7(___)___-__-__" />
                <MobileSubmitButton>Заказать звонок</MobileSubmitButton>
              </CallForm>
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
