import { useQuery } from 'react-query';
import { ProductType } from '../types';
import { API_PRODUCT_URL } from '@modules/Catalog/constants';
import { getQueryRequest } from '@common/utils';

export const useProduct = (id: number) => {
  const options = {
    params: {
      productId: id,
    },
  };
  const { data, isLoading, isError } = useQuery([API_PRODUCT_URL, `${id}`], getQueryRequest<ProductType>(options));

  return { isLoading, product: data, isError };
};
