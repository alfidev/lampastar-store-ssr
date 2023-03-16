import { useQuery } from 'react-query';

import { getQueryRequest } from '@common/utils';

import { API_PRODUCT_URL } from '../constants';
import { ProductType } from '../types';

export const useProduct = (id: number) => {
  const options = {
    params: {
      productId: id,
    },
  };
  const { data, isLoading, isError } = useQuery([API_PRODUCT_URL, `${id}`], getQueryRequest<ProductType>(options));

  return { isLoading, product: data, isError };
};
