import { FormikProps } from 'formik';
import React, { Ref, useRef } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import { OrderInputStage } from '../components/OrderInputStage';
import { OrderStatusStage } from '../components/OrderStatusStage';
import { useOrder } from '../hooks';
import { OrderFormValuesType } from '../types';

export const Order = () => {
  const navigate = useNavigate();

  const { isLoadingData, isProgressConfirm, productList, basket, customer, handleConfirm, orderData } = useOrder();

  const formRef = useRef<HTMLFormElement>() as unknown as Ref<FormikProps<OrderFormValuesType>> | undefined;

  if (isLoadingData) return <>LOADING...</>;

  const resetStage = () => navigate('', { replace: true });

  return (
    <Routes>
      <Route
        index
        element={
          <OrderInputStage
            customer={customer}
            isProgressConfirm={isProgressConfirm}
            formRef={formRef}
            onConfirm={handleConfirm}
            basketTotal={basket?.total}
            products={productList}
          />
        }
      />
      <Route
        path="status"
        element={<OrderStatusStage resetStage={resetStage} orderData={orderData} showLCInfo={!!customer?.id} />}
      />
    </Routes>
  );
};
