import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { ROUTES } from '@common/constants/routes';
import { Icon } from '@ui/components';

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
  InfoContentWrapper,
  CopyrightContainer,
  FooterMenu,
  LeftGroup,
  RightGroup,
  FooterMenuItem,
  EmailSubmitButton,
  SocialBlock,
  SocialItem,
  StyledLinkOuter,
  FooterContactMenu,
} from './styled';
import { CONTACTS, FOR_CLIENT_MENU } from '../../../../common/constants';
import { USE_CONTACTS_FORM, useFeature } from '../../../../common/featureToggles';
import { CallMeForm } from '../../../../modules/Contacts';
import { Logo, Mail as MailImage } from '../../../../resources/images';
import { Container, Row, Col } from '../../../../ui/components/Adaptive';
import { Typography } from '../../../../ui/components/Typography';
import { Clock, Geo, Mail, Phone, Viber, WhatsApp } from '../../../../ui/icons';

const { phoneNumber, address, workTime, mail } = CONTACTS;

const MenuList = ({ menu }: { menu: string[] }) => (
  <FooterMenu>
    {menu.map((page) => (
      <FooterMenuItem key={ROUTES[page].path}>
        <Link href={ROUTES[page].path}>{ROUTES[page].label}</Link>
      </FooterMenuItem>
    ))}
  </FooterMenu>
);

type Props = {
  menuIsOpened: boolean;
};

export const Footer = ({ menuIsOpened }: Props) => {
  const year = new Date().getFullYear();

  const showSubscribe = false;

  const isContactFormEnabled = useFeature(USE_CONTACTS_FORM);

  return (
    <StyledFooter menuIsOpened={menuIsOpened}>
      <DynamicLine>
        {showSubscribe && (
          <DynamicLineContent>
            <BackgroundMail>
              <MailImage />
            </BackgroundMail>
            <SubscribeContainer>
              <Container>
                <Row>
                  <Col mobile={12} tablet={5} desktopS={6} desktopM={7}>
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
                  <Col mobile={12} tablet={7} desktopS={6} desktopM={5}>
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
              <Container>
                <Row>
                  <Col tablet={3} desktopS={2}>
                    <FooterColumn>
                      <Image src={Logo} alt="LAMPASTAR" />
                    </FooterColumn>
                  </Col>
                  <Col tablet={4} desktopS={3}>
                    <FooterColumn>
                      <Typography variant="body3">Покупателям</Typography>
                      <MenuList menu={FOR_CLIENT_MENU} />
                    </FooterColumn>
                  </Col>
                  <Col tablet={5} desktopS={6}>
                    <FooterColumn>
                      <Typography variant="body3">Контакты</Typography>
                      <FooterContactMenu>
                        <StyledLinkOuter href={`tel:${phoneNumber.value}`}>
                          <Icon icon={Phone} />
                          {phoneNumber.label}
                        </StyledLinkOuter>
                        <StyledLinkOuter href={`tel:${phoneNumber.value}`}>
                          <Icon icon={Clock} />
                          {workTime.label}
                        </StyledLinkOuter>
                        <StyledLinkOuter href={`tel:${phoneNumber.value}`}>
                          <Icon icon={Geo} />
                          {address.label}
                        </StyledLinkOuter>
                        <StyledLinkOuter href={`mailto:${mail.value}`}>
                          <Icon icon={Mail} />
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
              {isContactFormEnabled && <CallMeForm />}
              <SocialBlock>
                <SocialItem href={`viber://chat?number=${phoneNumber.wa}`} target="_blank">
                  <Icon icon={Viber} size="xxxxl" />
                </SocialItem>
                <SocialItem href={`https://wa.me/${phoneNumber.wa}`} target="_blank">
                  <Icon icon={WhatsApp} size="xxxxl" />
                </SocialItem>
              </SocialBlock>
            </RightGroup>
          </BottomInfoContainer>
          <CopyrightContainer>
            Некоторые изображения товаров могут несущественно отличаться от реальных. Все цены, указанные на сайте
            lampastar.ru, приведены как справочная информация и не являются публичной офертой, определяемой положениями
            статьи №437 Гражданского кодекса РФ, и могут быть изменены в любое время без предупреждения.
            <br />
            <br />© «ВЕСЬ СВЕТ», {year}
          </CopyrightContainer>
        </InfoContentWrapper>
      </InfoLine>
    </StyledFooter>
  );
};
