import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { formatSum } from '@common/utils';
import { Button, Card } from '@ui/components';

type Props = {
  total?: number;
};
const SumContainer = styled.div`
  margin-bottom: ${({ theme }) => theme.indents.xs};
`;
export const BasketTotal = ({ total }: Props) => {
  const navigate = useNavigate();

  const totalSum = formatSum(total || 0);

  const onClickHandler = () => navigate('/order');

  return (
    <Card>
      <SumContainer>Сумма заказа: {totalSum}</SumContainer>
      <Button.Contained isFluid secondary onClick={onClickHandler}>
        Оформить заказ
      </Button.Contained>
    </Card>
  );
};
