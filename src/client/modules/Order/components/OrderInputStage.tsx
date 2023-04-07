import { FormikProps } from 'formik';
import React, { Ref } from 'react';

import { CustomerType } from '@common/types';
import { PageTitle } from '@layouts/Lampastar';
import { BasketProduct } from '@modules/Basket';
import { PageLoader } from '@ui/components';

import { OrderFormContainer } from '../containers/OrderFormContainer';
import { OrderFormValuesType } from '../types';
import { OrderTotal } from './OrderTotal';
import { OrderWrapper, OrderSidebarContainer, OrderProductListContainer } from './styled';

type Props = {
  isProgressConfirm: boolean;
  customer?: CustomerType;
  formRef: Ref<FormikProps<OrderFormValuesType>> | undefined;
  onConfirm: (data: OrderFormValuesType) => void;
  basketTotal?: number;
  products: BasketProduct[];
};

export const OrderInputStage = ({ isProgressConfirm, customer, formRef, onConfirm, basketTotal, products }: Props) => (
  <>
    <PageTitle>Оформление заказа</PageTitle>
    <OrderWrapper>
      <PageLoader isLoading={isProgressConfirm} />
      <OrderProductListContainer>
        <OrderFormContainer customer={customer} formRef={formRef} onConfirm={onConfirm} />
      </OrderProductListContainer>
      <OrderSidebarContainer>
        <OrderTotal total={basketTotal} products={products} formRef={formRef} />
      </OrderSidebarContainer>
    </OrderWrapper>
  </>
);
