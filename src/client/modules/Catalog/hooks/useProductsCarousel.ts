import { useQuery } from 'react-query';
import { API_PRODUCTS_CAROUSEL_URL } from '../constants';

import { CarouselType, ProductsTypeResponse } from '../types';
import { useMemo } from 'react';
import { mapProducts } from '../utils';
import { getQueryRequest } from '@common/utils';

export const useProductsCarousel = (type: CarouselType) => {
  const { isLoading, data } = useQuery(
    [API_PRODUCTS_CAROUSEL_URL, type],
    getQueryRequest<ProductsTypeResponse>({ params: { type } }),
  );

  const productsList = useMemo(() => (data?.list ? mapProducts(data.list) : []), [data]);

  return { isLoading, list: productsList };
};
