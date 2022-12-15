import { useQuery } from 'react-query';
import { API_PRODUCTS_HITS_URL } from '@modules/Catalog/constants';

import { ProductsTypeResponse } from '@modules/Catalog/types';
import { getQueryRequest } from '@common/utils';

export const useHitsSliderData = () => {
  const { isLoading, data } = useQuery(
    [API_PRODUCTS_HITS_URL, 'main-hits-slider'],
    getQueryRequest<ProductsTypeResponse>(),
  );

  return { isLoading, list: data?.list || [] };
};
