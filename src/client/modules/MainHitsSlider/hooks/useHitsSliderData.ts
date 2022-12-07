import { useQuery } from 'react-query';
import { API_PRODUCTS_HITS_URL } from '@modules/Catalog/constants';

import { ProductsTypeResponse } from '@modules/Catalog/types';
import { useMemo } from 'react';
import { mapProducts } from '@modules/Catalog/utils';
import { getQueryRequest } from '@common/utils';

export const useHitsSliderData = () => {
  const { isLoading, data } = useQuery(
    [API_PRODUCTS_HITS_URL, 'main-hits-slider'],
    getQueryRequest<ProductsTypeResponse>(),
  );

  const productsList = useMemo(() => (data?.list ? mapProducts(data.list) : []), [data]);

  return { isLoading, list: productsList };
};
