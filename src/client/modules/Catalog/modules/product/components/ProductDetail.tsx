import React from 'react';
import styled from 'styled-components';

import { formatSum } from '@common/utils';
import { PageTitle } from '@layouts/Lampastar';
import { ProductType } from '@modules/Catalog/types';
import { Container, Row, Col, Card, Counter, ButtonContained } from '@ui/components';
import { Typography } from '@ui/components';
import { FastDelivery, NoImage, OpenedBox, Shop } from '@ui/icons';

type Props = {
  product: ProductType;
  onChangeCount: (id: number, count: number) => Promise<void>;
};

const StyledImage = styled.img`
  max-width: 100%;
  width: 100%;
`;

const PriceLine = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: ${({ theme }) => theme.indents.s};
`;

const ActualPrice = styled.div`
  ${({ theme }) => theme.typography.main1};
  white-space: nowrap;
`;

const OldPrice = styled.div`
  white-space: nowrap;
  ${({ theme }) => theme.typography.main2};
  color: ${({ theme }) => theme.color.text.light};
  position: relative;
  margin-left: ${({ theme }) => theme.indents.s};

  ::before {
    content: '';
    position: absolute;
    left: -3px;
    right: -3px;
    top: calc(50% - 1px);
    height: 2px;
    background: ${({ theme }) => theme.color.text.light};
    transform: rotate(175deg);
  }
`;

const DeliveryBlock = styled.div`
  margin-top: ${({ theme }) => theme.indents.s};
`;

const DeliveryIcon = styled.div`
  svg {
    width: 25px;
    height: 25px;
  }
`;

const DeliveryTitle = styled.div`
  display: flex;
  align-items: center;
`;

const StyledCard = styled(Card)`
  height: 100%;
`;

const StyledColCard = styled(Col)`
  margin-bottom: ${({ theme }) => theme.indents.s};
`;

export const ProductDetail = ({ product, onChangeCount }: Props) => {
  const { id, name, image, price, discount, special, notAvailable, forOrder } = product;

  const addToBasketHandler = () => {
    onChangeCount(id, 1);
  };

  const onChangeCounter = (count: number) => {
    onChangeCount(id, count);
  };

  const buttonText = (forOrder && 'Под заказ') || (notAvailable && 'Нет в наличии') || 'В корзину';

  const priceString = price ? formatSum(special || discount || price) : undefined;
  const oldPriceString = priceString && (special || discount) ? formatSum(price) : undefined;

  const countInBasket = 0;

  const showCounter = countInBasket && !notAvailable && !forOrder;

  return (
    <Container>
      <Row indent={12}>
        <StyledColCard desktopS={5}>
          <StyledCard>{image ? <StyledImage src={image} /> : <NoImage />}</StyledCard>
        </StyledColCard>
        <StyledColCard desktopS={7}>
          <StyledCard>
            <Container>
              <Row>
                <Col>
                  <PageTitle>{name}</PageTitle>
                </Col>
              </Row>
              <Row indent={8}>
                <Col desktopS={8}>
                  <Container>
                    <Row>
                      <Col>{false && <Typography variant="body2">Основные характеристики</Typography>}</Col>
                    </Row>
                    <Row indent={8}>
                      <Col desktopS={6} />
                      <Col desktopS={6} />
                    </Row>
                  </Container>
                </Col>
                <Col desktopS={4}>
                  <PriceLine>
                    {priceString && <ActualPrice>{priceString}</ActualPrice>}
                    {oldPriceString && <OldPrice>{oldPriceString}</OldPrice>}
                  </PriceLine>
                  {showCounter ? (
                    <Counter value={countInBasket} onChange={onChangeCounter} />
                  ) : (
                    <ButtonContained secondary isFluid disabled={notAvailable || forOrder} onClick={addToBasketHandler}>
                      {buttonText}
                    </ButtonContained>
                  )}
                  <DeliveryBlock>
                    <DeliveryTitle>
                      <DeliveryIcon>
                        <Shop />
                      </DeliveryIcon>
                      Самовывоз
                    </DeliveryTitle>
                    <Typography variant="mini1">из магазина, бесплатно</Typography>
                  </DeliveryBlock>
                  <DeliveryBlock>
                    <DeliveryTitle>
                      <DeliveryIcon>
                        <FastDelivery />
                      </DeliveryIcon>
                      Доставка
                    </DeliveryTitle>
                    <Typography variant="mini1">экспедитором нашей компании по городу Омску</Typography>
                  </DeliveryBlock>
                  <DeliveryBlock>
                    <DeliveryTitle>
                      <DeliveryIcon>
                        <OpenedBox />
                      </DeliveryIcon>
                      Почта России
                    </DeliveryTitle>
                    <Typography variant="mini1">отправка товара через почту России</Typography>
                  </DeliveryBlock>
                </Col>
              </Row>
            </Container>
          </StyledCard>
        </StyledColCard>
      </Row>
    </Container>
  );
};
