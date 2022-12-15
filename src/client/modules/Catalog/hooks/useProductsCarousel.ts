import { useQuery } from 'react-query';
import { API_PRODUCTS_CAROUSEL_URL } from '../constants';

import { CarouselType, ProductsTypeResponse } from '../types';
import { getQueryRequest } from '@common/utils';

export const useProductsCarousel = (type: CarouselType) => {
  const { isLoading, data } = useQuery(
    [API_PRODUCTS_CAROUSEL_URL, type],
    getQueryRequest<ProductsTypeResponse>({ params: { type } }),
  );

  return { isLoading, list: data?.list || [] };
};
