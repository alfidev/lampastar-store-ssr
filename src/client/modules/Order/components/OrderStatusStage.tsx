import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { PageTitle } from '@layouts/Lampastar';
import { Button, Typography } from '@ui/components';

import { CreateOrderData } from '../types';

type Props = {
  resetStage: () => void;
  orderData?: CreateOrderData;
};

const MyOrdersButton = styled(Button.Contained)`
  margin-top: ${({ theme }) => theme.indents.m};
`;

const GoHomeButton = styled(Button.Text)`
  margin-top: ${({ theme }) => theme.indents.l};
`;

export const OrderStatusStage = ({ resetStage, orderData }: Props) => {
  const navigate = useNavigate();

  const { id } = orderData || {};

  useEffect(() => {
    if (!id) resetStage();
  }, [id, resetStage]);

  const titleNumber = `Ваш заказ №${id}`;
  const titleStatus = <Typography status="success"> — оформлен. Спасибо за покупку!</Typography>;

  const goHome = () => navigate('/');
  const goMyOrders = () => navigate('/profile/orders');

  return (
    <>
      <PageTitle>
        {titleNumber}
        {titleStatus}
      </PageTitle>
      <Typography variant="body4">Все заказы вы можете отслеживать в вашем Личном кабинете.</Typography>
      <MyOrdersButton onClick={goMyOrders}>Мои заказы</MyOrdersButton>
      <GoHomeButton secondary onClick={goHome}>
        Назад на главную
      </GoHomeButton>
    </>
  );
};
