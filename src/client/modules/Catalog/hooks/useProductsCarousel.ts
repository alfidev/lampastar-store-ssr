import { useMemo } from 'react';
import { useQuery } from 'react-query';

import { useBasket } from '@common/hooks';
import { getQueryRequest } from '@common/utils';

import { API_PRODUCTS_CAROUSEL_URL } from '../constants';
import { CarouselType, ProductsTypeResponse } from '../types';
import { mapProducts } from '../utils';

export const useProductsCarousel = (type: CarouselType) => {
  const { products } = useBasket();

  const { isLoading, data } = useQuery(
    [API_PRODUCTS_CAROUSEL_URL, type],
    getQueryRequest<ProductsTypeResponse>({ params: { type } }),
  );

  const list = useMemo(() => mapProducts(data?.list ?? [], products), [data?.list, products]);

  return { isLoading, list };
};
