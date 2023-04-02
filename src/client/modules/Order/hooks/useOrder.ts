import { useMutation, useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { useToasts } from '@common/hooks';
import { BASKET_DATA_QUERY_KEY } from '@common/hooks/useBasket';
import { ToastStatusEnum } from '@common/types';
import { getQueryRequest } from '@common/utils';

import { API_ORDER_CONFIRM_URL, API_ORDER_DATA_URL } from '../constants';
import { CreateOrderData, OrderDataResponse, OrderFormValuesType } from '../types';

const getStartOrderOptions = {
  url: API_ORDER_DATA_URL,
};

const confirmOrderOptions = {
  url: API_ORDER_CONFIRM_URL,
  method: 'POST',
};

export const useOrder = () => {
  const navigate = useNavigate();
  const { addToast } = useToasts();

  const confirmOrderQueryOptions = {
    onError: () => {
      addToast({
        message: 'Не удалось оформить заказ, попробуйте позже или обратитесь к менеджеру',
        status: ToastStatusEnum.ERROR,
      });
    },
    onSuccess: () => {
      navigate('status', { replace: true });
    },
  };

  const { data, isLoading: isLoadingData } = useQuery(
    [BASKET_DATA_QUERY_KEY, API_ORDER_DATA_URL],
    getQueryRequest<OrderDataResponse>(getStartOrderOptions),
  );

  const {
    mutate,
    isLoading: isProgressConfirm,
    data: orderData,
  } = useMutation(getQueryRequest<CreateOrderData, OrderFormValuesType>(confirmOrderOptions), confirmOrderQueryOptions);

  const handleConfirm = (confirmData: OrderFormValuesType) => {
    mutate(confirmData);
  };

  return {
    productList: data?.products || [],
    basket: data?.basket,
    customer: data?.customer,
    orderData,
    handleConfirm,
    isLoadingData,
    isProgressConfirm,
  };
};
