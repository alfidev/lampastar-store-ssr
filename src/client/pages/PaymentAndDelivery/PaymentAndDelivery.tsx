import React, { ReactNode } from 'react';
import { Divider, StyledTitle, Details, StyledParagraph, TransparentDivider } from './styled';
import { PageTitle } from '@layouts/Lampastar';
import { Col, Container, Row } from '@ui/components/Adaptive';
import {
  AirplaneIcon,
  BuildingsIcon,
  CoinIcon,
  MailIcon,
  MoneyIcon,
  PackageIcon,
  PlasticCardAltIcon,
  ReceiptIcon,
  TruckIcon,
} from '@ui/icons';
import { useTheme } from 'styled-components';

const ItemTitle = ({ children }: { children: ReactNode }) => (
  <StyledTitle variant="body5" tag="h4">
    {children}
  </StyledTitle>
);

const CaptionText = ({ children }: { children: ReactNode }) => (
  <StyledParagraph variant="mini2" tag="p" color="tertiary">
    {children}
  </StyledParagraph>
);

export const PaymentAndDelivery = () => {
  const theme = useTheme();

  return (
    <>
      <PageTitle>Оплата</PageTitle>
      <Divider />
      <Container>
        <Row>
          <Col desktopS={5} mobile={12}>
            <ItemTitle>
              <MoneyIcon size={theme.sizes.xxl} color="contrast" mr="s" />
              Расчёт наличными и по карте в офисе
            </ItemTitle>
            <Details>
              <CaptionText>
                Вы можете оплататить заказ при помощи терминала приёма пластиковых карт или наличными средствами.
              </CaptionText>
            </Details>
            <ItemTitle>
              <PlasticCardAltIcon size={theme.sizes.xxl} color="contrast" mr="s" />
              Оплата банковской картой на сайте
            </ItemTitle>
            <Details>
              <CaptionText>
                Принимаем к оплате Visa, MasterCard, Maestro, PayPal, American Express, Discover. В разделе «Корзина»
                выберите способ оплаты «Оплата банковской картой на сайте» и следуйте согласно инструкциям.
              </CaptionText>
            </Details>
          </Col>
          <Col desktopS={2} mobile={12} />
          <Col desktopS={5} mobile={12}>
            <ItemTitle>
              <BuildingsIcon size={theme.sizes.xxl} color="contrast" mr="s" />
              Безналичный расчёт для организаций
            </ItemTitle>
            <Details>
              <CaptionText>
                В разделе «Корзина» выберите тип плательщика «Организация», заполните реквизиты и оплатите счёт, который
                генерируется сайтом автоматически.
              </CaptionText>
            </Details>
            <ItemTitle>
              <ReceiptIcon size={theme.sizes.xxl} color="contrast" mr="s" />
              Перевод наличных в банке на счёт организации
            </ItemTitle>
            <Details>
              <CaptionText>
                Интернет-заказ Вы можете оплатить наличными в отделении любого банка, предъявив счёт, который
                генерируется сайтом автоматически.
              </CaptionText>
            </Details>
          </Col>
        </Row>
      </Container>
      <TransparentDivider />
      <PageTitle>Доставка</PageTitle>
      <Divider />
      <Container>
        <Row>
          <Col desktopS={5} mobile={12}>
            <ItemTitle>
              <PackageIcon size={theme.sizes.xxl} color="contrast" mr="s" />
              Cамовывоз
            </ItemTitle>
            <Details>
              <CaptionText>
                Забрать товар вы можете по адресу: г. Омск, ул. 20-я Линия, д. 103. Мы работаем с 9.00 до 18.00 без
                обеда, кроме субботы и воскресенья.
              </CaptionText>
            </Details>
            <ItemTitle>
              <CoinIcon size={theme.sizes.xxl} color="contrast" mr="s" />
              Платная доставка
            </ItemTitle>
            <Details>
              <CaptionText>
                Осуществляется только по г. Омску при заказе до 3 000 руб. Стоимость услуги – 500 руб.
              </CaptionText>
            </Details>
            <ItemTitle>
              <MailIcon size={theme.sizes.xxl} color="contrast" mr="s" />
              Почта России
            </ItemTitle>
            <Details>
              <CaptionText>
                При выборе данного способа доставки ваш заказ будет отправлен вам посылкой. Стоимость почтовых услуг
                оплачивается Получателем в момент получения заказа в отделении Почты России наложенным платежом (плюс
                комиссия за денежный перевод, которая составляет в среднем по России около 2%).
              </CaptionText>
            </Details>
          </Col>
          <Col desktopS={2} mobile={12} />
          <Col desktopS={5} mobile={12}>
            <ItemTitle>
              <TruckIcon size={theme.sizes.xxl} color="contrast" mr="s" />
              Бесплатная доставка экспедитором нашей компании
            </ItemTitle>
            <Details>
              <CaptionText>
                Осуществляется по г. Омску при заказе от 3 000 руб. По Омской области – от 15 000 руб. При меньшей сумме
                заказа стоимость услуг экспедитора по г. Омску – 500 руб.
              </CaptionText>
            </Details>
            <ItemTitle>
              <AirplaneIcon size={theme.sizes.xxl} color="contrast" mr="s" />
              Через любую транспортную компанию
            </ItemTitle>
            <Details>
              <CaptionText>
                При заказе на сумму от 3 000 руб.* мы бесплатно доставим товар до любой транспортной компании г. Омска.
                Нужно только сообщить её название.
                <br />
                <br />* для постоянных клиентов бесплатная доставка до ТК возможна и на меньшую сумму.
              </CaptionText>
            </Details>
          </Col>
        </Row>
      </Container>
    </>
  );
};
